const alunos = [];

const formulario = document.getElementById('formulario');
const studentlist = document.getElementById('student-list');
const btncarregar = document.getElementById('btn-carregar');



formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const turmaInput = document.getElementById('turma');
    const notaInput = document.getElementById('nota');

    // Se algum desses for null, o erro aparece
    const nome = nomeInput.value;
    const idade = Number(idadeInput.value);
    const turma = turmaInput.value;
    const nota = Number(notaInput.value);

    const aluno = {
        nome,
        idade,
        turma,
        nota
    };

    alunos.push(aluno);

    formulario.reset();
});

function mostrarAlunos() {
    studentlist.innerHTML = '';

    for (const aluno of alunos) {
        const { nome, idade, turma, nota } = aluno;

        const item = document.createElement('li');
        item.textContent = `${nome} (${idade} anos) - Turma ${turma} - Nota: ${nota}`;

        studentlist.appendChild(item);
    }
}
btncarregar.addEventListener('click', function () {
    mostrarAlunos();
});
