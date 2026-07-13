// loop to iterate through numbers in an array

let numbers: number[] = [7, 42, 6, 0, 1000];

for(let i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// loop to interate through strings in an array 

let animals: string[] = ['cat', 'dog', 'bird', 'fish'];

for(let i=0; i < animals.length; i++) {
    console.log(animals[i]);
}


// loop to average numbers in an array
let sum: number = 0;
for(let i=0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average: number = sum / numbers.length;
console.log(average);