export function fizzbuzz(){
// FizzBuzz del 1 al 100
// Se imprimen números del 1 al 100, de forma siguiente
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        // Si es divisible de 15 (por 3 Y por 5)
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        // Si es divisible 3
        console.log("Fizz");
    } else if (i % 5 === 0) {
        // Si es divisible  5
        console.log("Buzz");
    } else {
        // Si no es divisible 
        console.log(i);
    }
}
}
