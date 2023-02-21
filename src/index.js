const numbers = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
}


const Hundred = 'hundred';

module.exports = function toReadable (number) {

    const stringNumber = number + '';

    if (typeof number !== "number") {
        return 'Not a number'
    }

    if (numbers[stringNumber] !== undefined) {
        return numbers[stringNumber];
    }

    if (number % 100 === 0) {
        return `${numbers[stringNumber[0]]} ${Hundred}`;
    }

    let result = '';

    for (let i = 0; i < stringNumber.length; ++i) {
        const digits = stringNumber.length - i;

        if (digits === 3) {
            result += `${numbers[stringNumber[i]]} ${Hundred} `
        } else if (digits === 2) {
            const twoDigit = `${stringNumber[i]}${stringNumber[i+1]}`;

         if (typeof numbers[+twoDigit] !== "undefined") { 
                result += numbers[+twoDigit]
                break;
            } else {
                result += numbers[`${stringNumber[i]}0`];
            }
        } else if (digits === 1) {
            result += ` ${numbers[stringNumber[i]]}`
        }
    }

    return result;
}