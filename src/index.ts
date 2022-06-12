/*function Aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cantidadLolis: number = 8;
let lolis: number[] = new Array(cantidadLolis);
let indice: number;
let edades: number = 0;

for (indice = 0; indice < cantidadLolis; indice++) {
  lolis[indice] = Aleatorio(3, 7);
  edades += lolis[indice]
}

console.log(lolis);

console.log(edades / cantidadLolis)*/

/*let notaAlumnos: number [] = new Array(7, 6, 9, 5, 8, 7, 10, 4, 8, 8);
let meses: string [] = new Array("Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")
let indice: number;

for(indice= 0; indice < notaAlumnos.length; indice++){
  if(notaAlumnos[indice] < 6){
    console.log("Los meses en que desaprobo son:" meses[indice])
  }
}*/

/*let notaAlumnos: number [] = new Array(7, 6, 9, 5, 8, 7, 10, 4, 8, 8);
let meses: string [] = new Array("Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")
let indice: number;
function obtenerNotaMenor (notas: number[], meses: string[]): number{
for(indice= 0; indice < notaAlumnos.length; indice++){
  let notaMenor: number = 0;
  if(notaAlumnos[indice] < notaMenor){
    notaAlumnos[indice] = notaMenor
  }
  }
  return notaMenor
}
console.log(obtenerNotaMenor(notaAlumnos, meses))*/

function Aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let notas: number[] = new Array(3);
let indice: number;
let notaTotal: number = 0;

for (indice = 0; indice < 3; indice++) {
  notas[indice] = Aleatorio(1, 10);
  notaTotal += notas[indice];
}
console.log("El promedio es: " + notaTotal / 3);
