function cetak_gambar(num) {
  if (!(typeof num == 'number')) {
    console.log('input harus berupa integer!');
  } else if (num % 2 == 0 || num == 1) {
    console.log('input harus bilangan ganjil dan lebih dari 1!');
  } else {
    let allStar = '';
    let patternResult = '';
    let finalResult = '';

    // produce pattern result and all star
    for (let i = 1; i <= num; i++) {
      if (i == 1) {
        patternResult += " * "
      } else if (i == num) {
        patternResult += " * ";
      } else {
        patternResult += " = ";
      };
      allStar += ' * ';
    };

    // produce final result
    for (let j = 1; j <= num; j++) {
      if (Math.ceil(num / 2) == j) {
        finalResult += allStar + '\n';
      } else {
        finalResult += patternResult + '\n';
      }
    }
    console.log('--- panjang ---');
    console.log(finalResult);
  }
}

cetak_gambar(7);