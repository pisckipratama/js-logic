// challange 8 rubicamp

function pola(str) {
  let split1 = str.split('=');
  let angka3 = split1[1].trim();

  let split2 = split1[0].split('*');
  let angka1 = split2[0].trim();

  let angka2 = split2[1].trim();


  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      if (angka1.replace('#', i) * angka2 == angka3.replace('#', j)) {
        return [i, j];
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