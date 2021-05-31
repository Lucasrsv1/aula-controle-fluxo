var nota = prompt("Digite a nota do aluno").toUpperCase();

switch (nota) {
	case "A":
		console.log("Este aluno é excelente!");
		break;
	case "B":
		console.log("Este aluno é ótimo!");
		break;
	case "C":
		console.log("Este aluno é bom.");
		break;
	case "D":
		console.log("Este aluno é regular.");
		break;
	case "F":
		console.log("Este aluno é ruim!");
		break;
	default:
		console.log("Nota inválida");
		break;
}
