// Intl (Internationalization) API
// this api formates the dates , currencies , times , numbers according to the different contries/language conventions


// for formatting date and time
// Intel api is used to just formate any numbers/dates/weeks/times/ according to different different countries
// use Intel.NumberFormate()
// proper syntax : new Intel.numberFormate(local , options).formate(enter your number here)
// here, local : in this place put the formate of language/country , according to you want to print
// some examples "en-IN" =>DD/MM/YYYY , "en-US" => MM/DD/YYYY , "'hi-IN-u-nu-deva'" =>२०/११/२०२६,
// here option shows : you can customize you date/number/currentcies like ,
// exampels "2-digit" , "long", "short", "numeric" ,
// cheetsheet for formate options
// weekday	'long', 'short', 'narrow'	//शुक्रवार, शुक्र, शु
// year	'numeric', '2-digit'	//2026, 26
// month	'numeric', '2-digit', 'long', 'short'	// 11, 11, नवंबर, नव॰
// day	'numeric', '2-digit'    //	20, 05
// hour / minute	'numeric', '2-digit'	 // 1, 01 / 56
// hour12	true (12-घंटे AM/PM), false (24-घंटे)	 // 1:56 pm या 13:56
// timeZone	'Asia/Kolkata', 'UTC'


// formate the current date
// create a date 
const now = new Date();
// print this date in indian and us fomate
console.log("indian formate :" , new Intl.DateTimeFormat("en-IN").format(now));//indian formate : 20/11/2026 , DD/MM/YY
// print this date in Us formate
console.log("us formate :" ,new Intl.DateTimeFormat("en-Us").format(now)) //us formate : 11/20/2026 , MM/DD/YY 
console.log("india formate in hindi language :" , new Intl.DateTimeFormat("hi-IN-u-nu-deva").format(now) )//  २०/११/२०२६

// "Friday, 20 Nov 2026, 01:12 pm" print this formate 
// shortcut and professional way , we can just use formate() method
const currentTime = new Date(); 
const indiaTimes = new Intl.DateTimeFormat("en-In",{
    // here you can customize your options
    weekday : "long", // eg : long = friday/saturday , short = fri/sat/san/mon
    day : "2-digit",
    month : "short",  // "long" = january/july/september/december , "short"=jan/jul/sep/dec , "2-digit" = 01/07/09/12
    year : "numeric" ,// "numeric" = 2024/2025/2026 , "2-digit" = 24/25/26
    hour :"2-digit",
    minute : "2-digit"

})
console.log(indiaTimes.format(currentTime))// Friday, 20 Nov 2026, 02:36 pm