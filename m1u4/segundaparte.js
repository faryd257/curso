const numbers = [20, 9, 14, 46, 25, 38, 24];
let max = numbers[0]; 

for(let i = 1; i < numbers.length; i++) {
  if(numbers[i] > max) {
    max = numbers[i]
  }
}

console.log("El número mayor es: " + max);