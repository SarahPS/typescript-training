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
//loop to get access to each object in an array held by a temporary variable
var sportsOne = ['soccer', 'basketball', 'baseball', 'football'];
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
//loop to get first letter of each object in an array held by a temporary variable
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSport = sportsOne_2[_a];
    console.log(tempSport.charAt(0));
}
// add more  elements to the array   
sportsOne.push("cricket");
sportsOne.push("golf", "tennis");
// add a conditional to the loop  
for (var _b = 0, sportsOne_3 = sportsOne; _b < sportsOne_3.length; _b++) {
    var tempSport = sportsOne_3[_b];
    if (tempSport == "football") {
        console.log("I love football!");
    }
    else {
        console.log(tempSport);
    }
}
