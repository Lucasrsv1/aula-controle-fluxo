console.log("Booleanos:", true, false);
console.log();

console.log("Comparadores de valor:");
console.log("3 == 5:", 3 == 5);
console.log("'teste' == 'teste':", 'teste' == 'teste');
console.log("3 != 5:", 3 != 5);
console.log("'teste' != 'teste':", 'teste' != 'teste');
console.log("3 > 5:", 3 > 5);
console.log("3 < 5:", 3 < 5);
console.log("3 >= 5:", 3 >= 5);
console.log("3 <= 5:", 3 <= 5);
console.log();

console.log("Comparadores de valor e tipo:");
console.log("3 === '3':", 3 === '3');
console.log("3 !== '3':", 3 !== '3');
console.log();

console.log("Observe a diferença entre os tipos:");
console.log("O tipo de 3 é", typeof 3);
console.log("O tipo de '3' é", typeof '3');
console.log();

console.log("Valores considerados falsos:");
console.log("false:", Boolean(false));
console.log("0:", Boolean(0));
console.log("'':", Boolean(''));
console.log("null:", Boolean(null));
console.log("undefined:", Boolean(undefined));
console.log("NaN (Not a Number - Não é um Número):", Boolean(NaN));
console.log();

console.log("Qualquer outro valor é considerado verdadeiro:");
console.log("true:", Boolean(true));
console.log("1:", Boolean(1));
console.log("'Texto':", Boolean('Texto'));
console.log("{}:", Boolean({}));
console.log("[]:", Boolean([]));
console.log("-50:", Boolean(-50));
