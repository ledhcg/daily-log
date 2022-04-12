// Instructions
// If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:

// Each resistor has a resistance value.
// Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
// To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.

// The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number. For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.

// In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands. The program will take color names as input and output a two digit number, even if the input is more than two colors!

// The band colors are encoded as follows:

// Black: 0
// Brown: 1
// Red: 2
// Orange: 3
// Yellow: 4
// Green: 5
// Blue: 6
// Violet: 7
// Grey: 8
// White: 9
// From the example above: brown-green should return 15 brown-green-violet should return 15 too, ignoring the third color.
// https://exercism.org/tracks/typescript/exercises/resistor-color-duo

function decodedValue(colors: Array<string>) {
    let result: string = ''
    result += colorCheck(colors[0])
    result += colorCheck(colors[1])
    return Number(result)
}

function colorCheck(color: string): string {
    switch (color) {
        case 'black': {
            return '0'
        }
        case 'brown': {
            return '1'
        }
        case 'Red'.toLowerCase(): {
            return '2'
        }
        case 'Orange'.toLowerCase(): {
            return '3'
        }
        case 'Yellow'.toLowerCase(): {
            return '4'
        }
        case 'Green'.toLowerCase(): {
            return '5'
        }
        case 'Blue'.toLowerCase(): {
            return '6'
        }
        case 'Violet'.toLowerCase(): {
            return '7'
        }
        case 'Grey'.toLowerCase(): {
            return '8'
        }
        case 'White'.toLowerCase(): {
            return '9'
        }
    }
    return ''
}

console.log(decodedValue(['blue', 'grey']))
