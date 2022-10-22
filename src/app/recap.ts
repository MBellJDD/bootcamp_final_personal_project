//DECLARAMOS UNA VARIEBLE Y CREAMOS UNA FUNCION
const username: string = 'marybell';

//CREAMOS UNA FUNCIÓN
const sum = (a:number, b:number)=> {
    return a + b;
}
sum (1,2);

//CREAMOS UNA CLASE CON ATIBUTOS
class person {

    constructor (private age:number, public lastName:string){
    }
}
//CREAMOS UNA INSTANCIA DE PERSONAS DE DOS MANERAS
const nico = new person(45, 'Díaz');