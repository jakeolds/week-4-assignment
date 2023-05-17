let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// Created ages array
let difference = ages[ages.length - 1] - ages[0];
// subtracted fist element from last
console.log(difference);
// output 90

ages.push(100); 
// added the number 100 to the ages array
difference = ages[ages.length - 1] - ages[0]; 
// subtracted first element from new last
console.log(difference);
// output 97

let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
  }
  // Loop through the array and sums all elements
let average = sum / ages.length;
// calculates average
console.log(average);
// output ~ 36.7



let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameSum = 0
    for (let i = 0;  i < names.length; i++) {
        nameSum += names[i].length
        // Sums the amount of letters
    }
let nameAverage = nameSum / names.length;
// Calculates average
console.log(nameAverage);
// output ~ 3.83

let concatenatedString = "";
// created empty string
for (let i = 0; i < names.length; i++) {
  concatenatedString += names[i] + " ";
} 
// loop iterates each element in 'names' and concatenate it with a space
console.log(concatenatedString);

let nameLengths = names.map(name => name.length);
// creates a new array with each name changed to its letter amount
console.log(nameLengths)

let namesSum = 0
for (let i = 0; i < nameLengths.length; i++) {
    namesSum += nameLengths[i]
} // sums all of the array nameLengths
console.log(namesSum)

const newFunction = (word, n) => word.repeat(n)
// takes word and concats it n # of times
console.log(newFunction("hello", 5))

const fullName = (first, last) => first + " " + last
// takes 2 inputs and creates fullname with space
console.log(fullName("Jake", "Olds"))

const sumGreaterThan100 = (numbers) => {
    let sum = 0;
    for (let i = 0; i<numbers.length; i++) {
        sum += numbers[i];
        if (sum > 100) {
            return true
        }
    }
    return false
}
// This function takes an array and returns true if the sum of the numbers > 100

const averageOfNumbers = (numbers) => {
    let sum = 0;
    for (let i = 0; i <numbers.length; i++) {
        sum += numbers[i]
    } 
    return sum / numbers.length
} // takes an array of numbers and returns the average
let numbers = [10 , 20, 30]
console.log(averageOfNumbers(numbers))

const compareAverageOfArrays = (n1, n2) => {
    let sum1 = 0;
    for (let i = 0; i < n1.length; i++) {
        sum1 += n1[i];
    }
    let average1 = sum1 / n1.length;
    let sum2 = 0;
    for (let i = 0; i < n2.length; i++) {
      sum2 += n2[i];
    }
    let average2 = sum2 / n2.length;
    if (average1 > average2) {
    return true;
    }
    return false
}
// takes 2 arrays and compares their avg.
let array1 = [8,9,10]
let array2 = [20,30,40]
console.log(compareAverageOfArrays(array1, array2))
// output false

const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside === true && moneyInPocket > 10.50) {
    return true;
    }
 return false;
} // takes 2 parameters, if it is hot and money is over 10.50 returns true
let isHot = true
let money = 15
console.log(willBuyDrink(isHot, money))
// output true

const willPlayVideoGames = (amWorking, houseClean, wifeHome, time) => {
    if (amWorking === false && houseClean === true && wifeHome === false && time > 16 && time < 23) {
        console.log("Can Play Games!")
    } else {
    console.log("Maybe Some Other Time")
    }
}

let working = true;
let clean = true;
let wifeAtHome = false;
let currentTime = 20;

willPlayVideoGames(working, clean, wifeAtHome, currentTime)
