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

//loop to get access to each object in an array held by a temporary variable
let sportsOne: string[] = ['soccer', 'basketball', 'baseball', 'football'];

for (let tempSport of sportsOne) {
    console.log(tempSport);
}

//loop to get first letter of each object in an array held by a temporary variable

for (let tempSport of sportsOne) {
    console.log(tempSport.charAt(0));
}

// add more  elements to the array   

sportsOne.push("cricket");
sportsOne.push("golf", "tennis");

// add a conditional to the loop  

for (let tempSport of sportsOne) {
    if (tempSport == "football") {
        console.log("I love football!");
    } else {
    console.log(tempSport);
    }
}


