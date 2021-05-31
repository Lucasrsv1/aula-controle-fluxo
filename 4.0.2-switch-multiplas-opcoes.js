var digito = +prompt("Digite um dígito");

switch (digito) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 9:
		console.log(`${digito} é ímpar.`);
		break;
	case 0:
	case 2:
	case 4:
	case 6:
	case 8:
		console.log(`${digito} é par.`);
		break;
	default:
		console.log(`"${digito}" não é um dígito válido.`);
		break;
}
