// array com os dados dos alunos
const alunos = [
    { nome: "João da Silva", nota1: 7, nota2: 8.5 }, 
    { nome: "Pedro Santos", nota1: 9, nota2: 9.5 },  
    { nome: "Davi Tosatti", nota1: 8, nota2: 7.5 }   
];

// for para percorrer cada aluno e calcular as notas
for (let i = 0; i < alunos.length; i++) {
  
    let nomeAluno = alunos[i].nome;
    let primeiraNota = alunos[i].nota1;
    let segundaNota = alunos[i].nota2;
    
    // multiplicando pelos pesos exigidos
    let peso1 = primeiraNota * 0.6;
    let peso2 = segundaNota * 0.4;
    
    // somando as variáveis multiplicadas
    let notaTotal = peso1 + peso2;

    // alerta informando o nome e as notas individuais
    alert("Aluno(a): " + nomeAluno + 
          "\nPrimeira Nota: " + primeiraNota + 
          "\nSegunda Nota: " + segundaNota);

    // alerta informando a nota total
    alert("Nota Total de " + nomeAluno + ": " + notaTotal.toFixed(2));
}