

// Function Syntax
// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2));

//function expressions

// var addition = function (a, b) {
//     return a + b;
// }

// console.log(addition(1,99));          //?


// function mystery(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// var nestedFunc = mystery();

// console.log(nestedFunc());      //


// block scope : 'let' & 'const'

// function demo(arr){
//     if(arr.length > 2){
//         let load = "LOADING";
//         console.log(flash);         //?
//     }else{
//         let flash = "FLASH"
//     }
// }

// demo([1,2,3,4])


// function b(){
//     console.log(myVar);         //?
// }
// function a(){
//     var myVar = 101;
//     b();
// }

// var myVar = 100;
// a();


// IIFE


// var x = 101;

// (function(){
//     var x = 201;
//     x++;
//     console.log("IIFE Called.", x);
// }());

// console.log(x);     //?


// console.log("IIFE Called.");


//Closure

// function testClosure(){
//     let x = 4;
//     return function(){
//         return ++x;
//     }
// }

// var nestedFunc = testClosure();
// console.log(nestedFunc());      //4
// console.log(nestedFunc());      //?
// console.log(nestedFunc());      //?



// function buildTicket(transport){
//     var numOfPass = 0;

//     return function(name){
//         return "Hello, " + name + "! \nYour Ticket ID#" + (++numOfPass) + 
//             "\nYou are going via " + transport;
//     }
// }

// var ship = buildTicket("Ship");

// console.log(ship("Foo"));
// console.log(ship("Bar"));

// var air = buildTicket("Air");
// console.log(air("Bam"));


// HOF / Callbacks

// setTimeout(()=>{
//     console.log("2 senconds left.")
// }, 2000);


// function delayed(cb, ms){
//     if(ms > 1000){
//         cb(null, "More than 1000")
//     }else{
//         cb(new Error("Less than 1000"))
//     }
// }

// delayed(function(err, str){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(str)
//     }
// }, 900)

// var start = Date.now();
// function mySetTimeout(cb, ms){
//     while((Date.now() - start) < ms){
//     }
//     cb();

// }

// mySetTimeout(()=>{
//     console.log("2 Seconds left!")
// }, 2000);


// 'this'
// var firstName = "Global F Name"
// global.lastName = "Global L Name"

// var person = {
//     firstName: "Foo",
//     lastName: "Bar",
//     sayHello: function () {
//         var that = this;
//         function nestedFunc() {
//             // console.log(this);          // global object
//             return "Hello " + this.firstName + " " + this.lastName
//         }
//         return nestedFunc();
//     }
// }

// console.log(person.sayHello());     //  Hello Foo Bar

// var person = {
//     fname : "Foo",
//     lname : "Bar",
//     fullName : function(){
//         let nestedFunc = () => {
//             return this.fname + " " + this.lname
//         }

//         return nestedFunc();
//     }
// }

// console.log(person.fullName());