// Assignment Function
// Question 1 : Write a javascript function that accepts a string as a parameter and counts the number of vowels within the string
// function countVowels(str:any){
//     str = str.toLowerCase();
//     // Define an Array of vowels
//     const vowels = ["a","e","i","o","u"];
//     // Initialize a variable to store the count of vowels
//     let vowelCount = 0;
//     // Loop through each character in the string
//     for(let char of str){
//         if(vowels.includes(char)){
//             vowelCount++;
//         }
//     }
//     // Return the total count of vowels found in the string
//     return vowelCount;
// }
// const inputString = "Learning Typescript";
// console.log("Number of vowels:", countVowels(inputString));
// Qustion 2 : Write a Javascript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
// function isPrime(num:number,divisor:number=2):boolean{
//     if(num<=2){
//         return(num === 2);
//     }
//     // boolean condition
//     // false
//     if(num % divisor === 0){
//         return false;
//     }
//     // true
//     if(divisor * divisor > num){
//         return true;
//     }
//     // recursive condition
//     return isPrime(num,divisor+1);
// }
//     const number : number = 4;
//     console.log(`${number} is prime:`, isPrime(number));
// Question 3 : Write a Javascript function to find the first not repeated character.
// function findFirstNotRepeatedChar(str:any){
//     for(let char of str){
//         if(str.indexOf(char) === str.lastIndexOf(char)){
//             return char;
//         }
//     }
//     return null;
// }
// console.log(findFirstNotRepeatedChar("javascript"));
// Question 4 : Write a function that returns the square of a number.
// function square(number:number):number{
//     return number * number;
// }
// const num:number = 8
// const result:number = square(num)
// console.log(`The Square of ${num} is ${result}`);
// Question 5 : Function `displayMessage()` print "Hello World" string using console.log function.
function displayMessage() {
    console.log("Hello World");
}
// calling function
displayMessage();
export {};
