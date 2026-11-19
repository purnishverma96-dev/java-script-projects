// in this section we will study simple array methods , mutability and immutability

// mutability: when some methods make changes in the original arrays , 
// example : push() , pop(), shift(), unshift() , splice() , sort() , reverse()

// imutability : when somve methods does not affects original array , it returns a new array
// slice() , map() , filter(), concat()


/////////////////////////////////////////////////////////////////////////////////////////////////////
// slice(startIdx , endIdx) --> it returns new array , 
/////////////////////////////////////////////////////////////////////////////////////////////////////
const rollNum =[101, 104, 224, 113,145,154];
console.log(rollNum.slice(3)); // [ 113, 145, 154 ] print from index 3 to end
console.log(rollNum.slice(0)) // [ 101, 104, 224, 113, 145, 154 ]

const [firstNo , ...otherNo] = rollNum;
console.log(firstNo , otherNo);//101 [ 104, 224, 113, 145, 154 ]

console.log(rollNum.slice(2, 4)) // [ 224, 113 ] , prints from idx 2 to 3(excludes last index)
console.log(rollNum.slice(1 , 5)) // [ 104, 224, 113, 145 ] , prints from idx 1 to 4
console.log(rollNum.slice(3,4)) // [ 113 ] ,prints only index 3th place item

// accessing last index element
console.log(rollNum.slice(-1)); //[ 154 ] ,access lastItem
console.log(rollNum.slice(-4)) // [ 224, 113, 145, 154 ], it prints from end to till 4 , careful its not reversing 
// here if include both +ve and -ve so its skips that position and prints remaining items
console.log(rollNum.slice(2, -2)) //[ 224, 113 ] 
console.log(rollNum.slice(1,-1)) //[ 104, 224, 113, 145 ]

/////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. reverse(), concat(),  join()
/////////////////////////////////////////////////////////////////////////////////////////////////////
// .reverse() -- it changes the orginal array 
const userNames = ["cat" , "dogs", "bat", "cow", "buffalo", "snake"];
console.log(userNames.reverse()); // [ 'snake', 'buffalo', 'cow', 'bat', 'dogs', 'cat' ] , .reverse() it reverse all items in the array
console.log(userNames); //[ 'snake', 'buffalo', 'cow', 'bat', 'dogs', 'cat' ] it also changed the original array

// concat(put another array)-- it combinse mutltiple arrays and return a new array
const animal = ["cat" ,"dog", "snake"];
const studyStuffs  = ["pen", "laptop", "keyboard"];
const cart = ["headphone" , "mic" , "shirt"];
const combineArr = animal.concat(studyStuffs).concat(cart);
console.log(combineArr) // combined all arrays
// [
//   'cat',       'dog',
//   'snake',     'pen',
//   'laptop',    'keyboard',
//   'headphone', 'mic',
//   'shirt'
// ]

// .join() , it convert any array into string
const progLnag = ["java", "javascript", "cpp", "python"]
console.log(progLnag.join("#")) // java#javascript#cpp#python
console.log(progLnag.join(" % "))// java % javascript % cpp % python

// understand modern indexing .at() method : it help to just find/search any element form the array
const collegeName = ["sirt" , "lnct" , "oriental" ,"nri" , "jnu", "rgpv", "jnct"]
console.log(collegeName.at(0))// sirt
console.log(collegeName.at(4))// jnu
console.log(collegeName.at(6))// jnct

console.log(collegeName.at(-1)); // jnct
console.log(collegeName.at(-3));// jnu
console.log(collegeName.at(-5)); // oriental

///////////////////////////////////////////////////////////////////////////////////////////////////////
// .splice(startIdx ,deleteCount ,item1,item2,item3....)
// here startIdx means put the value of idex frome where you want to add or delete elements
// deleteCounts : put the no values , the amount of items you want to delete/add
// item1,item2,item3... : here you will put the items value for delete/add
// NOTE : the .splice() method make changes on the original arrays
/////////////////////////////////////////////////////////////////////////////////////////////////////
const cartItems = ["mobile", "shirt", "table", "mouse", "keyboard", "pen"];
//1. only delete items , just want to delete table , mouse and keyboard
console.log(cartItems.splice(2,3))//[ 'table', 'mouse', 'keyboard' ], here from index 2 we want to delete only three items so (2 is startIdx, 3 is deleteCount)
console.log(cartItems);//[ 'mobile', 'shirt', 'pen' ] , also original arrays changed

const cartItems1 = ["mobile", "shirt", "table", "mouse", "keyboard", "pen"];
//2. just add new elements by deleting some elements , so delete table and mouse and add A and B
console.log(cartItems1.splice(2,2, "A", "B",)) // [ 'table', 'mouse' ]
console.log(cartItems1) // [ 'mobile', 'shirt', 'A', 'B', 'keyboard', 'pen' ]

//3.insert elements without deleting any items , insert A, B,C  after the mouse
const cartItems2=  ["mobile", "shirt", "table", "mouse", "keyboard", "pen"];
console.log(cartItems2.splice(4, 0 , "A", "B", "C")); // here items will be added from idx 4 , since deleteCount is zero so no any item will be deleted
console.log(cartItems2) // ["mobile", "shirt", "table", "mouse","A","B","C" "keyboard", "pen"];

// 4 .replacing elements, listen for replace , also put the deleteCount no so that you can replace items
const cartItems3 =  ["mobile", "shirt", "table", "mouse", "keyboard", "pen"];
//here replace shirt and table and put earphone and earburds, so we are deleting 2 items 
console.log(cartItems3.splice(1,2,"earphone" , "earburd")); // [ 'shirt', 'table' ]
console.log(cartItems3); // [ 'mobile', 'earphone', 'earburd', 'mouse', 'keyboard', 'pen' ]