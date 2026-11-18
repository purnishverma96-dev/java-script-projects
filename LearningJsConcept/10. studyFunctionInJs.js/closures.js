// understand closures
// a closure is property ,,that makes a function to remember all the variables at the function birthplaces
// simple means the inner function remembers all the variabls environments of its outer fuction ,, even the outer fuction execution is gone from the call stack
// so for the closures , it must be a inner fuction inside an outer function
//example 
const outerFun = function(){
    let counter = 0; // local variables of outer fn
    const innerFunc = function(){
        counter++;
        console.log(counter);
    }
    
}
outerFun();
//innerFunc(); // here this prog will not run bcz 'ReferenceError: innerFunc is not defined' the scope of outerfunction is  is now terminated
// so for closure you have to store outer function as value to an outside any variable.
// let's see another example
const outerCountFunc = function(){
 let counter = 0;
  const innerCountFunc = function(){
       counter++;
       console.log(counter)
 }
 return innerCountFunc ; // here return the inncer function that remember its local scopes of birthplace function
}
outerCountFunc(); // it will return the innerCountFunct function 
// for seeing the effect of closure store the outerCountFun() to an variabe
const myCounter = outerCountFunc();
myCounter(); // 1
myCounter(); // 2
myCounter();// 3
myCounter(); // 4

// examples of closure
// crete a function wheere you store accountHolder name and your inicial balance 
const createBankAccount = function(accountHolder , inicialBalance){
    let balance = inicialBalance ; // this becomes a private variable on one can access from outside
    return {
          deposite(amount){
            if(amount >0){
              balance += amount;
              console.log(`${accountHolder} : deposite ${amount} to their account total balance now :${balance}`);
            }
          },
          withdraw(amount){
            if(balance>amount){
                balance -=amount;
                console.log(`${accountHolder} withdraw ${amount} , from their account , total balance now : ${balance}`);
            }else{
                console.log("insufficient balace")
            }
          },
          getBalance(){
            console.log(`total balance : ${balance}`);
          }
    }
}
// here store outerfunction variable into a another variable to see closure
const myBalance = createBankAccount("purnish verma" , 1000);
myBalance.getBalance(); // total balance : 1000
myBalance.deposite(4000) // purnish verma : deposite 4000 to their account total balance now :5000
myBalance.withdraw(4500) // purnish verma withdraw 4500 , from their account , total balance now : 500
myBalance.getBalance(); // total balance : 500