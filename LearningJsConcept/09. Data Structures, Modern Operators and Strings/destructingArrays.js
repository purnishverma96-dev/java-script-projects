"use strict"
// Learning array destruction , nested array destruction , how to swap without any temp variable
const fruits = [ "banana" , "apple" , "orange" , "mango" , "lemon"];
console.log(fruits);
// the manual way of obtaining array elements from the arrays
// const fruits1 = fruits[0];
// const fruits2 = fruits[1];
// const fruits3 = fruits[2];
// console.log(fruits1, fruits2, fruits3);

// new method of takign array elements from the fruits array
const [fruits1 , fruits2 , fruits3 , fruits4 ] = fruits;
console.log(fruits3 , fruits1 , fruits2) // orange banana apple


// examples of restaurant objects --- practising how to extract some data from arrays that is inside the restaurant
const restaurant = {
    name : "classico Italiano",
    Location : "Via Angelo Tavanti 23 , Firenze, Italy",
    categories : ["Italian" , "Pizzeria" , "Vegetarian" , "Organic"],
    starterMenu : ["Focaccia" , "Bruschetta" , "Garlic Bread" , "Caprese Salad"],
    mainMenu : ["Pizza" , "Pasta" , "Risotto"],
    orderFood : function(starterIdx , mainIdx){
        return [this.starterMenu[starterIdx] , this.mainMenu[mainIdx]];
    }
};
// taking data from categories arrays form restaurant object
let [first , second ,] = restaurant.categories;
console.log(first , second ); //Italian Pizzeria

 // swap without temp variable
 [ first , second] = [second ,first];
 console.log("after swap")
 console.log(first , second); // Pizzeria Italian

// so restaurant is given make a function orderFood and order some starterMenu 
// mainMenu food
const [firstItem , secondItem] = restaurant.orderFood(1,2);
console.log(firstItem , secondItem); // o/p Bruschetta  Risotto

// nested destructuring 
console.log("udnerstaing nested array destructuring");
const names = ["ram" , "shyam" , ["sita" , "shala" , "kavita"] , "roahan"];
// How do you take elements from the nested arrays
const [i , , [j , k ] , l]=names;
console.log(i , j ,k ,l) // ram sita shala roahan
const [, , [a,b,c]]= names;
console.log(a,b,c); // sita shala kavita

// we can set defaul valuse 
const marks = [90 , 93];
const entryFee=[500, 600, 700]
const [ak=99, bk=99 ,ck=99 ,dk=99,ek=99 ,fk=99 ,gk=99]= marks;// here we can set a defaul marks for each variables but taking valuse form marks array will be assigned to required varaibles
console.log(ak, bk ,ck ,dk ,ek ,fk ,gk);//90 93 99 99 99 99 99
const [person1=1000 , person2=1000 ,person3=1000 , person4=1000 , person5=1000, person6 =1000,person7 =1000, person8=1000 ]=entryFee;
console.log(person1 , person2, person3, person4, person5, person6 , person7 , person8);  // 500 600 700 1000 1000 1000 1000 1000