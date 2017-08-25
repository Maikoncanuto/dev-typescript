//Variaveis 
var numero = 10;
var texto = "Aqui é um texto";
var texto1 = 'Arqui é outro texto';
var bool = true;
var template = "" + texto;
//Funções
function func1() {
    return 1;
}
function func1P(param) {
    return param;
}
function func2() {
    return "Retorno";
}
function func2P(param) {
    return param;
}
function func3() {
    return 'outro retorno';
}
function func3P(param) {
    return param;
}
function func4() {
    return false;
}
function func4P(param) {
    return param;
}
function func5() {
    return;
}
function func5P(param) {
    return;
}
function func6() {
    return;
}
//Condicionais 
if (func1P(10) === numero) {
    console.log('CONDICIONAL 1: ', func1P(10) === numero);
}
if (func1P(5) === numero) {
    console.log('CONDICIONAL 2: ', func1P(5) === numero);
}
if (func3P(template) === texto) {
    console.log('CONDICIONAL 2: ', func3P(template) === texto);
}
