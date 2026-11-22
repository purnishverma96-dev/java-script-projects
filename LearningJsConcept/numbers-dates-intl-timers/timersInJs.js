// setTimeout() and setInterval
// thise timers function used to perform any action after few time 

// setTimeout()--- if you want to execute any function in the future then it is used, IT RUNS AT ONCE AFTER GIVE TIMES 
// syntax : setTimeout(functionName , delay)
// NOTE : REMEMBER HERE DELAY always put in miliseconds value
// 1 second = 1000ms , similarly 4second = 4000 milisecond

// example 
// console.log("hi this is my first program");
// setTimeout(() => {
//     for(let i =1; i<=10 ; i++){
//     console.log(i)
// }  
// }, 3000);

// console.log("run 10 times")
// HERE'S SOME IMPORTANT NOTES : setTimeout function shedule the method that written inside the setTimeout()function to run in 
// the future , it doesn't stops js to run the program , js execute everything line by line , but , this method inside the 
// setTimeout() will be execute according to the timer, this is called asynchronous js
// ASYNCHRONOUS MEANS : IF TASK A TAKING SOME TIME DO WORK , JUST SHEDULE THEM , AND DO REAMAINING TASKS LIKE B, C,D , AND AFTER THE REQUIRED TIME FOR TAKS A COMPLETES THEN EXECUTE TASK A 
// DON'T WAIT FOR COMPLETING THE TASK A COMPLETELY THEN MOVE ANOTHER TASK , , THIS BEHAVIOR CALLED ASYNCHRONOUS

// show a message after 3 second 
// console.log("website is loading ........................")
// setTimeout(() => {
//     console.log("our website is loaded.....")
// }, 2000); // first in two second print "our webside is loaded "and reaching last 3rd second it prints  countings that mentioned above in 3s timeout

//PASSING A FUNCTION IN setTimeout FUnction 
// console.log("going to gree some friends after few second...........................")
// const greet = function(){
//     console.log(`hi buddy , let's enjoy`)
// }
// now passing this gree() method inside the setTimeout function
// setTimeout(greet() , 1000); -> THIS IS WRONG WAY , 
// CORRECT WAY
// setTimeout(greet , 2000); // don't use () brackets 

// setTimeout function with arrow function
// setTimeout(() => {
//     let a = 5;
//     let b = 4;
//     console.log(`the value is ${a+b}`)
// }, 1000);

//STORE setTimeout() FUNCTINO INTO A VARIABE
// const foodTiming = setTimeout(() => {
//     console.log("order pizza , pasta ,and a cup of tea")
// }, 1000);
// // clearTimeout()-- , suppose you set a timer 5 second to execute  ,but if you want to cancel that action before/withing times
// // use this clearTiming() method

// // cancel timing of foodTiming 
// clearTimeout(foodTiming) // this wil stop the shedule that is being seted for foodTiming method , o/p : nothign prints


// USING setInterval and clearInterval
// setInterval(function , delay)-- this method continuie the task repeatedly , 
// for stoping that task use clearInterval
//REMEBER : SETTIMEOUT FUNCTION RUNS ONLY ONCE AFTER COMPLETING IT'S TIMING , AND IF WE WANT TO STOP THIS FUNCTION BEFORE 
// TIMING USE clearTimeout()-> pas viarable inside () this 
// BUT setInterval()->this goes infinitely according the given time interval
// for stoping use clearInterval()-- pass the variable inside it () bracke
// example print "hellow" keyword in every 1 second
 const printHello = setInterval(()=>{
    console.log("hello")
 }, 1000)// this will print hello infinitely in every 1 second , 
 // so stop this printHellow after 5 second-- use clearInterval
 const stopHelloPring = setTimeout(() => {
    clearInterval(printHello)
    console.log("printing hello stoped..........")
 }, 5000); 