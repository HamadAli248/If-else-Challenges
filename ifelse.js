//  if/eles  
// Challenge 1:
// Create a variable called password.
// Check how many letters are in the password, 
// if there are less than 8 log to the console that the password is too short. Otherwise log the password to the console.
// -----------------------------------------------------------------------------------------------------------------

let password = "hfhduhfif"
if (password.length < 8){
  console.log("password too short")
}
else{
  console.log("password accepted")
}
// --------------------------------------------------------------------------------------------------------------------

// Challenge 2:
// Create a variable called num.
// Check if the variable is divisible by 3 or 5.
// If it is log “This number is divisible by 3 or 5” to the console. 
// Otherwise log “This number is not divisible by 3 or 5”.
// -----------------------------------------------------------------------------------------------------------------

let num = 10
if (num % 3 == 0 || num % 5==0 ){
  console.log("This number is divisible by 3 or 5")
}
else {
  console.log("This number is not divisible by 3 or 5")
}
//---------------------------------------------------------------------------------------------------------------

// Challenge 3:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console,
//  if it’s divisible by 5 log “buzz” to the console,
//   if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.
// ----------------------------------------------------------------------------------------------------------------
let num = 5
if ( num % 3 == 0 && num % 5 == 0 ){
  console.log("fizz buzz")
}
else if( num % 3 == 0){
  console.log("fizz")
}
else if( num % 5 == 0){
  console.log("buzz")
}
// -------------------------------------------------------------------------------------------------------------------
// Challenge 4:
// Create a variable called num. Check if the number is a palindrome
//  (looks the same forward as it does backwards e.g. 1001 or 20202).
// -------------------------------------------------------------------------------------------------------------------
let num = 122123546567
if (num==num.toString().split("").reverse().join("")){
  console.log("pallindrome")
}
else{
  console.log("not a pallindrome")
}

// ---------------------------------------------------------------------------------------------------------------------
// Challenge 5:
// Create a variable called time, a variable called placeOfWork and a variable called townOfHome.Create an 
// if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, 
// at 8 I’m commuting, at 9 I’m at work.
// -------------------------------------------------------------------------------------------------------------------
let timeofDay = 0810
let placeofWork = "codenation"
let placeofHome = "lornestreet"
if (timeofDay <=0800){
  console.log(placeofHome)
}
else if (timeofDay<=0900){
  console.log("I’m commuting")
}
else if ( timeofDay<=1700){
  console.log(placeofWork)
} 
// -------------------------------------------------------------------------------------------------------------------
// Challenge 6:
// Take the string
//   “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
// Find the index of the last vowel in the string.
// -------------------------------------------------------------------------------------------------------------------

let longString="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let reversedLongString= longString.split("").reverse().join("");
var lastVowelIndex = 0
var numberofVowel = 0

for(i = 0; i < reversedLongString.length; i++) 
  if ( reversedLongString[i]=="a" || reversedLongString[i]=="e" ||
  reversedLongString[i]=="i" || reversedLongString[i]=="o"||
  reversedLongString[i]=="u" )

{
let numberofVowel= i
lastVowelIndex = longString.length - numberofVowel
  console.log(lastVowelIndex)
  console.log(longString.length)
  break;
}

// ------------------------------------------------------------------------------------------------------------------
// Challenge 7:
// Create a variable called word that takes a string.Create an if statement that checks if the last
// letter is the same as the first. If it is return true, otherwise return false.
// -----------------------------------------------------------------------------------------------------------------
let word = "heJIh";
let altereWord = word.toLowerCase()
if(altereWord[0] == altereWord[altereWord.length-1]) {
  console.log("true")
}
else{
  console.log("false")
 }
// -------------------------------------------------------------------------------------------------------------------

// Challenge 8:
// Create two variables called num1 and num2.Create an if statement that checks
// if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.
// ------------------------------------------------------------------------------------------------------------------

let num1=3
let num2=4
//console.log("addition result" + (num1+num2))
if((num1+num2) % 2 == 0){
  console.log(num1+num2)
}
else{
  console.log(num1 * num2)
}

// --------------------------------------------------------------------------------------------------------------------
// Challenge 9:
// Let's go back to our naughts and crosses board. Write an if statement that
// checks if the items on the top row meet a winning condition. So the top row are all ‘o’s or all ‘x’s.
// -------------------------------------------------------------------------------------------------------------------

let space1="x"
let space2="x"
let space3="x"
let space4="x"
let space5="x"
let space6="0"
let space7=" "
let space8=" "
let space9=" "

console.log("  |    |  ")
console.log(`${space1} |${space2}   |${space3} `)
console.log("  |    |  ")
console.log(" ---------  ")
console.log("  |    |  ")
console.log(`${space4} |${space5}   |${space6} `)
console.log("  |    |  ")
console.log(" ---------  ")
console.log("  |    |  ")
console.log(`${space7} |${space8}   |${space9}  `)
console.log("  |    |  ")
if(space1== "x" && space2 == "x" && space3=="x"){
console.log("x wins")
}
else if (space1=="o" && space2=="o" && space3=="o"){
    console.log("o wins")
}

