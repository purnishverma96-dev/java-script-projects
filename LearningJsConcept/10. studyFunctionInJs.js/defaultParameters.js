// study the fundamental concepts of fuctions


// 1. study default parameters : sometimes it very helpful to put some defualt parameters inside the fuctions (here) .
// bcz  ,bcz on the fuction call , we don't have to pass any arguments manually , if we forget to pass arguments ,, then default valuse will be get
// example , the real problems
const totalBil = function(product1 , product2 , product3){
    return product1 + product2 + product3
}
console.log(totalBil(2,3,4)); // 9
console.log(totalBil(5,6)); // Nan, it requires three value in the argument, so if we set some default values in parameters , then don't worry to manually put arguments

// use default parameters
const bookings = [];
const flightBooking = function(flightNum , // we seted some default values of parameters so if user don't put any arguments ,then this valuse get by default
     noOfPassengers = 1 ,
     bookingPrice = 1000 * noOfPassengers ){
    const booking = {
          flightNum,
          noOfPassengers,
          bookingPrice
    }
    console.log(booking)
    bookings.push(booking)
}
// here's variations of argument passing 
// passing arguments manually , if we passed each arguments corresponding to parametes ,, default parameters value will not be calculated
flightBooking("AB12" , 3 , 1000); // { flightNum: 'AB12', noOfPassengers: 3, bookingPrice: 1000 }
flightBooking("ABC" , 1 ,2000) // { flightNum: 'ABC', noOfPassengers: 1, bookingPrice: 2000 }
// passing arguments by skipping some arguments
flightBooking("ABC12"); // { flightNum: 'ABC12', noOfPassengers: 1, bookingPrice: 1000 } here noOfPassengers and bookingPrice are default
flightBooking(12); // Remeber write arguments in order  , { flightNum: 12, noOfPassengers: 1, bookingPrice: 1000 } , this is irelevent passings 

// passing arguments using undefined syntx
flightBooking("AXY45", undefined , 90)// here if we  want to take noOfPassengers value in defalut way so use undefined{ flightNum: 12, noOfPassengers: 1, bookingPrice: 90 }
flightBooking("ADF23" , undefined , undefined) // { flightNum: 'ADF23', noOfPassengers: 1, bookingPrice: 1000 }