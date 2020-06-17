// challange 7 rubicamp

function weirdMultiply(sentence) {
    let changeToString = sentence.toString()
    let data = changeToString.split('');

    if (data.length === 1) {
        // return 'Angka harus lebih dari 2 digit';
        return sentence;
    }
    let result = data.reduce((accumulator, currentValue) => accumulator * currentValue);
    return weirdMultiply(result);
}

console.log(weirdMultiply(39)); // output 4
console.log(weirdMultiply(999)); // output 2
console.log(weirdMultiply(3)); // output 3