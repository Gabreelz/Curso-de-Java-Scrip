const alunos = [
    {nome : 'João', sobrenome : 'Silva', turma : '1A', nota : 8.5},
    {nome : 'Maria', sobrenome : 'Souza', turma : '1B', nota : 9.0},
    {nome : 'Pedro', sobrenome : 'Oliveira', turma : '1A', nota : 7.5},
    {nome : 'Ana', sobrenome : 'Pereira', turma : '1C', nota : 8.0},
    {nome : 'Lucas', sobrenome : 'Almeida', turma : '1B', nota : 6.5},
]


const btnload = document.getElementById('btn-load');
const studentlist = document.getElementById('student-list');

btnload.addEventListener('click', function() {

studentlist.innerHTML = '';

    for(const aluno of alunos) {
        const {nome, sobrenome, turma, nota} = aluno;

        const item = document.createElement('li');
        item.textContent = `${nome} ${sobrenome} - ${turma} - Nota: ${nota}`;

        studentlist.appendChild(item);
    }

});