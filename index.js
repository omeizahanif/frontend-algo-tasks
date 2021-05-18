/**
Write a function named "convertFahrToCelsius" 
that takes a single parameter and converts it to celsius.
 */

function convertFahrToCelsius(value) {
    let number = Number(value)
    if (isNaN(number)) {
        return `${value} is not a valid number but a/an ${typeof value}.`
    }

    return parseInt((number - 32) / 1.8)
}

console.log(convertFahrToCelsius(32))
