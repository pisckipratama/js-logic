// challange 6 rubicamp
function stringManipulation(word) {
    let vocalAlpha = 'a i u e o'; // declare vocal alphabets
    let startWord = word.charAt(0); // get start char of paramater

    if (vocalAlpha.includes(startWord) === true) {
        return word;
    } else {
        return word.slice(1, word.length) + startWord + 'nyo';
    }
}

function sentencesManipulation(sentence) {
    let result = '';
    let splitSentence = sentence.split(' ');

    for (let i = 0; i < splitSentence.length; i++) {
        result += stringManipulation(splitSentence[i]) + ' ';
    }
    return result;
}

console.log(sentencesManipulation('ibu pergi ke pasar bersama aku'));

// *** Testing ***

// let sentence1 = 'ibu pergi ke pasar bersama aku';
// let splitSentence1 = sentence1.split(" ");
// console.log(splitSentence1);