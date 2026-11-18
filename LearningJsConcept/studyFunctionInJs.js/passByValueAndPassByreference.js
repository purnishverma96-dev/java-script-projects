// in this section we will understand pass by value and pass by reference concepts

// pass by Value : so when we pass primitive data types variables( like String , integer , boolean , undefined, null) 
//into the fuction as an argument , the parameters of the fuction takes a pure copy of the variables that is being passed , 
// and we make any changes inside the function the original variables value will not be affects/changes
// examplse 
const names = "purnish";
const changeName = function(name){
    name = "purnvashi kumar";
    console.log(name);

}
changeName("names"); // purnvashi kuamar , here the original outside variable  -->names, passed in the function it simply goes the copy of it in the parameter
// so every changes we make in the function , it will not affect the outside names variable
console.log(names); // purnish

// pass by reference : so when we pass non primitive  data types(like objects , arrays) inside the function , so any changes we make inside the fuction
// it will changes/affects the original objects or arrays  that is outside of the function.. 
const nameList = ["ram" , "john", "akash", "vinod"];
// pass this array into the function
const changeFunc = function(nameContainer){
    nameContainer.push("purnish" , "purnvashi");
    console.log(nameContainer)
}
changeFunc(nameList); // [ 'ram', 'john', 'akash', 'vinod', 'purnish', 'purnvashi' ] here see the original array nameList is changes ,, 

// let's introduce a bug to you 
const userName = "purnish";
const myDetails = {
    myName : "purnvashi kumar",
    age : 22,
    gender : "male",
    contact : 3456782345,
    passportId : 234523
}
// first create an fuction updateDetail organization ,this is a authorized organization who updates any person details
// here we are taking myDetails object , person details
const updateDetailsOrg= function(personDetails){ 
    personDetails.myName = "purnvashi kumar kushwaha";
     personDetails.passportId = 234555;
}
 updateDetailsOrg(myDetails)// here my details passportId is changed
 console.log(myDetails)
// output
//  {
//   myName: 'purnvashi kumar kushwaha',
//   age: 22,
//   gender: 'male',
//   contact: 3456782345,
//   passportId: 234555
// }
// create a fucnction that takes an personDetails and verify for them to are them  correct person to enter
const securityCheckingMachine = function(personDetails){
      if(personDetails.myName === "purnvashi kumar kushwaha"){
        console.log("person's name is correct matched allowed to go...............")
      } else{
        console.log("update your details , or wrong details , don't enter")
      }
      if(personDetails.passportId === 234523){
        console.log(" person's passportId is matched correct  allowed to go...............")
      }else{
        console.log("update your details , or wrong details , don't enter")
      }
      }

      
securityCheckingMachine(myDetails)
// person's name is correct matched allowed to go............... , here person name was corrects so he was eligible to go .. 
// update your details , or wrong details , don't enter.........., but here the person passportiD was wrong , bcz it get changes 
// this is how a bug is appeard, the person says i have updated my name and passport id , but securityMachine says you only updated your name , not passport , 