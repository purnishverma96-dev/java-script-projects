// Rest Pattern and Parameters
// spread operator ... this is used to unpack all array items 
// reast operator ... this is used to pack all items and condense a single variables

//rest patterns : the rest operator used before the = operator for packing rest of the elements into a sigle array
// using rest operator for destructuring called rest patterns
const rollNum =[1,2,3,4,5,6,7,8,9];
const [a,b,c, ...otherMarks] = rollNum;
console.log(otherMarks) // [ 4, 5, 6, 7, 8, 9 ] this becomes a new array

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
    },
    orderfood : function(firstFood , ...finalFood ){
      console.log(firstFood);
      console.log(finalFood);
    }
}
// destructring rest operators in the array
const [food1,food2, food3, ...otherMenus]= [...food.starterMenu, ...food.mainMenu];
console.log(...food.starterMenu, ...food.mainMenu);
console.log(food1, food2, food3 , otherMenus);// here otherMenus becomes a new arrays

// destructring rest operators in the objects 
const {sat  , ...otherWeeks} = food.openingTimes
console.log(sat , otherWeeks);

// using rest operators for function called rest parameters 
// real use case of passing a rest operator on fuction as an argument
const add = function(...numbers){
    let sum =0;
    for(let i =0 ; i<numbers.length; i++){
        sum += numbers[i];
    }
            console.log(sum)

}
add(3,5,4);
add(3,5,2,4,3,5);
add(3,5,3,6,7,8,6,5,4);

const x = [50,20,500];
console.log(...x)
add(...x)

// calling a fuction inside the object
food.orderfood("pizza" , "chai", "popcorn","snacks" , "cake");
// pizza
// [ 'chai', 'popcorn', 'snacks', 'cake' ]