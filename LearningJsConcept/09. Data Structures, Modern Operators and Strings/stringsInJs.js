// udnerstand string 
// in js strings are immutable means any methods that apply on strings , doesn't change original string , it returns a new strings
// create an string 
const firstName = "purnish";
const lastName = "verma";
//console.log(firstName,lastName)
///////////////////////////////////////////////////////////////////////////////////////////
/////////   accessing length and characters                                    /////////
///////////////////////////////////////////////////////////////////////////////////////////
const subject = "chemistry";
const subLength  = subject.length; 
console.log(subLength) // 9
// accessing index characters 
console.log(subject[0]) // c
console.log(subject[3]) // m
console.log(subject[5]) // s
// another way of accessing 
console.log(subject.at(-1)); // y
console.log(subject.at(-3)); // t
console.log(subject.at(5))//  s


///////////////////////////////////////////////////////////////////////////////////////////
// using some usefull methods
// for cleaning and case conversions
// .trim() , .toLoverCase() , .toUpperCase() , 
///////////////////////////////////////////////////////////////////////////////////////////
const techstack = "    full stack web devlopment     ";
console.log(techstack.trim()); // full stack web devlopment (this will removes left and right side spaces)
console.log(techstack.trim().toUpperCase());//FULL STACK WEB DEVLOPMENT
console.log(techstack.trim().toLowerCase());//full stack web devlopment

// fix capitalization in name
const randomName = "vIkAsh PRASad vErma"
const smallName = randomName.toLowerCase();
const correctName = smallName[0].toUpperCase() + smallName.slice(1); // Vikash prasad verma
console.log(correctName);

///////////////////////////////////////////////////////////////////////////////////////////
// Searching & Checking 
///////////////////////////////////////////////////////////////////////////////////////////
// .includes("words") // it returns boolean expressions
const news = "this is the end hold your breath and count to ten";

console.log(news.includes("breadth")); //false
console.log(news.includes("breath")); // true
console.log(news.includes("ten")) // true
console.log(news.includes(" ")) // true 
// .indexOf("word")
console.log(news.indexOf(" ")) // 4 , here it prints only the first place space of the string
console.log(news.indexOf("hold"));// 16
console.log(news.indexOf("is"))// 2
console.log(news.indexOf("the")) // 8
// let's you are going in a flight and your bag checking starts so check it doesn't contains some knife , guns or somethig 
const checkBaggage = function(info){
    const sentece = info.toLowerCase(); // remember it make very easier for us to check if user puts very wrong or invalid sentences
     if(sentece.includes("guns") || sentece.includes("gun") || sentece.includes("pistol")){
        console.log(`customer is not allowed to enter`)
     }else{
        console.log(`your bag contains no harm items , welcome `)
     }
}
checkBaggage("this is my baggage i contains : fruits , bananna , clothes , knife ,and a small toy gun");

///////////////////////////////////////////////////////////////////////////////////////////
// .startWith("word") , .endsWith("word")
///////////////////////////////////////////////////////////////////////////////////////////
const fileName = "purnish_verma.png";
const url = "https://purnishVerma.com/projects";
// file extenstion check
console.log(fileName.endsWith(".png")) // true
console.log(fileName.endsWith(".pdf")) // false
//checking secure url
console.log(url.startsWith("https://")) // true

///////////////////////////////////////////////////////////////////////////////////////////
// extracting substring from the strings use : slice(startIndex , endIndex)
// startIndx includes and endIndex excludes
// if we write (text.slice(6)) it takes from at indx 6 to entire end
///////////////////////////////////////////////////////////////////////////////////////////
const userName = "kalu prasad verma";
// prints from idx 0 to till next space 
console.log(userName.slice(0 , userName.indexOf(" "))) // 'kalu'
console.log(userName.slice(userName.indexOf(" ")+1 , 11)); // 'prasad';
const docName = "dr. purnish verma";
// print only name 
console.log(docName.slice(docName.indexOf(" ")+1)) // from index 4 to end 'purnish verma'
console.log(userName.slice(8)); // 'sad verma'
// real use case 
// taking last characters of string 
const card = "34985254054";
const mail = "purnishverma@gmail.com"
console.log(card.slice(-4)) // '4054'
console.log(card.slice(-6)) // '254054'
console.log(mail.slice(-9)); //gmail.com
///////////////////////////////////////////////////////////////////////////////////////////
// replacing parts of strings
// .replace("old", "new")
// .replaceAll("old" , "new");
///////////////////////////////////////////////////////////////////////////////////////////
const price = "#%1500." 
// Replace above price and make it 1500
const officialPrice = price.replace("#" , "").replace("%" , "").replace("." , "");
console.log(officialPrice) // '1500'
// example 2 
const fakePrice = "#5$%#0.45@$";
// above fakePrice make it 50.45$
const validPrice = fakePrice.replaceAll("#" , "").replaceAll("$", "").replaceAll("%", "").replace("@" , "$")
console.log(validPrice) // 50.45$
// example 3
const story = "i am learning javascript online";
const dashStory = story.replaceAll(" " , "-");
console.log(dashStory); // i-am-learning-javascript-online
///////////////////////////////////////////////////////////////////////////////////////////
// splitting and joining .split() , .join()
// .split(separator) it is used to convert string into an array
///////////////////////////////////////////////////////////////////////////////////////////
const tags = "java , python , javascript , php , c#";
// convert this string to array
const arrayTags = tags.split(" , "); // be very careful about spacings 
console.log(arrayTags); // [ 'java', 'python', 'javascript', 'php', 'c#' ]
// useful concept
const customerName = "purnish verma";
const [firstN , lastN] = customerName.split(" ")
console.log(firstN , lastN); // purnish verma
// .join(separator) : it converts any array back to the string
const someItemsName = ["laptop", "computers", "keyboard"];
const customerN = ["ravi" , "shankar", "kumar"];
const strSomeItemsNames = someItemsName.join(" ");
console.log(strSomeItemsNames) // 'laptop computers keyboard' this is now becomes a string
const strcustomerN = customerN.join(" "); 
console.log(strcustomerN); // 'ravi shankar kumar' this now becomes a string
// create an function where you pass string and their every first char uppercase and rest to loWercase
const capitalizeName = function(name){
   // approach 1 : convert string(or sentences given) into array and the make array back to string using .split and .join method
   const arrayName = name.split(" "); // convert into an array
   const capitalArray = [];
   // for every array pick and make their first char capital and rest of as it is, and push back to the new array
   for(const n of arrayName){
      capitalArray.push(n[0].toUpperCase() + n.slice(1));
   }
   // convert array to the string
   console.log(capitalArray.join(" "))  

}
capitalizeName("this is first time here i came"); // This Is First Time Here I Came
///////////////////////////////////////////////////////////////////////////////////////////
// padding and repeat method : usefull for showing something on ui
// .padStart(targetLength , "what want to add") , .padEnd(targetLength , "what want to add")
///////////////////////////////////////////////////////////////////////////////////////////
const myName = "purnish verma" // lentgth is 13
const startMyName = myName.padStart(20, "#"); // set a target length and add any char at the beggining , here 13 for total length of string and rest 7 for printing # at the beggining
const endMyName = myName.padEnd(20 , "#");
console.log(startMyName) // #######purnish verma
console.log(endMyName) // purnish verma#######
// add 10 stars at the beggining and at the end of the string
const starMyName = myName.padStart( 23, "⭐").padEnd(33, "⭐");
console.log(starMyName) // ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐purnish verma⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// you will given a 16 numbers, print their last utpo 6th digit with "x" sign , eg 23453434535xxxxxx
const cardAtm = function(number){
   const str = String(number);
      const last6dig = str.slice(-6); //randomExamples o/p : 453254 , but we have to print xxxxxxxxxx453254
      const last10dig = str.slice(0 , 10); //randomExamples o/p : 4958395432 , but we have to print  4958395432xxxxxx
  // for printing this formate xxxxxxxxxx453254
  console.log(last6dig.padStart(16, "x")) ; //xxxxxxxxxx568345
  // for printing this formate 4958395432xxxxxx
  console.log(last10dig.padEnd(16, "x")); // 3459650694xxxxxx
  }
cardAtm(3459650694568345);


// repeat(put any number value) method 
const star = "😭";
const boy = "boy"
console.log(star.repeat(10)); //😭😭😭😭😭😭😭😭😭😭
console.log(boy.repeat(12)) // boyboyboyboyboyboyboyboyboyboyboyboy
// make a game which show emojo how many boys are crying 
const babycry = function(num){
   console.log(`there are ${num} babies are crying : ${"😭".repeat(num)}`);
}
babycry(12);
babycry(4)

console.log("...................................practice questions ......................................................................")

///////////////////////////////////////////////////////////////////////////////////////////
// . User Email Cleaner
// Write a function cleanEmail(rawEmail) that removes leading and trailing whitespace from a user-submitted email address and converts the entire string to lowercase.

// Input: '   Purnish.Dev@Gmail.COM   '
// Expected Return: 'purnish.dev@gmail.com'
///////////////////////////////////////////////////////////////////////////////////////////
const cleanEmail = function(rawEmail){
   const smallCase = rawEmail.trim().toLowerCase()
   console.log(`correct email : ${smallCase}`)
}
cleanEmail("  PuRNishVerma53@GMAil.CoM   ") // correct email : purnishverma53@gmail.com
///////////////////////////////////////////////////////////////////////////////////////////
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// input : purnish_verma  , o/p : purnish verma
///////////////////////////////////////////////////////////////////////////////////////////
const vName = function(name){
   const clearName =name.toLowerCase().trim().split("_");
   const wordsContainer = []
   for( const n of clearName){
      // handle edge case
      if(n.trim() !==""){
    wordsContainer.push((n[0].toUpperCase() + n.slice(1)));
      }
   }
   const intermediateWord = wordsContainer.join("")
   const lowercaseFinal = intermediateWord.charAt(0).toLowerCase() + intermediateWord.slice(1);
   console.log(lowercaseFinal)
}
vName("delayed_departure"); // delayedDeparture
vName("First_name");  // firstName
vName("  Some_Variable ");  //someVariable
vName("calculate_AGE ") // calculateAge
vName("CLAD_FRage_age_v") // cladFrageAgeV
vName( "this___is__a__homework") //thisIsAHomework
