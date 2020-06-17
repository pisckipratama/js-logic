const selfNumber = (num) => {
  let notSelfNumbers = [];
  let allNumbers = [];

  for (let i = 1; i <= num; i++) {
    let b = i;
    b = b.toString();
    allNumbers.push(i);
    let number = b.length;

    if (number === 1) {
      let sumNumber = i + parseInt(b[0]);
      notSelfNumbers.push(sumNumber);
    } else if (number === 2) {
      let sumNumber = i + parseInt(b[0]) + parseInt(b[1]);
      notSelfNumbers.push(sumNumber);
    } else if (number === 3) {
      let sumNumber = i + parseInt(b[0]) + parseInt(b[1]) + parseInt(b[2]);
      notSelfNumbers.push(sumNumber);
    } else {
      let sumNumber = i + parseInt(b[0]) + parseInt(b[1]) + parseInt(b[2]) + parseInt(b[3]);
      notSelfNumbers.push(sumNumber);
    }
  }

  let result = 0;
  const filtered = allNumbers.filter(f => !notSelfNumbers.includes(f));

  for (let j = 0; j < filtered.length; j++) {
    result += filtered[j];
  }
  
  return result;
}

console.log(selfNumber(100));