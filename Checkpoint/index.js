
const readlineSync = require("readline-sync");

let tempo1 = 10;
let tempo2 = 8;
let tempo3 = 15;
let tempo4 = 12;
let tempo5 = 8;

console.log(`
  1 - Pipoca
  2 - Macarrão
  3 - Carne
  4 - Feijão
  5 - Brigadeiro
`);

let option = readlineSync.question("Escolha a sua opcao: ");

if 
(option == 1) {
  console.log(`Você escolheu a opção Pipoca. Tempo de preparo: ${tempo1} segundos.`);
} 
else if 
(option == 2) { 
    console.log(`Você escolheu a opção Macarrao. Tempo de preparo: ${tempo2} segundos.`);
} 
else if 
(option == 3) {
    console.log(`Você escolheu a opção Carne. Tempo de preparo: ${tempo3} segundos.`);
} 
else if 
(option == 4) {
    console.log(`Você escolheu a opção Feijão. Tempo de preparo: ${tempo4} segundos.`);
} 
else if 
(option == 5) {
    console.log(`Você escolheu a opção Brigadeiro. Tempo de preparo: ${tempo5} segundos.`);
}
 else {
    console.log("Opcao invalida");} 


let clock = readlineSync.question("Escolha o seu tempo de preparo: " ) ;

if (
  (option == 1 && clock >= tempo1 && clock <= tempo1 * 2) ||
  (option == 2 && clock >= tempo2 && clock <= tempo2 * 2) ||
  (option == 3 && clock >= tempo3 && clock <= tempo3 * 2) ||
  (option == 4 && clock >= tempo4 && clock <= tempo4 * 2) ||
  (option == 5 && clock >= tempo5 && clock <= tempo5 * 2)
) { console.log('Prato pronto, tenha um bom apetite!!!');
 
} 
else if (
  (option == 1 && clock < tempo1) ||
  (option == 2 && clock < tempo2) ||
  (option == 3 && clock < tempo3) ||
  (option == 4 && clock < tempo4) ||
  (option == 5 && clock < tempo5)
) 

{
  console.log("Tempo insuficiente para preparo do prato");
}
 else  if (
    (option == 1 && clock > tempo1 * 2 && clock < tempo1 * 3) ||
    (option == 2 && clock > tempo2 * 2 && clock < tempo2 * 3) ||
    (option == 3 && clock > tempo3 * 2 && clock < tempo3 * 3) ||
    (option == 4 && clock > tempo4 * 2 && clock < tempo4 * 3) ||
    (option == 5 && clock > tempo5 * 2 && clock < tempo5 * 3)
) 
{
  console.log("O prato escolhido queimou");
} 
else  if (
    (option == 1 && clock >= tempo1 * 3) ||
    (option == 2 && clock >= tempo2 * 3) ||
    (option == 3 && clock >= tempo3 * 3) ||
    (option == 4 && clock >= tempo4 * 3) ||
    (option == 5 && clock >= tempo5 * 3)
) 
{
  console.log("KABUMM");
} 
else {
  console.log("Prato inexistente");
};

//CHECKPOINT 1 - PROGRAMAÇÃO IMPERATIVA OBJETIVO ERA FAZER UM MENU DE MICRO-ONDAS EM JAVASCRIPT.