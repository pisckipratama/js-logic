// challange 8 rubicamp

function pola(str) {
    let data = str.split(' ');
    let result = [];

    data.splice(1, 1); // remove '*'
    data.splice(2, 1); // remove '='
    
    // brute force here
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            if (parseInt(data[0].replace(/#/i,i)) * parseInt(data[1]) === parseInt(data[2].replace(/#/i, j))) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

console.log(pola("42#3 * 188 = 80#204"));
// result: [8, 5]

console.log(pola("8#61 * 895 = 78410#5"));
// result: [7, 9]

console.log(pola("1# * 12 = 1#4"));
// result: [2, 4]