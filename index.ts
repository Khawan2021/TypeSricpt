interface User{
    name: string;
    id: number;
}

const user: User = {
    name: 'Lara',
    id: 1,
}

/* Data Types */

const string: string = "string";
const number: number = 123;
const boolean: boolean = false;
const boolArray: boolean[] = [true, false];
const strArray: string[] = ["String 1", "String 2"];
const numArray: number[] = [1, 2, 3];

const anyType: any[] = [1, 'string', true];

//any = qualquer
//void = vazio absoluto

function greeter(receiver: string) : string{
    return "Hello, " + receiver;
}

function greeter2(receiver: number) : string{
    return "Hello, " + receiver;
}

function greeter3(receiver: number) : void{
    console.log(receiver);
}

//console.log(greeter('Pessoal'));
//console.log(greeter2(100));

/* Tipos Customiváveis*/
type AllowedTypes = string | string[];
// Union Types

const testVar: AllowedTypes = ["String de Teste, string2"];
console.log(testVar);

// Enum

enum NatureTypes{
    Human = 'human',
    Robot = 'robot',
    Animal = 'animal',
    // Enumerar uma lista de tipos
}

const natureEntity = {
    entityType: NatureTypes,
};

console.log(natureEntity)

// Interfaces
interface Entity{
    natureType: NatureTypes;
    name: string;
    code?: number;
    birthdate?: number;
    //Um bloco para construir objetos
}

const person: Entity = {
    natureType: NatureTypes.Human,
    name: 'Khawan',
    birthdate: 18032003,
};

const android: Entity = {
    natureType: NatureTypes.Robot,
    name: 'TSBot',
    code: 1234
}

const floki: Entity = {
    natureType: NatureTypes.Animal,
    name: 'Flokis',
    birthdate: 13062022,
}

console.log(person, android, floki);

/* Generics */

/*class Queue1{
    private data = [];

    push(item){
        this.data.push(item);
        }

    pop() {
         return this.data.shift(); 
        }
}

const queue1 = new Queue1();
queue1.push(0);
queue1.push('1');*/

//console.log(queue1.pop());



/*class Queue2<T> {
    private data = [];

    push(item: T){
         this.data.push(item);
        }

    pop(): T | undefined {
         return this.data.shift(); 
        }
}

const queue2 = new Queue2<number>();
queue2.push(0);
queue2.push(1);*/

//console.log(queue2);

//Soma
function soma(a: number, b: number){
    return a + b;
}

console.log(soma(1,2));

//Subtração
function sub(a: number, b: number){
    return a - b;
}

console.log(sub(6,2));

//multiplicação
function mul(a: number, b: number){
    return a * b;
}

console.log(mul(6,6));


//divisão
function div(a: number, b: number){
    return a / b;
}

console.log(div(81,9));

//divisão real
function rea(a: number, b: number){
    return a % b;
}

console.log(rea(2,1));

//Potencia
function pon(a: number, b: number){
    return a ** b;
}

console.log(pon(2,3));