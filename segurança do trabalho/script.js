
// C >> Create  >> Cadastrar
// R   >> Read   >> Ler
// U   >>  Update  >> alterar/atualizar/editar/fuçar/mudar
// D   >>  Delete  >> Apagar/deletar/excluir

// ctrl + ;

// const nomes = []
// const alturas = []




// console.log(dino);

let funcionarios = [];

function salvarDados() {
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}

function carregarDados() {
    funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
}

function cadastrarFuncionario() {

    carregarDados();

    const funcionario = {
        id: Date.now(),
        nome: document.getElementById("input-nome").value,
        setor: document.getElementById("input-setor").value,
        funcao: document.getElementById("input-funcao").value,
        data: document.getElementById("input-data").value,
        validade: document.getElementById("input-validade").value
    };

    funcionarios.push(funcionario);

    salvarDados();
    mostrarFuncionarios();
    limparFormulario();
}

function mostrarFuncionarios() {

    carregarDados();

    let painel = document.getElementById("painel-funcionario");

    painel.innerHTML = "";

    for (let i = 0; i < funcionarios.length; i++) {

        painel.innerHTML += `
        <div class="card">
            <h2>${funcionarios[i].nome}</h2>

            <p><b>Setor:</b> ${funcionarios[i].setor}</p>

            <p><b>Função:</b> ${funcionarios[i].funcao}</p>

            <p><b>Data:</b> ${funcionarios[i].data}</p>

            <p><b>Validade:</b> ${funcionarios[i].validade}</p>
        </div>
        `;
    }
}

function pesquisarFuncionario() {

    carregarDados();

    let nome = document.getElementById("input-nome").value;

    for (let i = 0; i < funcionarios.length; i++) {

        if (funcionarios[i].nome.toLowerCase() == nome.toLowerCase()) {

            document.getElementById("input-setor").value = funcionarios[i].setor;
            document.getElementById("input-funcao").value = funcionarios[i].funcao;
            document.getElementById("input-data").value = funcionarios[i].data;
            document.getElementById("input-validade").value = funcionarios[i].validade;

            return;
        }
    }

    alert("Funcionário não encontrado!");
}

function excluirFuncionario() {

    carregarDados();

    let nome = document.getElementById("input-nome").value;

    for (let i = 0; i < funcionarios.length; i++) {

        if (funcionarios[i].nome.toLowerCase() == nome.toLowerCase()) {

            funcionarios.splice(i, 1);

            salvarDados();
            mostrarFuncionarios();
            limparFormulario();

            alert("Funcionário excluído!");

            return;
        }
    }

    alert("Funcionário não encontrado!");
}

function limparFormulario() {

    document.getElementById("input-nome").value = "";
    document.getElementById("input-setor").value = "";
    document.getElementById("input-funcao").value = "";
    document.getElementById("input-data").value = "";
    document.getElementById("input-validade").value = "";

    document.getElementById("input-nome").focus();
}

mostrarFuncionarios();
