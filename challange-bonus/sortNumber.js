function divideAndSort(number) {
  if (!(typeof number == 'number')) {
    console.log('type data harus integer');
  } else {
    let convertToString = number.toString();
    let result = [];

    let splitString = convertToString.split('0');
    let destruct;

    for (let i = 0; i < splitString.length; i++) {
      destruct = splitString[i].split('');
      destruct.sort();
      result.push(destruct.join(''));
    };

    console.log(parseInt(result.join('')));
  };
};

divideAndSort(5956560159466056); // 55566914566956
// divideAndSort('bakal eror');