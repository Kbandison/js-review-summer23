// ----------------------------
//   ---- Reduce ----
// ---------------------------
// reduces all values in an array to a single value
//
// https://www.w3schools.com/jsref/jsref_reduce.asp

// array maker
const arrMaker = (minNum = 0, maxNum = 20, iterator = 1) => {
  let newArr = new Array();
  for (let index = minNum; index <= maxNum; index += iterator) {
    newArr.push(index);
  }
  return newArr;
};
let myArr = arrMaker(1, 5, 1);

// manual version
// take in option initialValue for the accumulator and adds every element of the array to it
// outputs the accumulated value.

const reduceFunc = (array, initialValue = 0) => {
  let accumulator = initialValue;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    accumulator += element;
  }
  return accumulator;
};

console.log("!@-------reduceFunc-------@!");
console.log(reduceFunc(myArr)); // 15
console.log(reduceFunc(myArr, 10)); //25
// const reduceArrInitialValue = myArr.reduce(((accumulator, element, index, array) => accumulator += element ), initialValue)

const reduceArr = myArr.reduce(
  (accumulator, element) => (accumulator += element)
); // w/p an initialValue
const reduceArrInitialValue = myArr.reduce(
  (accumulator, element) => (accumulator += element),
  10
); // w/ intialValue
console.log("!@-------reduceArr-------@!");
console.log(reduceArr);
console.log(reduceArrInitialValue);

const reduceArrCurly = myArr.reduce((accumulator, element) => {
  let total = accumulator + 2;
  total = total / 2;
  return total;
});
console.log("!@-------reduceArrCurly-------@!");
console.log(reduceArrCurly);

const productArr = [
  {
    name: "candy",
    quantity: 2,
    price: 3,
  },
  {
    name: "soda",
    quantity: 3,
    price: 5,
  },
  {
    name: "popcorn",
    quantity: 1,
    price: 10,
  },
];

const reduceArrQuantity = productArr.reduce(
  (accumulator, element) => (accumulator += element.quantity),
  0
);
console.log("!@-------reduceArrQuantity-------@!");
console.log(reduceArrQuantity);

// using the reduce method find out the total price
// quantity * price

// with a return / curly brace
const reduceArrPriceReturn = productArr.reduce((accumulator, element) => {
  accumulator += element.quantity * element.price;
  return accumulator;
}, 0);

// single line version
const reduceArrPriceSingle = productArr.reduce(
  (accumulator, element) => (accumulator += element.quantity * element.price),
  0
);

console.log("!@-------reduceArrPrice-------@!");
console.log(reduceArrPriceReturn);
console.log(reduceArrPriceSingle);

console.log("!@-------reduceArrTotalPrice-------@!");
console.log(reduceArrTotalPrice);

console.log("!@-------reduceArrTotalPriceSingle-------@!");
console.log(reduceArrPriceSingle);
