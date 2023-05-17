// ----------------------------
//   ---- Callbacks ----
// ---------------------------
// a function that is passed as an argument to another function.
// https://www.w3schools.com/js/js_callback.asp

let iterator = 0;

function add(param0, param1 = 1) {
  let total = param0 + param1;
  return total;
}
const subtract = (param0, param1) => {
  let total = param0 - param1;
  return total;
};

const multiply = (param0, param1 = 2) => {
  return param0 * param1;
};

// console.log('!@-------add-------@!')
// console.log(add(2,2))
// console.log(add(iterator))
// iterator = add(iterator)
// console.log(iterator)
// iterator = add(iterator)
// console.log(iterator)

// console.log('!@-------subtract-------@!')
// console.log(subtract(4,2))

// console.log('!@-------multiply-------@!')
// console.log(multiply(2,3))

// console.log('!@-------multiply-------@!')
// console.log(multiply(2))

// const calculate = (param0, param1, callBackFunc) => {
//     let output = callBackFunc(param0,param1)
//     console.log('!@-------output-------@!')
//     console.log(output)
// }

// calculate(2,3,multiply)

// recreate the map method using callbacks.  The only array method used should be .push()
let myArr = [1, 2, 3, 4, 5];
const myMapper = (arr, func) => {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(func(element));
  }
  return newArr;
};

const myNewArr = myMapper(myArr, (element) => element + 1);

console.log("!@-------myMapper-------@!");
console.log(myNewArr); // [2,3,4,5,6]

//bonus
// can you modify your function so that the following works
const myBonusArr = myMapper(myArr, add, 1);
console.log(myBonusArr); // [2,3,4,5,6]
