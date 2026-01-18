let usuarioLogado = null;

// Funções de Modal
function abrirModal(tipo) {
  document.getElementById('modal-' + tipo).classList.add('active');
}

function fecharModal(tipo) {
  document.getElementById('modal-' + tipo).classList.remove('active');
}

// Criar Conta
function criarConta(e) {
  e.preventDefault();
  
  const cpf = document.getElementById('cpf-cadastro').value;
  const senha = document.getElementById('senha-cadastro').value;
  const confirmarSenha = document.getElementById('confirmar-senha').value;
  
  // Validar CPF (apenas números)
  if (!/^\d{11}$/.test(cpf)) {
    alert('CPF deve conter exatamente 11 números, sem pontos ou traços!');
    return;
  }
  
  // Validar senha (exatamente 8 caracteres)
  if (senha.length !== 8) {
    alert('A senha deve conter exatamente 8 caracteres!');
    return;
  }
  
  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const dataNasc = document.getElementById('data-nascimento').value;
  const rua = document.getElementById('rua').value;
  const numero = document.getElementById('numero').value;
  const bairro = document.getElementById('bairro').value;
  const cidadeUf = document.getElementById('cidade-uf').value;
  
  usuarioLogado = { 
    nome, 
    cpf, 
    email, 
    dataNasc, 
    endereco: { rua, numero, bairro, cidadeUf }
  };
  
  alert('Conta criada com sucesso! Faça login para continuar.');
  fecharModal('criar-conta');
  document.querySelectorAll('input').forEach(input => input.value = '');
}

// Fazer Login
function fazerLogin(e) {
  e.preventDefault();
  
  const cpf = document.getElementById('cpf-login').value;
  const senha = document.getElementById('senha-login').value;
  
  if (!usuarioLogado) {
    alert('Nenhuma conta encontrada. Crie uma conta primeiro!');
    return;
  }
  
  document.getElementById('pagina-inicial').style.display = 'none';
  document.querySelector('header').style.display = 'none';
  document.getElementById('dashboard').classList.add('active');
  document.getElementById('nome-usuario').textContent = usuarioLogado.nome.split(' ')[0];
  
  fecharModal('login');
}

// Sair
function sair() {
  document.getElementById('dashboard').classList.remove('active');
  document.getElementById('pagina-inicial').style.display = 'block';
  document.querySelector('header').style.display = 'block';
}

// Mudar Aba
function mudarAba(aba) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById('aba-' + aba).classList.add('active');
}

// Solicitar Crédito
function solicitarCredito(e) {
  e.preventDefault();
  
  const renda = document.getElementById('renda-mensal').value;
  const score = document.getElementById('score-credito').value;
  
  alert('Solicitação enviada com sucesso! Análise de crédito em andamento. Você receberá o resultado em até 48 horas.');
  fecharModal('solicitar-credito');
  document.querySelectorAll('#modal-solicitar-credito input, #modal-solicitar-credito select').forEach(input => {
    if(input.type === 'checkbox') input.checked = false;
    else input.value = '';
  });
}

// Salvar Configurações
function salvarConfiguracoes(e) {
  e.preventDefault();
  
  const rua = document.getElementById('config-rua').value;
  const numero = document.getElementById('config-numero').value;
  const bairro = document.getElementById('config-bairro').value;
  const cidadeUf = document.getElementById('config-cidade').value;
  
  usuarioLogado.endereco = { rua, numero, bairro, cidadeUf };
  
  alert('Endereço atualizado com sucesso!');
  fecharModal('configuracoes');
}

// Preencher dados nas configurações quando abrir
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-config') || e.target.textContent.includes('Configurações')) {
    if (usuarioLogado) {
      document.getElementById('config-nome').value = usuarioLogado.nome;
      document.getElementById('config-cpf').value = usuarioLogado.cpf;
      document.getElementById('config-email').value = usuarioLogado.email;
      document.getElementById('config-data').value = usuarioLogado.dataNasc;
      document.getElementById('config-rua').value = usuarioLogado.endereco.rua;
      document.getElementById('config-numero').value = usuarioLogado.endereco.numero;
      document.getElementById('config-bairro').value = usuarioLogado.endereco.bairro;
      document.getElementById('config-cidade').value = usuarioLogado.endereco.cidadeUf;
    }
  }
});

// Validação de CPF em tempo real (apenas números)
document.addEventListener('DOMContentLoaded', function() {
  const cpfInput = document.getElementById('cpf-cadastro');
  if (cpfInput) {
    cpfInput.addEventListener('input', function(e) {
      this.value = this.value.replace(/\D/g, '');
    });
  }
});