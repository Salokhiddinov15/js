"use strict";

// alert("hello");

// const place = confirm("Are you here");
// console.log(typeof place);

// const currentPlace = prompt("Where are you", "jon")
// console.log(currentPlace);

// const age = +prompt("How old are you", "18");
// console.log(age + 10);

// const favouriteColor = []

// favouriteColor[0] = prompt("What's your favourite color #1", "");
// favouriteColor[1] = prompt("What's your favourite color #2", "");
// favouriteColor[2] = prompt("What's your favourite color #3", "");

// console.log(typeof favouriteColor);

// let person = {
//   name: 'Oga',
//   age: 21,
//   isMarried: 'false'
// }

// console.log(person);

//Array

// let arr=['Phone', 'Mouse', 'Soap']

// arr[0] = 'notebook';

// console.log(arr);

// console.log(arr[0]);

// let a = 10;
// let b = 10;

// console.log(a === b);

// console.log('10' === b);

// let alt = alert('Hello World')

// let con = confirm('Yoshingiz 21 dami')

// let answers = prompt('what is your name?')

// console.log(answers);



// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }



// let i = 0;
// do {
//   console.log(i);
//   i++
// } while(i < 10);



// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i ++
// }

// let answers = [];

// let questions = [
//   'What is your name',
//   'What is your phone',
//   'How old are your'
// ];

// for (let i = 0; i < questions.length; i++){
//   answers[i] = prompt(questions[i])
// }

// console.log(answers);

// let i = 0;

// do{
//   answers[i] = prompt(questions[i])
//   console.log(answers);
//   i++
// }while (i < questions.length)

// let i = 0;
// while (i < questions.length) {
//   answers[i] = prompt(questions[i]);
//   console.log(answers);
//   i++
// }

let age = prompt('How old are your');

if(age < 18){
  alert('Hali vohli')
} else if(age > 80){
  alert('Uje kech')
} else{
  alert('Xush kelibsiz')
}