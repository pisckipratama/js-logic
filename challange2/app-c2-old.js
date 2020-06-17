// challange 2 rubicamp

function deretKaskus(n) {
    let numbers = 0;
    let kaskus = [];
    
    for (let i = 0; i < n; i++) {
        numbers += 3;
        if (numbers % 5 === 0 && numbers % 6 === 0) {
            kaskus.push('KASKUS');
        } else if (numbers % 5 === 0) {
            kaskus.push('KAS');
        } else if (numbers % 6 === 0) {
            kaskus.push('KUS');
        } else {
            kaskus.push(numbers);
        }
    }
    return kaskus;
}

console.log(deretKaskus(10));