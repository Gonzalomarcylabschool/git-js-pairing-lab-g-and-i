/*Hey Brandon and Izzy! Thanks for the submission! You both showed a solid understanding of the logic of these problems. I provided feedback on some of the code and main takeaways at the end.*/
//Code your solutions in this file
const fiveToOneHundred = () =>{
    for(i=5 ; i<=100 ; i++){//There should always be space between operators (i = 5; i <= 100; i++)
        console.log(i)
    }
}
//fiveToOneHundred()

//Problem #2
const multiplesOfThree = () => {
    for (i=1; i <= 100; i++) {
    if ( i % 3 === 0 ) {// this line should be indented
    console.log(i)  // this line should be indented
    }
}// make sure that your indentations match. 
}
//multiplesOfThree();
const multiplesOfThreeOrFive = () =>{
    for(i =1 ; i<=100 ; i++){
        if(i % 3 ===0 || i % 5 === 0 ){
            console.log(i)
         }
    }
}
//multiplesOfThreeOrFive();

//Problem 4
const untilNum = (num) => {
    for (i=1; i <= num; i++)
    console.log(i)
}
/*
untilNum(5);    prints out numbers 1 through 5
untilNum(9);    prints out numbers 1 through 9
untilNum(42);   prints out numbers 1 through 42
*/
//Question 5

const multiply = (num1,num2) =>{
return num1 * num2
}
//console.log(multiply(1,5))

//Question 6
const add = (integer1, integer2) => {
    let sum = integer1 + integer2
    
    if (integer1 === integer2) {
        return  sum * 3
    } else {
        return sum
    }
}
/*
console.log( add(2, 4));     returns 6
console.log( add(10, -5));   eturns 5
console.log( add(3, 7.5));   returns 10.5
console.log( add(5, 5));     returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
console.log( add(6, 6));     eturns 36 because the sum of 6 + 6 = 12 and 36 is triple that
*/
//question 7

const isNegative = (num) =>{
    if(num * -1 < 0){
        return false
    }else{
        return true
    }
}
/*when programming, we want to avoid writing more than we must. 
In this case, returning booleans is redundant. You can just return the expression in your conditional statement. 
That will return True or False. 
*/
/*
console.log(isNegative(3))
console.log(isNegative(-2))
console.log(isNegative(Math.PI))
*/
//Question 8
const triangleArea = (height, base) => {
    let area = (1/2) * height * base
    console.log(area)
}
//instruction asked to return a value, not console.log it.
/*
triangleArea(5, 7);    //returns 17.5
triangleArea(6, 8);    //returns 24
*/


//Question 9

const betweenTwentyAndFourty = (num) =>{
    if(num<40 && num>20 ){
        return true
    }else{
        return false
    }
}
//you can just return the expression in your conditional statement. 
/*
console.log(betweenTwentyAndFourty(4))     //return false
console.log(betweenTwentyAndFourty(21))     //return true
console.log(betweenTwentyAndFourty(99))     //return true
console.log(betweenTwentyAndFourty(101))   //return false
*/
//Question 10
const largest = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num3) {
        return num2
    } else {
        return num3
    }
}
// This one is not wrong, but I would like to push you to use the Math.max method.
/*
console.log( largest(4, 6, 8));      //returns 8
console.log( largest(30, 22, 17));    //returns 30
console.log( largest(41, 108, 86));    //returns 108
*/

//Brandon's bonus questions solutions 

//Question 11.)

const printTime = () =>{
   let today =  new Date();
    console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`)
}

//printTime()        //prints current time locally


//Question 12.)

const isLeapYear = (year) =>{
    if(year%4 != 0){
        return false
    }else if(year%100 != 0){
        return true
    }else if(year%400 != 0){
        return false
    }else{
        return true
    }
}
  
/*
console.log(isLeapYear(2000))    //returns true
console.log(isLeapYear(1900))    //returns false
console.log(isLeapYear(2020))    //returns true
console.log(isLeapYear(1999))    //returns false
*/


//Question 13.)

const getExtention = (fileName) =>{
   return fileName.slice(fileName.indexOf('.'));
}

/*
console.log(getExtention("hello.txt"))     //returns ".txt"
console.log(getExtention("app.js"))      //returns ".js"
console.log(getExtention("README.md"))    //returns ".md"
*/
 

//Question 14.)

<<<<<<< HEAD//left in some merge conflict code. 
const absoluteNineteen = (num) =>{
if(num > 19){
    return math.abs(3 *(num - 19))
}else{
    return math.abs(num - 19)
}
}
console.log(absoluteNineteen(5))
=======

 // Ismael's Bonus Question
//11

const printTime = () => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}
console.log(printTime());

console.log('--------')

// 12
const isLeapYear = (year) => {
    return (year % 4 === 0  && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2000)); //returns true
console.log( isLeapYear(1900));    //returns false
console.log( isLeapYear(2020));    //returns true
console.log( isLeapYear(1999));    //returns false

console.log('------')
// 13

const getExtention = (fileName) => {
    return fileName.slice(fileName.indexOf('.'))
}
console.log( getExtention("hello.txt"));     //returns ".txt"
console.log( getExtention("app.js"));        //returns ".js"
console.log( getExtention("README.md"));    //returns ".md"


/*
Hey Friends, I want to point out triangleArea first. This is the only one that needs to be corrected. It was for a small thing, but I would like you to fix it and resubmit it. 
As for everything else, the code was good. I gave you some feedback on how you could elevate some of your code to the next level. 
The main concern I have here is Code cleanliness. There needs to be consistency with semicolons, indentations, and spaces in your code. 
It's not bad, but it's not good. 
Besides that, You have a solid understanding of the problems and how to solve them. Keep up the good work. 
*/

// 14 
>>>>>>> 6a6ffbee5d301bc1fa89af8e3ca21aa740d7de3d
