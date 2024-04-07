"use strict";
// Q _ 1: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello,world";
console.log(greeting);
// Q _ 2:Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 10;
let num2 = 2;
console.log("sum: ", num1 + num2);
console.log("difference: ", num1 - num2);
console.log("product: ", num1 * num2);
console.log("qoutient: ", num1 / num2);
// Q _ 3:Swap the values of two variables without using a third variable
//swaping value with out using third value
[num1, num2] = [num1, num2];
//After swaping
console.log("after swaping , num1 is: ", num1);
console.log("after swaping , num2 is: ", num2);
// Q _ 4:This applies to TypeScript. Create a string variable and try changing its type.
let values;
values = "maryam";
let values2;
values2 = 23;
console.log("Type:", typeof values, ", Value:", values, ", Type:", typeof values2, ", Value:", values2);
//Q _ 5:Use the modulus operator to find the remainder of two numbers.
let reminder = num1 % num2;
console.log("the reminder of ", num1, "divided by", num2, "is", reminder);
//Q _ 6:Increment a variable's value by 1 using two different methods.
//Mothod 1 using = +=
num1 += 1;
console.log("Method 1 - increment value: ", num1);
//Method 2 using = ++
num2++;
console.log("method 2 - increment value: ", num2);
//Q _7: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a = true, b = false, c = true;
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);
//AND gates
console.log("AND gates Result: ", a && b && c);
//OR gates
console.log("OR gates Result: ", a || b || c);
//NOT gate
console.log("NOT gates Result: ", !c);
//Q _8: Show examples of using compound assignment operators.
//let num = 10; // Use +=, -=, *=, and /= on this variable.
let num3 = 10;
console.log("+=: ", (num3 += 3), "-=: ", (num3 -= 4), "*=: ", (num3 *= 3), "/=:", (num3 /= 2), "%=:", (num3 %= 2), "**=:", (num3 **= 2));
//Q _9:Write a program to check if a number is even or odd.
//let num; // Determine if this is even or odd.
let num4 = 6;
let result = num4 % 2;
if (result == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
//Q _10:Check if a person is eligible to vote.
//let age; // Check if age is 18 or older to determine voting eligibility.
let age = 18;
if (age >= 18) {
    console.log("You are eligibile to vote ");
}
else {
    console.log("You are not eligible to vote yet");
}
//Q _11:Assign a grade based on a numerical score.
//let score; // Use conditionals to assign and print grades A, B, C, D, or F.
let score = 82;
if (score >= 90) {
    console.log("Grade:A");
}
else if (score >= 80) {
    console.log("Grade:B");
}
else if (score >= 70) {
    console.log("Grade:C");
}
else if (score >= 60) {
    console.log("Grade:D");
}
else {
    console.log("Grade:F");
}
// Q _12:Find the maximum of three numbers.
//let x, y, z; // Determine the largest among these.
let xx = 30;
let yy = 24;
let zz = 19;
let max;
if (xx >= yy && xx >= zz) {
    max = xx;
}
else if (yy >= xx && yy >= zz) {
    max = yy;
}
else {
    max = zz;
}
console.log("the maximum of", xx + ",", yy + "and", zz + "is:", max);
//Q _13:Check if a given year is a leap year.
//let year; // Determine if this is a leap year.
let year = 2024;
let isLeapYear = false;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    //The logical OR operator (||) between these two conditions means that if either of them is true, the overall result is true, indicating that the year is a leap year. This approach accounts for the additional rule that years divisible by 400 are leap years, even though they are divisible by 100.
    console.log(year + "is a leap year");
}
else {
    console.log(year + "is not a leap year");
}
// Q _14:Fahrenheit to Celsius Converter
//Write a program that converts temperature from Fahrenheit to Celsius.
//let fahrenheit; // Convert this to Celsius and print the result.
//We first assign the temperature in Fahrenheit to the fahrenheit variable.Celsius := (Fahrenheit - 32) * 5/9
//We first assign the temperature in Fahrenheit to the fahrenheit variable.
//Then, we use the formula to convert Fahrenheit to Celsius.
//Finally, we print the converted temperature in Celsius. The toFixed(2) method is used to round the result to two decimal places.
let fahrenheit = 21;
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + "degree fahrenheit is equal to" + celsius.toFixed(2) + "degree celsius.");
// Q _15:Positive, Negative, or Zero
//: Check if a number is positive, negative, or zero.
//let number; // Determine the sign of this number
//use conditional statements in 
let number = 0;
if (number > 0) {
    console.log("tha number is positve");
}
else if (number < 0) {
    console.log("thae number is nagitive");
}
else {
    console.log("the number is zero");
}
//Q _16: Write a program that prints the multiplication table of a given number up to 10.
//let number; // Print the multiplication table for this number up to 10.
let Table = 5;
console.log("5*1 = ", 5 * 1);
console.log("5*2 = ", 5 * 2);
console.log("5*3 = ", 5 * 3);
console.log("5*4 = ", 5 * 4);
console.log("5*5 = ", 5 * 5);
console.log("5*6 = ", 5 * 6);
console.log("5*7 = ", 5 * 7);
console.log("5*8 = ", 5 * 8);
console.log("5*9 = ", 5 * 9);
console.log("5*10 = ", 5 * 10);
