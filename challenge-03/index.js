const fs = require('fs');
const path = require('path');
const file = JSON.parse(String(fs.readFileSync(path.join(__dirname, 'colors.json'))));

function zebra(array) {

    let maxLength = 0;
    let maxLengthColor = null;

    for (let i = 0; i < array.length - 1; i++) {

        let firstColor = array[i];
        let secondColor = array[i + 1];
        let counter = 1;
        let lastColor = secondColor;

        if (firstColor != secondColor) {
            ++counter;
            let nextTracker = firstColor;
            for (let j = i + 2; j < array.length; j++) {
                let nextColor = array[j];
                if (nextColor != nextTracker) {
                    break;
                }
                lastColor = nextColor;
                ++counter;
                nextTracker = nextTracker === firstColor ? secondColor : firstColor; 
            }
        }

        if (maxLength <= counter) {
            maxLength = counter;
            maxLengthColor = lastColor;
        }


    }

    return [maxLength, maxLengthColor]
}


console.log("submit", zebra(file).join("@"))