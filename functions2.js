
// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

// maxOfTwoNumbers = (num1, num2) => {
//     //return max;
//     if (num1 > num2) {
//         console.log(num1);
//      }else {
//         console.log(num2);
//     }
// }
// maxOfTwoNumbers(10, 20);


// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// maxOfThree=(num1, num2, num3) => {
//     let max= Math.max(num1, num2, num3);
//     return max;
//     //console.log(max);
// }
// console.log(maxOfThree(10,20,30));

// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// isCharacterAVowel = (letter) => {
//  let vowels = ["a", "e", "i", "o", "u"];
//     for(var i = 0; i < vowels.length; i++){ 
//         if(letter === vowels[i]){
//             return true;
//          }
//     }
//     return false;
// }
// console.log(isCharacterAVowel("s"));

// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// sumArray=(array) => {
// let sum = 0;
// for (i=0; i< array.length; i ++){
// sum += array[i] 
// }
// console.log(sum);
// return sum;
// }
//  console.log(sumArray([1,2,3,4]));
// multiplyArray=(array) =>{
//     let total = 1;
//     for(i=0; i< array.length; i++){
//         total *= array[i];

//     }
//     return total;

// }
// console.log(multiplyArray([1,2,3,4]));

// 5.Write a function that returns the number of arguments passed to the function when called.

// function returnArguments(a, b, c) {
//     console.log(arguments.length);
//   }
// returnArguments(1, 2, 3, 4, 5);

// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

// function reverseString(str) { 
//     return str.split("").reverse().join("");
// }
// // console.log(reverseString("hello"));
// console.log(reverseString("jag testar"));

// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// function findLongestWord(str) {
//     let strSplit = str.split(' ');
//     let longestWord = 0;
//     for(let i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// function filterLongWords(arr, n){
//     let newWords=[];
//     for(let i=0; i< arr.length; i++){
//         if(arr[i].length>n){
//             newWords.push(arr[i]);
//         }
//     }
//     return newWords;
// };
// let words = ["first", "second", "third", "fourth", "Twelve"]    
// console.log(filterLongWords(words, 5));
