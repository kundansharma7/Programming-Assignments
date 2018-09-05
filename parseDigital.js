function getDigit(pattern) {
    return {
        " _ | ||_|": 0,
        "     |  |": 1,
        " _  _||_ ": 2,
        " _  _| _|": 3,
        "   |_|  |": 4,
        " _ |_  _|": 5,
        " _ |_ |_|": 6,
        " _   |  |": 7,
        " _ |_||_|": 8,
        " _ |_|  |": 9,
        " _ |_| _|": 9, // alternative 9
    }[pattern];
}

let getNumber = function (lines) {
    // Chop each line into 9 pieces of 3 chars:
    lines = lines.map( line => line.match(/.../g) );
    //console.log(lines)
    if(lines[0]) {
        // Combine the pieces of each digit-pattern together:
        return +lines[0].map ( (piece, i) => {
            return piece + lines[1][i] + lines[2][i];
        })
            // Translate each pattern of 3x3=9 characters to a digit
            .map(getDigit)
            // Join digits together into one number
            .join('');
    }
}

module.exports = {
    getNumber: getNumber
}