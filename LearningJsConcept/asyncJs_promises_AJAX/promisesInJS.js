// for solving the issue in callback hell we do use promises in js
// syntax : let promise = new Promise(resolve , reject)=>{....}
// definition : promises in javascript  , it is an object , that represent an eventual completion(or faliure) of 
// asynchronous operation and it's resulting value;
/*
whenever we have to take data from an api or other servers , it takes time , so in this case these servers or apis 
gives us a promise and tells that , wait few seconds i will provide you data --> but see here , they are promising to
provide data , but these promises can be fullfilled or rejected , the resul will be shown after the waitings end

// there are three states of promises
1. pending : this is initial states , where asynchronous task is still running and hasn't finished yet
2. fullfilled(or resolved) : whene the data is received successfully then promises holds the resulting value;
3. rejected : when data got failed or operation becomes failure , then promises holds errors or reason for the failure 
*/

/*
let's create a promise from a shop , where you ordered a pizza, they tells our shop is opened ,
 and we are making food that you ordered
*/

// let pizzaOrder = new Promise((resolve,reject) =>{
//      let shopOpen = true;
//      setTimeout(()=>{
//       if(shopOpen){
//         console.log("pizze is ordered")
//      resolve("our services is fast")
//     }else{
//         reject(console.log("pizza ordere is cancelled due to network error"))
//     }
//      }, 2000) // the order makes a promise tells wait 2 second we are making pizza to deliver
// });
// // to handle all promises is given by the pizzaOrder function , we handle by using 
// // promises.then((resolve) =>{})--- it runs when our promises get fulfilled
// // promises.catch((reject)=>{})---> it runs when our promises get rejected

// pizzaOrder
// .then((result)=>{
//  console.log("your pizza is ordered , eat bro" ,result) // result paramter will print  whatever is written in the resolve() , 
//  // in the promises
// })
// .catch((error) =>{
//  console.log("few stock is out .. wait few hours " , error) // here error parameter is created to show what was the reject messages
//  // showed in the promises
// })

// REMEMBER : BY THE WAY WE DON'T CREATES PROMISES , IT IS CREATED BY APIs , servers  , we use their promises to show the user
// what we want to show them


// another exercise : understand promise chain
// suppose a function return a promise to give a date 
const giveData = (dataInput)=>{
    return new Promise((resolve , reject) =>{  
        setTimeout(() => {
            console.log(`given data : ${dataInput}`);
            resolve("successfull")
        }, 3000);
    })
}
// so giveData is function that , you put the value and it give data manually arround 2 second
// there is suppose 6 users who wants to get their data and you want print their data orderwise, now use promise chain
console.log("fetching data of user 1")
giveData(1)
.then((res) =>{
    console.log("fetching data of user 2")
 return giveData(2);
})
.then((res) =>{
    console.log("fetching data of user 3")
    return giveData(3);
})
.then((res)=>{
     console.log("fetching data of user 4")
   return giveData(4);
})
.then((res)=>{
    console.log("fetching data or user 5");
    return giveData(5);
})

// remeber like callback was also difficult to understand similary pormise chain also difficult to udnerstand , so most 
// usefull to handle asynchronous , use async await ,, go and study 
