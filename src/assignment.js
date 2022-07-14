// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
// function sumOfNumbers(arrayOfNumbers) {
//     return arrayOfNumbers.length;
// }
assignment.sumOfNumbers = sumOfNumbers;

const Numbers = [68,-68, 27, 94,72,-25,-51,32,10,64,-94,4,34,-86,90,81,20,-56,-91,-50];
function sumOfNumbers(NumberArray){
    let sum = 0
    for (value of NumberArray){
        sum = sum + value
    }
    return sum
}

console.log(sumOfNumbers(Numbers))
/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
// function countEvenNumbers(arrayOfNumbers) {
//     return arrayOfNumbers.length;
// }
assignment.countEvenNumbers = countEvenNumbers;

const Numbers2 =[17,0,67,41,49,21,1,86,76,2,54,14,93,84,14,77,35,7,29,6];

function countEvenNumbers(arrayOfNumbers) {
    const evenNumbers =[]
    for (i of arrayOfNumbers ){
        if(i%2 == 0){
            evenNumbers.push(i)
        }
    }
    return evenNumbers.length
}
console.log(countEvenNumbers(Numbers2))
/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
// function celsiusToFahrenheit(arrayOfNumbers) {
//     return arrayOfNumbers;
// }
assignment.celsiusToFahrenheit = celsiusToFahrenheit;
const Numbers3 = [
    24,
    30,
    14,
    -8,
    22,
    17,
    -5,
    25,
    2,
    25,
    10,
    10,
    28,
    33,
    39,
    28,
    23,
    -1,
    2,
    -4
]
const converted = [
    75,
    86,
    57,
    17,
    71,
    62,
    23,
    77,
    35,
    77,
    50,
    50,
    82,
    91,
    102,
    82,
    73,
    30,
    35,
    24
];

function celsiusToFahrenheit(arrayOfNumbers) {
    let ConvertedToFahrenheit=[]
    for(i of arrayOfNumbers){
    ConvertedToFahrenheit.push(Math.trunc((i*9/5)+32));
    }
    return ConvertedToFahrenheit
}
console.log(celsiusToFahrenheit(Numbers3))
console.log(converted)

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

