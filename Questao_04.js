// classe aluno
class Aluno {

    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    // Nome completo
    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    // Média
    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    // Situação
    situacao() {
        if (this.media() > 6) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

// Array de alunos
const turma = [
    new Aluno("Pedro", "Santos", 8.0, 7.5),
    new Aluno("Davi", "Tosatti", 9.0, 8.5),
    new Aluno("Gabriel", "Vaz", 5.0, 6.0),
    new Aluno("Felipe", "Cursi", 7.0, 9.0),
    new Aluno("Carlos", "Augusto", 4.0, 5.5)
];

// função para percorrer o array de alunos e exibir os dados em alertar
function exibirBoletim(listaDeAlunos) {
    
    for (let i = 0; i < listaDeAlunos.length; i++) {
        let aluno = listaDeAlunos[i];
        
        let mensagem = "Nome Completo: " + aluno.nomeCompleto() +
                       "\nMédia: " + aluno.media().toFixed(2) +
                       "\nSituação: " + aluno.situacao();
                       
        alert(mensagem);
    }
}


exibirBoletim(turma);