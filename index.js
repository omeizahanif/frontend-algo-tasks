/**
Write a function named "convertFahrToCelsius" 
that takes a single parameter and converts it to celsius.
 */

function convertFahrToCelsius(value) {

    let errorMessage = `${JSON.stringify(value)} is not a valid number but a/an ${typeof value}.`;
    let result = `${value}` ? parseInt(value) : errorMessage;

    if (isNaN(result)) {
         return errorMessage;
    }

    return ((result - 32) * 5/9).toFixed(4);
    
}

console.log(convertFahrToCelsius(80));
/**
 * Write a function named "checkYuGiOh" that takes a number, n, 
 * as an argument, creates an array of numbers from 1 to n
 * for strings that have multiple factors, use a hyphen as a separator 
 * e.g 10 === "yu-oh", 30 === "yu-gi-oh"
 *
 */

function checkYuGiOh(n) {
  console.log('a')  
}

//console.log(checkYuGiOh(5))

