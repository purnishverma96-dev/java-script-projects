// spread operator
// it unpacks all valuse of arrays, string or objects into indivisual elements 

"use strict"

const arr = [5,6,7,8];
// we want put all elements or arr into newArr
// old way
// const newArr = [1,2,3,4, arr[0], arr[1] , arr[2], arr[3]];
// console.log(newArr); //   1, 2, 3, 4,  5, 6, 7, 8
 
// alternative way 
const newArr = [1,2,3,4, ...arr];
console.log(newArr)//  //   1, 2, 3, 4,  5, 6, 7, 8


const details = {
    username : "purnish",
    marks : [32,43,53,43,23],
    items : ["bag", "shoes", "Tshirts", "lungi", "shirt", "belt"]
}
const newMarks = [12,12,12, ...details.marks];
console.log(newMarks) //12, 12, 12, 32,  43, 53, 43, 23 here it's created a completely new array

// shallow copy
const newItem = [...details.items];
console.log(newItem)//[ 'bag', 'shoes', 'Tshirts', 'lungi', 'shirt', 'belt' ]
// merge two array
//let's merge marks and newItem
const marksItems= [...newItem, ...details.marks]
console.log(marksItems); //  ['bag', 'shoes', 'Tshirts', 'lungi', 'shirt', 'belt', 32, 43, 53, 43, 23]

// iterables : in js Arrays , string , maps and sets are iterabels , Not objects
// examplse
// string
const str = "purnish";
const newNames = [...str];
console.log(newNames); // ['p', 'u', 'r', 'n', 'i', 's', 'h']



// udnerstand a real examples 
const myrestaurant = {
    menu : ["chawal", "dal", "checken", "paneer"],
    orderFood : function(item1, item2 ,item3){
        console.log(`all items ${item1}, ${item2}, ${item3} has been ordered`)
    }
}
// const orderFoods = [
//     prompt("order only three items, item1"),
//     prompt("item 2"), 
//     prompt("item 3")
// ]
// myrestaurant.orderFood(...orderFoods);
console.log(...myrestaurant);