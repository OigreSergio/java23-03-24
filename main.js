function firstOne(numbers) {
  let newarray = [];
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element > 0) {
      newarray.push(element);
    } else if (element < 0) {
      newarray.push(0);
    } else if (element == 0) {
      newarray.push(0);
    }
  }
  return newarray;
}

let myNumbers = [-5, 0, -3, -2, 1, 2, 3, 4, 5];
console.log(myNumbers);
console.log(firstOne(myNumbers));
