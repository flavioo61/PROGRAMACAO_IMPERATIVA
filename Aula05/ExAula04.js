const nome = "João";
const sobrenome = "Silva";
const idade = 20;
const peso = 80.5;
const altura = 1.80;
const temPlano= true;
const imc = peso/(altura*altura)
const msg = nome + ' ' + sobrenome + ' tem ' + idade + ' anos e seu IMC é ' + imc.toFixed(2) + '.';
console.log(msg);

const msg2 = `${nome} ${sobrenome} tem ${idade} anos e seu IMC é ${imc.toFixed(2)}.`;	// Template String