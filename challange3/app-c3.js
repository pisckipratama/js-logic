// challange 3 rubicamp

function romawi(n) {
    let result = '';
    const data = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    for (key in data) {
        // console.log(key);
        while (n >= data[key]) {
            n -= data[key];
            result += key
        }
    }

    // while (n != 0) {
    //     if (n >= 1000) {
    //         result += 'M';
    //         n -= 1000;
    //     } else if (n >= 900) {
    //         result += 'CM';
    //         n -= 900;
    //     } else if (n >= 500) {
    //         result += 'D';
    //         n -= 500;
    //     } else if (n >= 400) {
    //         result += 'CD';
    //         n -= 400;
    //     } else if (n >= 100) {
    //         result += 'C';
    //         n -= 100;
    //     } else if (n >= 90) {
    //         result += 'XC';
    //         n -= 90;
    //     } else if (n >= 50) {
    //         result += 'L';
    //         n -= 50;
    //     } else if (n >= 40) {
    //         result += 'XL';
    //         n -= 40;
    //     } else if (n >= 10) {
    //         result += 'X';
    //         n -= 10;
    //     } else if (n >= 9) {
    //         result += 'IX';
    //         n -= 9;
    //     } else if (n >= 5) {
    //         result += 'V';
    //         n -= 5;
    //     } else if (n >= 4) {
    //         result += 'IV';
    //         n -= 4;
    //     } else if (n >= 1) {
    //         result += 'I';
    //         n -= 1;
    //     }
    // }
    return result;
}

console.log('Testing for convert number to roman.\n');
console.log('input | expected | result');
console.log('------|----------|-------');
console.log('4     | IV       | ', romawi(4));
console.log('9     | IX       | ', romawi(9));
console.log('13    | XIII     | ', romawi(13));
console.log('39    | XXXIX    | ', romawi(39));
console.log('1453  | MCDLIII  | ', romawi(1453));
console.log('1646  | MDCXLVI  | ', romawi(1646));
console.log('1998  | MCMXCVIII| ', romawi(1998));
