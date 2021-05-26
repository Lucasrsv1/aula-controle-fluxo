// E (&&)
console.log("Tabela Verdade do E (&&):");
console.log("| P     | V     | P && V |");
console.log(`| false | false | ${false && false}  |`);
console.log(`| false | true  | ${false && true}  |`);
console.log(`| true  | false | ${true && false}  |`);
console.log(`| true  | true  | ${true && true}   |`);
console.log();

// OU (||)
console.log("Tabela Verdade do OU (||):");
console.log("| P     | V     | P || V |");
console.log(`| false | false | ${false || false}  |`);
console.log(`| false | true  | ${false || true}   |`);
console.log(`| true  | false | ${true || false}   |`);
console.log(`| true  | true  | ${true || true}   |`);
console.log();

// Negação (!)
console.log("Tabela Verdade da Negação (!):");
console.log("| P     | !P    |");
console.log(`| false | ${!false}  |`);
console.log(`| false | ${!false}  |`);
console.log(`| true  | ${!true} |`);
console.log(`| true  | ${!true} |`);
