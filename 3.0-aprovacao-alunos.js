console.log("Verificador de Aprovação dos Alunos");
console.log("Cada aluno faz 3 provas no valor de 100 pontos cada.");
console.log("Com base na média das notas, a nota final é dada de acordo com a tabela abaixo.");
console.log();

console.log("| Média das Notas | Nota Final |");
console.log("| [00, 60[        | F          |");
console.log("| [60, 70[        | D          |");
console.log("| [70, 80[        | C          |");
console.log("| [80, 90[        | B          |");
console.log("| [90, 100]       | A          |");
console.log();

console.log("Para ser aprovado o aluno deve tirar uma nota maior que F e ter pelo menos 70% de frequência.");
console.log();

var notaProva1 = +prompt("Digite a nota do aluno na prova 1");
var notaProva2 = +prompt("Digite a nota do aluno na prova 2");
var notaProva3 = +prompt("Digite a nota do aluno na prova 3");
var frequencia = +prompt("Digite a frequência do aluno");

var media = (notaProva1 + notaProva2 + notaProva3) / 3;
var notaFinal;

if (media < 60) {
    notaFinal = "F";
} else if (media < 70) {
    notaFinal = "D";
} else if (media < 80) {
    notaFinal = "C";
} else if (media < 90) {
    notaFinal = "B";
} else {
    notaFinal = "A";
}

console.log();
console.log(`A nota final do aluno é: ${notaFinal} (${media.toFixed(2)}%)`);

if (frequencia < 70) {
    console.log(`Aluno reprovado por frequência. Frequência registrada: ${frequencia}%. Frequência mínima: 70%.`);
} else if (notaFinal === "F") {
    console.log(`Aluno reprovado por nota.`);
} else {
    console.log(`Aluno aprovado!`);
}
