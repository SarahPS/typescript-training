// loop to iterate through numbers in an array
var numbers = [7, 42, 6, 0, 1000];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// loop to interate through strings in an array 
var animals = ['cat', 'dog', 'bird', 'fish'];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// loop to average numbers in an array
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
var average = sum / numbers.length;
console.log(average);
