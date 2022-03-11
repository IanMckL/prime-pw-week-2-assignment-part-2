// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//  variable 'name' is defined as the string 'Dane'
//  if else statement checks if the variable name is Mary via a strict equality operator. This means that the type, length, and caps must also match to be evaluated as true
//  if the statement is evaluated as true, it will log 'Hi, Mary!' in the console. If not, the else determines that the console witll log 'How do you do?'?
// output should be "how do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// 'let secret' creates the variable secret but does not define it. 
// 'let code = 123;' defines code as the number 123
// an if statement says if the code is equal to 123, the variable 'secret' will be defined as 'super', and code will be redefines as code multiplied by 2.
// a separate if statement evaluates if code is > 250. If it redefines 'secret' as 'duper'
// the console will log the variable secret. In this case, (123*2)<250, so it should print 'super'. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//  the variable isStudent is defined as the boolean true. age is defined as the number 34. Zip is defined as the number 55407. 
// if evaluates whether isStudent is defined as true AND zip has a value of over 80000. If this is true(it is not), the console logs 'You're a stuedent om the west coast'.
// the if statement then moves on to check the next statement if the first returns as false. The else if evaluates if isStudent is false OR age is <30. If it returns as true, the console log prints 'What are your hobbies?'.
// if not true, it moves onto the next else if, which evaluates if isStudent and ONLY isStudent is true. If true, the console logs 'Welcome to prime!'
// if none of the above return true, the else has the console log prints 'How is the weather?'.  In this case it should print "Welcome to prime"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//fix  if (mix === true) {
//fix  colorOne = 'purple'
//fix  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
let time = 4;

//fix if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

fix // if(minAge > age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

