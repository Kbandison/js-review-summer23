const arrMaker = (minNum = 0, maxNum = 20, iterator = 1) => {
  let newArr = new Array();
  for (let index = minNum; index <= maxNum; index += iterator) {
    newArr.push(index);
  }
  return newArr;
};
let myArr = arrMaker(1, 20, 1);

// if the number is divisible by 3 return Fizz, by 5 return Buzz, if both Fizz Buzz.
// and if neither return the original number
const fizzBuzzIfStatement = (arr) => {
  const returnArr = arr.map((element) => {
    // if number is divisible by 3 & 5
    if (element % 5 === 0 && element % 3 === 0) {
      return "FizzBuzz";
    }
    // if number is divisible by 5
    if (element % 5 === 0) {
      return "Buzz";
    }
    // if number is divisible by 3
    if (element % 3 === 0) {
      return "Fizz";
    }
    return element;
  });
  return returnArr;
};
// console.log("!@-------fizzBuzzIfStatement-------@!");
// console.log(fizzBuzzIfStatement(myArr));

const fizzBuzzSwitch = (arr) => {
  return arr.map((e) => {
    switch (true) {
      case e % 5 === 0 && e % 3 === 0:
        return "FizzBuzz";
      case e % 5 === 0:
        return "Buzz";
      case e % 3 === 0:
        return "Fizz";
      default:
        return e;
    }
  });
};
// console.log("!@-------fizzBuzzSwitch-------@!");
// console.log(fizzBuzzSwitch(myArr));

let fruitArr = [
  "Banana",
  "Orange",
  "Avacado",
  "Pear",
  "Apple",
  "Mango",
  "Kiwi",
];
//make a switch statement that returns four, five, six, for the number of letters in the word,
// or the original element if does not match these

const switchFruit = (arr) => {
  return arr.map((element) => {
    switch (element.length) {
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";

      default:
        return element;
    }
  });
};

console.log("!@-------switchFruit-------@!");
console.log(switchFruit(fruitArr));

//results:
//["Six", "Six", "Avacado","Four","Five", "Five", "Four"];
