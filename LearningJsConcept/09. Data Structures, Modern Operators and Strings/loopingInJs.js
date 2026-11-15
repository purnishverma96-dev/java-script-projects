// using different types of loopings
const food ={
    starterMenu : ["chai" ,"biscuit" , "rusk", "bread","cake" ],
    mainMenu : ["rice", "paneer", "chhola", "egg", "meat"],
    openingTimes : {
        sun : {
            open : "8am",
            close : "12pm"
        }, 
        mon : {
            open : "10am",
            close : "9pm",
        },
        sat : {
        open : "7am", 
        close : "11pm"
        },
    }
}
 const foodItems = [...food.starterMenu , ...food.mainMenu];
// loop this foodItems
// using for loop : in this loops we have controls of break and continue
let counter = 0;
for(let i=0 ; i<foodItems.length; i++ ){
    // counting all items before paneer
    if(foodItems[i].startsWith("paneer")){
        break;
    }
        counter++;

}
console.log(counter);

// using for of loop
// if we need just elements values not index then use 
// need breaks and continue then use 
const cartItems = ["charger", "phone", "cable", "outlet", "glasses","shoes"];
//examples 1
for(const item of cartItems){
    // so skip only outlet items and pack all elements 
    if(item === "outlet"){
        continue;
    }
    console.log(`packed cart items are ${item}`);
}
// examples 2 : collect only those items whose first letter starts with character c
for(const item of cartItems){
    if(item.startsWith("c")){
        console.log(item) // charger cable

    }
}
// using for of loop if we need both index and element valuse 
for(const [idx ,item] of cartItems.entries()){
   // console.log(idx) // printing all items index
    console.log(`${idx+1} , item is : ${item}`);
}
// use of for in Loop : use this loop only for objects not on arraays or string
const myDetails ={
    name: "purnish",
    age : 23,
    rollNum : 182,
    gender : "male", 
    schoolName : "sirt",
    occupation : "farmer",
}
for(const key in myDetails){
    // print key : values pair
  //  console.log(`${key} : ${myDetails[key]}`);
  // skip the rollNum and print all keys 
  if(key === "rollNum"){
    continue;
  }
  console.log(key,myDetails[key])
    
}
// 
// modern array methods , .forEach() , .filter() , .map()  , .reduce()
const cart = [
    {}
]