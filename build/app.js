function decodedValue(colors) {
    let result = '';
    result += colorCheck(colors[0]);
    result += colorCheck(colors[1]);
    return Number(result);
}
function colorCheck(color) {
    switch (color) {
        case 'black': {
            return '0';
        }
        case 'brown': {
            return '1';
        }
        case 'Red'.toLowerCase(): {
            return '2';
        }
        case 'Orange'.toLowerCase(): {
            return '3';
        }
        case 'Yellow'.toLowerCase(): {
            return '4';
        }
        case 'Green'.toLowerCase(): {
            return '5';
        }
        case 'Blue'.toLowerCase(): {
            return '6';
        }
        case 'Violet'.toLowerCase(): {
            return '7';
        }
        case 'Grey'.toLowerCase(): {
            return '8';
        }
        case 'White'.toLowerCase(): {
            return '9';
        }
    }
    return '';
}
console.log(decodedValue(['blue', 'grey']));
//# sourceMappingURL=app.js.map