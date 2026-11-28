// we will understand async and awaits in js , promises chain also quite difficult to understand , not too difficult
// as compared to callback hell

// FOR USING ASYNC AND AWAIT : if a function returns promises the we use async await to execute asychronouse js in order
// async keyword use before the name of a function ,, but make sure a function returns a promises, 
// so now if calling the the fn who returns a promiese , we use awai 
// see here 

const getData = (interInput) =>{
    return new Promise((resolve , reject) =>{
       setTimeout(() => {
         console.log(`YOUR INPUTE IS : ${interInput}`);
        resolve("success");
       }, 2000);
    })
}
// for making a promise chain , use async awai , , make a big function with named async before that function name
// and for calling your promises use await
async function getAllUserInput() {
    console.log("waiting for user 1")
    await getData(1);
        console.log("waiting for user 2")
    await getData(2);
        console.log("waiting for user 3")
    await getData(3);
        console.log("waiting for user 4")
    await getData(4);
        console.log("waiting for user 5")
    await getData(5);
        console.log("waiting for user 6")
    await getData(6);
        console.log("waiting for user 7")
    await getData(7);
        console.log("waiting for user 8")

    await getData(8);
}
// call the async function 
getAllUserInput();