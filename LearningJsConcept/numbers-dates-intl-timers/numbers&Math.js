// 

// part 1 : Numbers , Parsing , Math and Remainder
// converting ,parsing and checking numbers 

// convert any strings into number , syntax---> Number("pass string digits"), or +String
const phoneNo = "4569873452"; // string mobile number 
const validPhoneNo = +phoneNo;
const validContactNo = Number(phoneNo);
console.log(validContactNo) // 4569873452
console.log(validPhoneNo) // 4569873452
console.log(typeof(validPhoneNo)) // number

// finding decimal number from string( if strings contains number so we can extract number portion) use Number.parseFlot("string") for floting number 
// if you need integers portions use Number.parseInteger("string")
const boxWidth = "345.435rem";
const dimension = " 444 meter"
const boxWidthNum = Number.parseFloat(boxWidth);
console.log(boxWidthNum); //345.435
console.log(Number.parseInt(boxWidth)) // 345 , it takes only integer portion 
console.log(Number.parseFloat(dimension)) // 444
const length = "eg5545";
console.log(Number.parseFloat(length)) // NaN , if stringNumbers contains string portion on the left side ,, so it does not works

// now how de we check a value is giveN : is a number or not 
// use method called : Number.isFinite(pass value)
console.log(Number.isFinite(3534)); // true
console.log(Number.isFinite(+"456")) // true
console.log(Number.isFinite(+"34535px"))// false
console.log(Number.isFinite(Number.parseFloat("536.34 rem  ")))// true


// studying math and roundin property
console.log("-------------------------------------math and rounding ............................................")
// for rounding any Number : rounding means if you put any decimal values , rounding helps to transform this number to it's nearest possible integer
console.log(Math.round(45.4)) // nearest integer is 45 
console.log(Math.round(455.540)); // 456
console.log(Math.round(654.3456666)) // 654

// Math.ceil(put any number ) : round only upper integers
console.log(Math.ceil(4535.5)) // 4536
console.log(Math.ceil(34.534)) //35
console.log(Math.ceil(366.0)) //366
console.log(Math.ceil(45))// 45
console.log(Math.ceil(34.01)) // 35
//Math.floor(Pass any Num) , it rounds to its lower integer
console.log(Math.floor(35345.34))// 35345
console.log(Math.floor(34.99997)) // 34

//Math.trunc(pass any Number ) : it's eliminates all decimal portion
console.log(Math.trunc(345.343))// 345 , just removes decimal portion
console.log(Math.trunc(36.09134)) // 36

// most Important : if we want to generate any random number betweein 0(include) to 1(exclude)
// use Math.random()
console.log(Math.random()) // 0.41797680212937205 ,here this will generate any numbers betweein 0 to 1 , remember here 1 is exclude 
// generate number between 1 to 6 only integer value;
console.log(Math.floor(Math.random()*6+1)); // this will never generate 0

// .toFixed(2) , this number method helps to make any number , only two digits after the decimal points and also rounds it 
// .toFixed(2) , this methods returns only string , so we have to convert it into number manually
// .toFixed(Number) -- this will rounds numbers after decimal points , till Number digits
const rate = 345.34545554
console.log(rate.toFixed(2)); // 345.35 ,here345.34 will not be print bcz this method also rounds those numbers 
console.log(rate.toFixed(4)) //345.3455
console.log(rate.toFixed(7)) // 345.3454555

const errorParameters = 53.053544194;
console.log(+errorParameters.toFixed(2)) // 53.05
console.log(+errorParameters.toFixed(3)) // 53.054 , see it rounds thodse decimal numbers as well
console.log(+errorParameters.toFixed(5)) // 53.05354


// remainder Operator a%b , when we devide a t0 b , it gives the remainder(sheshfal) value
console.log(45%3) // 0
console.log(23%4) // 3
console.log(3%5) //3
console.log(45%74665) // 45

// the sqrt function
console.log(Math.sqrt(400)) // 20
console.log(Math.sqrt(10000)) // 100
console.log(Math.sqrt(34)) //5.830951894845301
// we we want to calculate cube or 4th ,5th 
console.log(8 ** (1/3)) // 2 , this will find cube root
console.log(125**( 1/3)) // 4.999999999999999
console.log(216 ** (1/3)) //5.999999999999999
console.log(27 **(1/3)) //3
console.log(64 **(1/3)) //3.9999999999999996

// find radius of circle
console.log(Math.PI) //3.141592653589793
// find radius of circle whose radius is 10rem
console.log(Math.PI * ((Number.parseFloat("10px"))**2)) // 314.1592653589793

// finding max or min numbers 
console.log(Math.max(34,65,87,65,43,12,45)) //87
console.log(Math.min(34,65,87,65,43,12,45)) // 12

