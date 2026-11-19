// understand looping concepts 
// forEach Loop function and for of function

//forEach() : in this loop function , it paass every element of the array inside the function(when we pass function inside the function called callback function)
 const marks = [22,33,56,43];
 // here we want to pass every element of the array inside the function 
 // syntax : array.forEach(function(currentElement , idx ,fullarray ))
 // forEach() loop function also give facibility to wrok with elements and as well as indeces
 marks.forEach(function(arrItem){ // one parameter meas it taking every currentElements of array
    console.log(arrItem*2);
    // o/p 
// 44
// 66
// 112
// 86
 })
 
 // NOTE : forEach() loop function doesn't  affect original array
 console.log(marks) ; //[ 22, 33, 56, 43 ] here original property preserved

 // forEach() function also give index 
 const studentDetails = ["marks","rollNum", "age","name", "attendence"];
 studentDetails.forEach(( studElement , studentIdx) => {
    console.log(`${studElement + "###"} : print ${studentIdx}`)
//  marks### : print 0
// rollNum### : print 1
// age### : print 2
// name### : print 3
// attendence### : print 4
 });
 // another example 
 const tranjections = [200,400,100,400,500,80,210,350,]
 // print the idx and tranjections value who have done over 200 rs
 tranjections.forEach((element, tranjectionsidx) => {
     if(element>200){
        console.log(`tranjectionTimes : ${tranjectionsidx} and amounts : ${element}`)
     }
// tranjectionTimes : 1 and amounts : 400
// tranjectionTimes : 3 and amounts : 400
// tranjectionTimes : 4 and amounts : 500
// tranjectionTimes : 6 and amounts : 210
// tranjectionTimes : 7 and amounts : 350
 });
// Note : in forEach function the continue or break statements doesn't works so better to use for of loop
 // for of loops
 // we can also works with all array element using for of loop
 // it also proives index feature , means we can works with index also
 const tutionFees = [50,44,65,54,23,89,67,12,32];
 // increase 100 rs in each fees 
 for(const f of tutionFees){
    console.log(f+100);
// 150
// 144
// 165
// 154
// 123
// 189
// 167
// 112
// 132
 }
 // working with index , in for of function
 // syntax for(const [index , element ] of arr.entries()){
 // code
 //}
 // syntax of forEach------------arr.forEach(function(element , index)){}
 const libraryFees = [500 ,440, 550, 600, 400, 700,800];
 // increase 10% amount in each arrays value and assign theri serial number
 for(const [sNo, fees] of libraryFees.entries()){
    console.log(`increased fees ${fees + fees*0.1} , person serial no : ${sNo + 1}`)
// increased fees 550 , person serial no : 1
// increased fees 484 , person serial no : 2
// increased fees 605 , person serial no : 3
// increased fees 660 , person serial no : 4
// increased fees 440 , person serial no : 5
// increased fees 770 , person serial no : 6
// increased fees 880 , person serial no : 7
 }