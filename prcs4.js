//In this session we study about "inquirer" library
import inquirer from 'inquirer'; //This statement is mandatory to use inquirer library
const answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'yourName',
        message: 'What is your name?'
    }
]);
console.log(`Your name is ${answer.yourName}`);
//Now same example on number
const answer2 = await inquirer.prompt([
    {
        type: 'number',
        name: 'yourAge',
        message: 'What is your Age?'
    }
]);
console.log(`Your age is ${answer2.yourAge}`);
//Now multiplication of two numbers
const answer3 = await inquirer.prompt([
    {
        type: 'number',
        name: 'number1',
        message: 'Enter 1st number?'
    },
    {
        type: 'number',
        name: 'number2',
        message: 'Enter 2nd number?'
    }
]);
let num1 = answer3.number1;
let num2 = answer3.number2;
console.log(`The product of your number is ${num1 * num2}`);
