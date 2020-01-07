// challange 5 rubicamp

function stringManipulation(word) {
    let vocalAlpha = 'a i u e o'; // declare vocal alphabets
    let startWord = word.charAt(0); // get start char of paramater

    if (vocalAlpha.includes(startWord) === true) {
        return word;
    } else {
        return word.slice(1, word.length) + startWord + 'nyo';
    }
}

console.log(stringManipulation('itik'));
console.log(stringManipulation('zebra'));

// **** testing ****

// let z = 'aiueo';
// let a = 'entog';
// let b = a.charAt(0);
// console.log(b);

// for (let i = 0; i< a.length; i++) {
//     let check = b === z.charAt(i);
//     console.log(check);
// }

// let vokal = 'a i u e o';
// let word = 'ular';
// let satu = word.charAt(0);

// let hasil = vokal.includes(satu);
// console.log(hasil);