function firstOne(numbers) {
  let newarray = [];
  for (let i = 0; i < numbers.length; i++) {
    let index = numbers[i];
    newarray.push(index);
  }
  return newarray;
}

let myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers);
console.log(firstOne(myNumbers));
