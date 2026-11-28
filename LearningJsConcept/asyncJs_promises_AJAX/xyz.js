"use strict"
let userData;

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => {

    userData =json;
    console.log(userData)
  }
)

console.log(userData)
console.log("+++++++++=======================================");
console.log(`user data is : ${userData}`);