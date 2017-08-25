//Variaveis 
let numero: number = 10;
let texto: string = "Aqui é um texto";
let texto1: string = 'Arqui é outro texto';
let bool: boolean = true;
let template: string =  `${texto}`;
let naoSeiTipo: any = "10";   

//Arrays/list/enum
let arry: number[] = [1, 2, 3];
let genericArray: Array<number> = [2, 2,];
let tupla:  [string, number] = ["TS", 1];

enum Dia{SEGUNDA, TERCA = 2};
let dia: Dia = Dia.SEGUNDA;
console.log("ENUM: ", dia);

//cast
let stringTamanho = (<string>naoSeiTipo).length;
console.log("CAST 1: ", stringTamanho);
let outraString = (naoSeiTipo as string).length;
console.log("CAST 2: ", outraString);

//Funções

//Funcao com parametro opcional 
function func0(param1: number, param2?: number): number{
    if(param2 !== undefined){
        return param1 + param2;
    }
    
    return param1;
}

function func1(): number{
    return 1;
}

function func1P(param: number): number{
    return param;
}

function func2(): string{
    return "Retorno";
}

function func2P(param: string): string{
    return param;
}

function func3(): string{
    return 'outro retorno';
}

function func3P(param: string): string{
    return param;
}

function func4(): boolean{
    return false;
}

function func4P(param: boolean): boolean{
    return param;
}

function func5(): void{
    return;
}

function func5P(param: void): void{
    return;
}

function func6(){
    return;
}

//Condicionais 
if(func1P(10) === numero){
    console.log('CONDICIONAL 1: ', func1P(10) === numero);
}

if(func1P(5) === numero){
    console.log('CONDICIONAL 2: ', func1P(5) === numero);
}

if(func3P(template) === texto){
    console.log('CONDICIONAL 2: ', func3P(template) === texto);
}