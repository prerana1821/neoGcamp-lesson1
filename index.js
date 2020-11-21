// All the exercises of NEOGCAMP WEEK-1 are solved here.
// If you want to run each exercise, please uncomment that particular section and run the program.

// Ex-1
// console.log('Prerana Nawar');


//Ex-2
// var readlineSync = require('readline-sync');

// var username = readlineSync.question('Enter Your Name: ');
// console.log(username);


// Ex-3
// var username = readlineSync.question("What's your Name: ");
// console.log('Welcome ' + username);


// Ex-4
// var readlineSync = require('readline-sync');
// var username = readlineSync.question("What's your Name: ");
// console.log('Welcome ' + username);


//Ex-5
// var answer = readlineSync.question('Is you Age greater than 18? ')
// if(answer == 'yes'){
//   console.log('Right');
// }else{
//   console.log('Wrong');
// }


//Ex-6
// score = 0;
// var city = readlineSync.question("What's your City Name: "); 
// if(city == 'mumbai'){
//   score = score + 1;
//   console.log('Right');
// }else{
//   console.log('Wrong');
// }
// var answer = readlineSync.question('Is you Age greater than 18? ')
// if(answer == 'yes'){
//   console.log('Right');
//   score = score + 1;
// }else{
//   console.log('Wrong');
// }
// console.log('Your Score is ' + score);


// Ex-7
// function add(numOne,numTwo){
//   console.log('Number One: ' , numOne , ' Number Two: ' , numTwo)
//   var sum = numOne + numTwo;
//   return sum;
// }

// function prod(numberOne, numberTwo){
//   console.log('Number One is ' +numberOne+ 'Number Two is ' +numberTwo)
//   var prod = numberOne * numberTwo;
//   return prod;
// }

// var result = prod(2,3);
// console.log(result);

// console.log(add(2,3));
// var add = add(10,20);
// console.log(add);

// console.log('Addition of Two Numbers');
// var firstNum = readlineSync.question('Enter First Number: ');
// var secondNum = readlineSync.question('Enter Second Number: ');
// var result = add(parseInt(firstNum),parseInt(secondNum));
// console.log('Result is: ',result);

// Ex-8
// score = 0;
// function quiz(question,answer){
//   var userAnswer = readlineSync.question(question);
//   if(answer === userAnswer){
//     score= score+1;
//     console.log('You are Correct!');
//   }else{
//     console.log('You are Wrong!'); 
//   }
//   // return score;
//   // console.log('Your Score is: ' + score);
// }

// quiz("What's Prerana's Age? ",'17');
// quiz("What's Prerana's Homw Town? ",'Mumbai');
// quiz("What's Prerana's Favourite Color? ",'Black');
// console.log('Your Score is: ' + score);

// Ex-9
// for(var i = 0; i<5;i++){
//   console.log( i + ' Prerana Nawar');
// }

//Homework
// let sum = 0;
// for(var i=22; i <= 32; i = i + 1){
//   sum = sum + i;
//   console.log(sum + '+' + i);
//   console.log(i);
// }
// console.log(sum);


// Homework-Star Pattern
// var num = readlineSync.question('Enter Number of Stars: ');
// for(i=1;i<=num;i++) {
//   var str="";
//   for(j=1;j<=i;j++) {
//     str+="* ";
//   }
//   console.log(str);
// }


//Ex-10
// var grocceryList = ['Cake','Milk','Pen','Paper','Pencil'];
// console.log(grocceryList[0]);
// console.log(grocceryList[2]);
// console.log(grocceryList[4]);
// console.log(grocceryList.length);
// console.log(grocceryList[grocceryList.length - 1]);

// Ex-11
// var grocceryList = ['Cake','Milk','Pen','Paper','Pencil'];
// for(var i = 0;i<grocceryList.length;i++){
//   console.log(grocceryList[i]);
// }

// Ex-12
// var superman = {
//   name: "superman",
//   power: "flight",
//   costumeColor: "blue",
//   strength: 10000,
//   stealth: 0,
//   intelligence: 100,
// }


// var batman = {
//   name: "batman",
//   power: "martial arts",
//   costumeColor: "black",
//   strength: 100,
//   stealth: 100,
//   intelligence: 1000,
// }

// console.log(superman.strength);
// console.log(batman.strength);
// console.log(superman.stealth < batman.stealth)

// Homework
// var superHeros = [{
//   name: "superman",
//   power: "flight",
//   costumeColor: "blue",
//   strength: 10000,
//   stealth: 0,
//   intelligence: 100,
// },{
//   name: "batman",
//   power: "martial arts",
//   costumeColor: "black",
//   strength: 100,
//   stealth: 100,
//   intelligence: 1000,
// }];

// for(var i = 0; i< superHeros.length; i++){
//   console.log('Super Hero: ', superHeros[i].name,', Super Hero Costume Color: ',superHeros[i].costumeColor);
//   console.log("----------")
// }

// Exercise 13
// questionOne ={
//   question: "Capital of India? ",
//   answer: "New Delhi"
// }

// questionTwo ={
//   question: "India's national animal? ",
//   answer: "Tiger"
// }


// Ex-14
var readlineSync = require('readline-sync');
console.log("Welcome to the Quiz");
var username = readlineSync.question('Enter your Name: ');
console.log('Welcome,', username, 'Let\'s Start the Quiz!! ');

var score = 0;

function quiz(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log('You are Right!!');
        score = score + 1;
    } else {
        console.log('You are Wrong!!');
        score = score - 1;
    }

    console.log('Your Score is: ', score);
    console.log('----------------------------');
}

var questions = [
    { question: 'Where do Prerana live? ', answer: 'Mumbai' },
    { question: "What's Prerana's Age? ", answer: '17' },
    { question: "What's Prerana's Favourite Color? ", answer: 'Black' },
    { question: "What's Prerana's Favourite Food? ", answer: 'Vada Pav' }
];

for (var i = 0; i < questions.length; i++) {
    quiz(questions[i].question, questions[i].answer);
}

console.log('Your Final Score is: ', score);