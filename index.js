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

//console.log(convertFahrToCelsius(80));

/**
 * Write a function named "checkYuGiOh" that takes a number, n, 
 * as an argument, creates an array of numbers from 1 to n
 * and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", 
 * then returns the resulting array.
 * for strings that have multiple factors, use a hyphen as a separator 
 * e.g 10 === "yu-oh", 30 === "yu-gi-oh"
 *
 */

function checkYuGiOh(n) {
    let i = 1, yuGiOhArray = [];
    let errorMessage = `invalid parameter: ${JSON.stringify(n)}`

    let result = `${n}` ? parseInt(n) : errorMessage;

    if (isNaN(result)) {
         return errorMessage;
    }

    while (i <= result) {

            if( i % 2 === 0 && i % 3 === 0 && i % 5 === 0 ) {
                yuGiOhArray.push('yu-gi-oh');
            }
            else if ( i % 2 === 0 && i % 3 === 0 ) {
                yuGiOhArray.push('yu-gi');
            }
            else if ( i % 2 === 0 && i % 5 === 0 ) {
                yuGiOhArray.push('yu-oh');
            }
            else if ( i % 3 === 0 && i % 5 === 0 ) {
                yuGiOhArray.push('gi-oh');
            }
            else if (i % 2 === 0) {
                yuGiOhArray.push('yu');
            }
            else if (i % 3 === 0) {
                yuGiOhArray.push('gi');
            }
            else if (i % 5 === 0) {
                yuGiOhArray.push('oh');
            }
            else {
                yuGiOhArray.push(i);
            }
             
            i += 1;
        }
        
    return yuGiOhArray;
}

console.log(checkYuGiOh([]))

