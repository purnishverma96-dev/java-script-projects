console.log("hi")
// we will study map() , filter() and reduce() methods for array data transformation

// map()
// it is used when we want to transform every elements of the array
// it returns a new array
// syntax  : const newArray = arr.map(currentItem , index , newArray)=>{
  //  return // do some operation }
const marks = [12,13,11,10,4,3,7];
// add 5 marks in each elements 
const updateMakrs = marks.map(mark =>{
    return mark +=5;
})
console.log(updateMakrs)
// given a prices of clothes give 10% discounts on all of them
const clothePrices = [400,200,500,800,240,1000];
const discountClothes = clothePrices.map(discount => 
{
    return (discount - (discount*0.1));
}
);
console.log(discountClothes); // [ 360, 180, 450, 720, 216, 900 ] returns a new array

// .filter() method
// this element select elements by checking the conditions
// returns a new array
 const stockPrice = [200,400,543,535,465,646,234,345,978,567,343]
 // collection all stock prices who is above 400
 const mychoice = stockPrice.filter(price =>{
    return price >400;
 })
 console.log(mychoice) ; //[ 543, 535, 465, 646, 978, 567 ];

 // another example
 const products = [
  { id: 101, name: 'Mechanical Keyboard', price: 3500, inStock: true, category: 'Tech' },
  { id: 102, name: 'Gaming Mouse', price: 1200, inStock: false, category: 'Tech' },
  { id: 103, name: 'Coffee Mug', price: 400, inStock: true, category: 'Lifestyle' },
  { id: 104, name: 'USB-C Hub', price: 2200, inStock: true, category: 'Tech' }
];
// find the products who is in the stock and above 3000rs
const myproduct = products.filter(product =>{
    return product.inStock === true && product.price >=3000;
})
console.log(myproduct);
// [
//   {
//     id: 101,
//     name: 'Mechanical Keyboard',
//     price: 3500,
//     inStock: true,
//     category: 'Tech'
//   }
// ]
// store all producs except whoose id 103
const pId = 103
const filterProducts = products.filter(product =>{
    return (product.id !==pId )
})
console.log(filterProducts);
// [
//   {
//     id: 101,
//     name: 'Mechanical Keyboard',
//     price: 3500,
//     inStock: true,
//     category: 'Tech'
//   },
//   {
//     id: 102,
//     name: 'Gaming Mouse',
//     price: 1200,
//     inStock: false,
//     category: 'Tech'
//   },
//   {
//     id: 104,
//     name: 'USB-C Hub',
//     price: 2200,
//     inStock: true,
//     category: 'Tech'
//   }
// ]


// reduce() method
// this methods is similar ,, when we declare a varibles outside like counter , sum to 0 or 1 and try to manipulate the 
// the arrays using for loops,, so in that cases use this methods
// syntax : array.reduce((accumulator , currentItem, index , fullArray) =>{
    // return something
//},put the value of accumulator);
// remeber some types of 
const electricityBill = [10,20,60,20,10,50];
// calculate the sum of all electricty bill
const totalBill = electricityBill.reduce((acc ,bill)=>{
   return acc +=bill;
},0)
console.log(totalBill)//170

// calculate the total producs value , price and qty is given
const cart = [
  { item: 'Book', price: 500, qty: 2 },
  { item: 'Pen', price: 50, qty: 5 },
  { item: 'Notebook', price: 120, qty: 3 }
];
const totalValue = cart.reduce((acc,prod)=>{
    return acc = acc + prod.price*prod.qty;
},0);
console.log(`total prices of cart : ${totalValue}`) //total prices of cart : 1610

//create an object who retun total pending amt and total deliverd ammount
const orders = [
  { id: 1, status: 'delivered', amount: 1200 },
  { id: 2, status: 'pending', amount: 800 },
  { id: 3, status: 'delivered', amount: 2500 },
  { id: 4, status: 'cancelled', amount: 500 },
 { id: 5, status: 'cancelled', amount: 500 },
 { id: 4, status: 'delivered', amount: 500 },

  { id: 4, status: 'pending', amount: 500 },


];
const deliverPendingAmt = orders.reduce((accumulator , order)=>{
   if(order.status === "delivered") accumulator.deliver += order.amount;
   if(order.status === "pending")  accumulator.pending += order.amount;
   return accumulator;
},{deliver : 0 , pending : 0 })
// console.log(`the delivered and pending money : ${deliverPendingAmt}`);// whenever we paas objects in template literal it automatically converts into strings so avoid this , o/p the delivered and pending money : [object Object]
console.log(deliverPendingAmt)