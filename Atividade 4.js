function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

const notas = [];

for (let i = 1; i <= 3; i++) {
    const nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
    notas.push(nota);
}

const media = calcularMedia(notas);

if (media <= 4) {
    console.log(`Média: ${media}`);
    console.log("Aluno reprovado.");
} else if (media < 7) {
    console.log(`Média: ${media}`);
    console.log("Aluno em recuperação.");
    
    const notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação: "));
    const mediaFinal = (media + notaRecuperacao) / 2;
    
    if (mediaFinal >= 5) {
        console.log(`Média final: ${mediaFinal}`);
        console.log("Aluno aprovado na recuperação.");
    } else {
        console.log(`Média final: ${mediaFinal}`);
        console.log("Aluno reprovado na recuperação.");
    }
} else {
    console.log(`Média: ${media}`);
    console.log("Aluno aprovado.");
}
