let first, second, third;
[first, second, third] = ["Who", "What", "I don't know"];

console.log("!@-------first, second, third-------@!");
console.log(first, second, third);

const arrMaker = (minNum = 0, maxNum = 20, iterator = 1) => {
  let newArr = new Array();
  for (let index = minNum; index <= maxNum; index += iterator) {
    newArr.push(index);
  }
  return newArr;
};
let myArr = arrMaker(1, 5, 1);

let alpha, beta, charlie, delta, foxtrot;
[alpha, beta, charlie, delta, foxtrot] = myArr;
console.log(alpha, beta, charlie, delta, foxtrot);

[alpha, beta, charlie, delta, foxtrot] = myArr.map((element) => {
  return {
    number: "Integer",
    value: element,
  };
});

console.log(foxtrot);
// alpha = alpha.value
console.log(alpha.value, beta.value, charlie.value, delta.value, foxtrot.value);
let newObjArray = [alpha, beta, charlie, delta, foxtrot];
console.log(newObjArray);
let newObj = {
  name: "alpha",
  ...alpha, // number: 'Integer', value: 1
};
console.log("!@-------newObj-------@!");
console.log(newObj);

const nameArrayFunc = () => {
  let nameArray = ["alpha", "beta", "charlie", "delta", "foxtrot"];
  return ([alpha, beta, charlie, delta, foxtrot] = newObjArray.map(
    (element, index) => {
      return {
        name: nameArray[index],
        ...element,
      };
    }
  ));
};
console.log("!@-------Name Arry-------@!");
console.log(nameArrayFunc());

//------------API example-------------

let username = {
  userID: 1,
  firstname: "Violet",
  lastname: "Dwyer",
};

let post = {
  userID: 1,
  postID: 1,
  title: "I'm baby hexagon XOXO",
  post: "90's irony cloud bread keffiyeh four dollar toast marfa vinyl vaporware distillery pok pok forage. Gentrify yuccie fanny pack, vinyl dreamcatcher proident meditation whatever deserunt solarpunk. Actually tempor brunch, subway tile praxis normcore hot chicken irure tbh art party post-ironic officia vice raw denim. Sustainable direct trade bodega boys helvetica, vape occaecat shoreditch edison bulb adaptogen marfa schlitz banh mi. Tempor next level chicharrones ut sriracha. Sed marxism semiotics, salvia art party chillwave 90's eiusmod sus venmo hexagon.",
};

const combineAPI = (username, post) => {
  return {
    ...post,
    ...username,
  };
};

console.log("!@-------combineAPI-------@!");
console.log(combineAPI(username, post)); //notice userID stays the same, you can only one of a key name

const makePost = (username, post) => {
  return {
    title: post.title,
    author: username.firstname,
    post: post.post,
  };
};
console.log("!@-------makePost-------@!");
console.log(makePost(username, post));

//  ---------------- Object.keys && Object.values ------------------
