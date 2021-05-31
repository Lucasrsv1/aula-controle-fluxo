var input = prompt("Digite um número");
var numero = +input;

switch (numero % 2) {
	case 1:
		console.log(`${numero} é ímpar.`);
		break;
	case 0:
		console.log(`${numero} é par.`);
		break;
	default:
		console.log(`"${input}" não é um número válido.`);
		break;
}
