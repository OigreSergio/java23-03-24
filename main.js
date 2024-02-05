function firstOne(numbers) {
  let newarray = [];
  for (let i = 0; i < numbers.length; i++) {
    let index = numbers[i];
    if (index > 0) {
      newarray.push(index);
    } else if (index < 0) {
      newarray.push(0);
    }
  }
  return newarray;
}

let myNumbers = [-5, -4, -3, -2, 1, 2, 3, 4, 5];
console.log(myNumbers);
console.log(firstOne(myNumbers));
