let notaAluno = 88;

let notaA = 90;
let notaB = 80;
let notaC = 70;
let notaD = 60;
let notaF = 59;

if (notaAluno > 100) {
    console.log('Nota máxima permitida 100!')
} else if (notaAluno >= notaA) {
    console.log('Aluno nota A!')
} else if (notaAluno >= notaB) {
    console.log('Aluno nota B!')
} else if (notaAluno >= notaC) {
    console.log('Aluno nota C!')
} else if (notaAluno >= notaD) {
    console.log('Aluno nota D!')
} else {
    console.log('Aluno nota F')
}

/*function getScore(score) {
    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60 && score >= 0;

    let scoreFinal

    if (scoreA) {
        scoreFinal = 'A'
    } else if (scoreB) {
        scoreFinal = 'B'
    } else if (scoreC) {
        scoreFinal = 'C'
    } else if (scoreD) {
        scoreFinal = 'D'
    } else if (scoreF) {
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Nota inválida'
    }

    return scoreFinal
}

console.log(getScore(100)) */