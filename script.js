// JAVASCRIPT CHAPTER 3 LECTURE BY APNA COLLLEGE 

//.................................................................................

//loops in java
//for loop 

// let i;
// for(i = 1 ; i <= 5 ; i++){
//     console.log("APNA COLLEGE");
// }

// let sum = 0; 
// for (let i = 1 ; i <=5 ; i++){
//     sum = sum + i; // sum = 1 
    
// }
// console.log("sum = ", sum);
// console.log("loop has ended");

// let sum = 0;
// let n = 46784;
// for (i = 1 ; i <= n ; i++){
//     sum = sum + i
// }
// console.log("sum", sum);

//...........................................................................

//WHILE LOOP 

// let i = 1;
// while(i <= 5){
//     console.log("APNA COLLEGE");
//     i++;
// }
 
//......................................

//do-while LOOP 

// let i = 1;
// do{
//     console.log("APNA COLLEGE");
//     i++;
// } while(i <= 5);

//.......................................

//for-of LOOP
//Q.1

// let str = "apna college";

// for(let i of str){
//     console.log("i = ", i );
// }

//Q.2

// let str = "JAVASCRIPT";
// let size = 0;
// for(let i of str){
//     console.log("i = ", i);
//     size++;
// }
// console.log("size of string character = " , size);

//........................................................................................

// for-in loop 

// let student = {
//     fullName : "w gupta",
//     course   : "BCA",
//     rollCode : 47,
// }
// for(let key in  student){
//    console.log("key = ", key ,  "value = ",  student [key]);
// }

//...........................................................................................

//Q.print all even no. from 0 to 100. 
 
// for (let num = 1; num <= 100 ; num++){
//     if(num %2 == 0){
//         console.log(num , " is even number");
//  }
// }

//............................................................................................

//Q. create a game where you start with any random game number.ask to user to keep 
//   guessing the number until teh user enters correct value. 


// let gameNum = 25;

// let userNum  = prompt("guess the game number : ");

// while(userNum != gameNum){
//     let userNum = prompt("you are entered wrong guess number, try again ");
// }
// console.log("congratulations you are enter the right numbaer = " , gameNum);


// CHATGPT... CHATGPT... CHATGPT...CHATGPT...CHATGPT...CHATGPT...CHATGPT.........................

// function guessingGame() {
//     const numberToGuess = Math.floor(Math.random() * 10) + 1;
//     let guess = null;
//     let attempts = 0;

//     alert("Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 10.");

//     while (guess !== numberToGuess) {
//         guess = parseInt(prompt("Enter your guess:"), 10);
//         attempts++;

//         if (isNaN(guess)) {
//             alert("Invalid input! Please enter a valid number.");
//             continue;
//         }

//         if (guess < numberToGuess) {
//             alert("Too low! Try again.");
//         } else if (guess > numberToGuess) {
//             alert("Too high! Try again.");
//         } else {
//             alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
//         }
//     }
// }

// guessingGame();

//...............................................................................................




