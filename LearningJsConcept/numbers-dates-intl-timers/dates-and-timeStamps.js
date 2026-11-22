// ====================  DATES & TIMESTAMPS ==================
// for working dates and times with js , there are some built in date objects in js
// in js , date is a built in object
 // creating dates

// 1.find current date and times-- 
const now = new Date(); // use constructor bcz it's a built in object
console.log(now) // 2026-11-19T07:37:28.266Z , this prints in ISO 8601 date-time formate where
// 2026 year , 11 month , 16 date , T is date and time separator,07:37:28 this represent timings , 266 it represents Milliseconds,z is utc timezone
// our indian timezone is 5 hours 30 mints ahead from iso 8601 date time formate

// 2. second way just by passing numbers
console.log("==========================second way just by passing numbers==============================")
// in js , months indexing strats from 0 so , (0 = Jan, 10 = Nov, 11 = Dec)
// js prints date in ISO 8601 Date-Time Format which is ,, the timings is 5 hours 30 mints below from our indian time
console.log(new Date(2001,10,25,7,12,5)) //2001-11-25T01:42:05.000Z , prints ISO 8601 Date-Time Format , index also changed,and timing is also reduced 5 hours 30 second


// finding individual components of timings just by passing numbers in ---->> new Date(year, month, day, hour, minute, second)
// year 2042 , month is december , date is 25 , time is : 8 hours,40 minute and 45 second 
const times = new Date(2042 , 10 ,25 , 8 , 40 ,45 );
// print this times in utc time-date formate 
console.log(times) //2042-11-25T03:10:45.000Z , notice here, month index increased, timing is reduced
// for getting every individual year/month/date/hours/minute/second/milliseconds
console.log(times.getFullYear()) // 2042 
console.log(times.getMonth()) // 10 , here in the second formate of creating date, month not changed 
console.log(times.getDate()) // 25
console.log(times.getHours()) // 8
console.log(times.getMinutes()) //40
console.log(times.getSeconds()) //45
console.log(times.getMilliseconds()) //0
// printing the times into utc formate
console.log(times.toISOString()) // 2042-11-25T03:10:45.000Z , this formate is called ISO 8601 Date-Time Format, month index changed and times reduced

// 3. third way of creating date is passing ISO 8601 Date-Time Format ,
console.log("=========== third way of creating date is passing ISO 8601 Date-Time Format=================================================")
// usually the iso 8601 date time formate we get from api or backends 
const apiDate = '2026-11-05T10:15:30.000Z';  // it comes from api , 
// create date from its apiDate
const deliverDate = new Date(apiDate); // now we can take every details of apiDate 
console.log(deliverDate.toISOString()) // 2026-11-05T10:15:30.000Z, this method prints in UTC ISO format.
console.log(deliverDate) // 2026-11-05T10:15:30.000Z
console.log(deliverDate.getMonth()) // 10 , here 10 prints due to index, wheares origina month was 11 , so for ui we have to add 1
console.log(deliverDate.getHours()) // 15 , it also added 8 hors , these are good for specially indian timing
console.log(deliverDate.getMinutes()) // 45 , addec 30 minuts
console.log(deliverDate.getSeconds()) // 30

console.log("====================================exercise 1============================================")
//exercise 1 : given a date iso 8601 date time formate , make it a clean understandable formate date for ui
const orderTimestamp = '2026-11-05T10:15:30.000Z'; // output expected : 05/11/2026 , this formate date comes from api, let's suppose
const orderDate = new Date(orderTimestamp);
const dateUi = function(){
    const date = String(orderDate.getDate()).padStart(2,"0") // here date and month need to convert into string so thae padding property can apply
    const month = String(orderDate.getMonth()+1).padStart(2 ,"0")
    const year = String(orderDate.getFullYear());
    console.log(`correct date formate : ${date}/${month}/${year}`)
}
dateUi(); // correct date formate : 05/11/2026
console.log(typeof(dateUi())) // undefined , bcz function is not returning any thing it is just printing
