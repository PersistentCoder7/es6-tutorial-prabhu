//const a = 5;
//a=5-5; //Reassignment is not allowed.

//This kind of update to the object is allowed but the object cannot be reassigned.
// const array = [1,2,3];
// array.push(4);
// console.log(array);

//This is not allowed.
//array=]1];

// var a = 'hello';
// var b = 'world';
// var c = a + ' '+b;
// console.log(c);
// let d = `hello ${b}`;
// console.log(d);
// let e = `${a} world`;
// console.log(e);

//Array spread operator and De-Structuring

// let a = [7,8,9];
// let b = [6, ...a, 10];
// console.log(b);

//Sending and array values to individual args
// function print(a,b,c){
//     console.log(a,b,c);
// }

// let z = [1,2,3];
// print(...z);

//Send individual args and bundling it into an array

// function print(...z){
//     console.log(z);
// }

// print(1,3,4);

//Array Destruturing
// let c = [100, 200];
// // let a = c[0];
// // let b = c[1];
// //Rewritten using destructuring
// let [a,b]=c;
// console.log(a,b);

// let fellowship = ["Frodo","Gandalf", "Aragorn"];
// let [hobbit,wizard,ranger] = fellowship;
// console.log(hobbit, wizard,ranger);

//Split the array values into different variables.
// let c = [100,200,300,400,500];
// let [a, ...b]=c;
// console.log(a,b);

//Destructuring Objects
// let wizard = { magical: true, power: 10};
// // let magical = wizard.magical;
// // let power = wizard.power;
// //Alternative way to project it
// let {magical, power}=wizard;
// console.log(magical,power);

// //Trick using Destructuring
// let magical = true;
// let power = 2;

// let ranger = {magical: false, power:9};
// //If the variables are already defined use the parenthesis during assignment.
// ({magical, power} = ranger);

// console.log(magical,power);

//Arrow Functions

// function blastoff(){
//     console.log('3..2....1...blastoff');
// }
// blastoff();

//Try an anonymous function using the setTimeout
//setTimeout(function(){ console.log('3....2....1..blastoff'); }, 1000);

//Rewrite using arrow function
//setTimeout(()=>{ console.log('3....2....1..blastoff'); }, 1000);

// const blastoff = ()=>{
//     console.log('3...2...1..blastoff');
// }
// blastoff();

//Arrow functions do not bind their own this they use the global this.

// let points= [10,20,30];
// let np =points.map(x=> x+1);
// console.log(np);


//Filter
let grades = [60,70,80,90];
console.log(grades.filter(x=> x>=80));