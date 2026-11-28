// understand the callback function 
// when we pass a function inside an another function as an argument , that function called callback function

// first understand parameters and arguements
const orderPizza = (priceOrder)=>{
    const deliveryFee = 30;
    const totalValue = deliveryFee + priceOrder;
    console.log(`pizza is rodered ,toal fee is : ${totalValue} and charged ${deliveryFee} rs delivery fee`)
}
orderPizza(500)
// here , priceOrder, it is a variable , you declared it while making function orderPizza , this is called parameter
// but when calling the function and passing original real value : 500 is is called arguement

// let's write program , illustrate callback function 

function orderBurder(xyz){
    console.log("your burger is order")
    xyz()
    
}
function burgerBill(){
    console.log("here is your burger bill")
}

orderBurder(burgerBill); // here , passed burgerBill function as an arguement and passed inside   function orderBurger , the function xyz is act as a callback function
//hence the burgerBill is called callback funciton
// burgerBill();

//new Exercise : create a function that do 4 work using callback funciton 
/*
a person order some item , creating a bill , paying the bill, displaying the bill 
*/
console.log("========================exercise 1 ====================================================");
const items = ["watch" , "shirt" , "keyboard" , "earphone"]
// first the person will order some item
function orderItem(items , abc){ // items it is a parameter that is an array , and we are trying to look some item and purchase it 
    // person wants to by a watch
  if(items.includes("watch")){
    console.log("item is found , procedd to order and create bill");
    abc();
  }else{
    console.log("item is not found")
  }
}
function createBill(abc){
    console.log("bill is created")
    abc();
}
function billPayment(abc){
    console.log("bill is paid")
    abc();
}
function displayPayment(){
    console.log("payment is displayed");
    
}
orderItem(items , () =>{
    createBill(() =>{
        billPayment(() =>{
            displayPayment();
        })
    })
})
console.log("you completed all the wok that i told")

// here the above problems is called callback hell, it's make code more difficult to handle , readablity is difficult 
// we use promises and async/await to handle this callback hell issue