
let colaboradores = [];

function carregarDados() {
  const dadosSalvos = localStorage.getItem('colaboradores');
  if (dadosSalvos) {
    colaboradores = JSON.parse(dadosSalvos);
  }
}

function salvarDados() {
  localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
}

function limparFormulario() {
  document.getElementById('input-noms').value = '';
  document.getElementById('input-setor').value = '';
  document.getElementById('input-função').value = '';
}

function mostrarTodos() {
  console.log('Lista atualizada de colaboradores:', colaboradores);
}

function cadastrarColaborador() {
  carregarDados();

  const nomeEl = document.getElementById('input-noms');
  const setorEl = document.getElementById('input-setor');
  const funcaoEl = document.getElementById('input-função');

  const nome = nomeEl.value.trim();
  const setor = setorEl.value.trim();
  const funcao = funcaoEl.value.trim();

  if (!nome || !setor || !funcao) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  
  const removerTags = (texto) => texto.replace(/<[^>]*>?/gm, '');

  const novoColaborador = {
    id: Date.now(),
    nome: removerTags(nome),
    setor: removerTags(setor),
    funcao: removerTags(funcao)
  };

  if (typeof colaboradores !== 'undefined') {
    colaboradores.push(novoColaborador);
  } else {
    console.error('Erro: A lista "colaboradores" não foi iniciada.');
    return;
  }

  limparFormulario();
  mostrarTodos();
  salvarDados();
}