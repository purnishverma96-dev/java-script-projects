"use strict"


// objects destructuring means takign objecs variables values in other variables
const aboutMe ={
    Name : "purnish" ,
    job : "full stack dev" , 
    age : 21,
    gender : "male" , 
    location : "bhopal",
    openingHours : {
        friday :{
            open : 10,
            close : 11,
        },
        saturday : {
          open : 11,
          close : 12,
        },
        sunday : {
            open : 12 , 
            close : 12,
        }
    }
}
// old and manual way
// const Name = aboutMe.Name;
// const job = aboutMe.job;
// const age = aboutMe.age;
// const gender = aboutMe.gender;
// new way 
// if we want to create the same variables name as it was in aboutMe objects
const {Name , job , age , gender, openingHours} = aboutMe;
console.log(Name , job , age, gender , openingHours); 
// OUTPUT : purnish full stack dev 21 male {
//   friday: { open: 10, close: 11 },
//   saturday: { open: 11, close: 12 },
//   sunday: { open: 12, close: 12 }
// }


// we want collects data from objects and store it into a changes variables names or renamed variables
const {Name : myName ,
     job : myJob , 
     age : myAge ,
      gender : myGender , 
      openingHours : myOpeningHours 
    } = aboutMe;
console.log(myName , myJob , myAge , myGender , myOpeningHours);



// add some new variables and can take new values
const {
    // default userName set
    userName : user= "Kartik",
    //default menu array set
    menu = [5 , 5, 3],
    // taken value from aboutMe object , but bihar will not print bcz in location there is bhopal exist also
     location : myLocation = "Bihar",
}= aboutMe;
console.log(menu , myLocation , user); // [ 5, 5, 3 ] bhopal Kartik

// nested object destructing
//exp-1
const { job : purnishJob ,
    openingHours : { saturday : saturdayTiming }
} = aboutMe;
console.log(purnishJob , saturdayTiming) ; // full stack dev { open: 11, close: 12 }

//ex-2
const {
   job : amanJob = "video editor" ,// remember here we try to defualt but job is matching form the aboutMe so it will not be change
   openingHours : {
    sunday :  {
        open : openingTiming,
        close : closingTiming
    }
   }
}= aboutMe;
console.log(amanJob) // full stack dev
console.log(openingTiming , closingTiming); //12 12