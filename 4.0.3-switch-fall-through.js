console.log("Calculadora de área e volume.");
console.log();

console.log("Escolha uma das formas abaixo:");
console.log("1 - Quadrado (Área)");
console.log("2 - Cubo (Volume e Área de Cada face)");
var forma = +prompt("Escolha");

if (forma !== 1 && forma !== 2) {
	console.log("Forma inválida!");
	process.exit(1);
}

console.log();
var lado = +prompt(`Digite o valor do lado do ${forma == 1 ? "quadrado" : "cubo"}`);

switch (forma) {
	case 2:
		console.log(`Volume: ${Math.pow(lado, 3)}.`);
	case 1:
		console.log(`Área: ${Math.pow(lado, 2)}.`);
		break;
}
