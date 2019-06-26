// Literal 

var myBooks = ["book1", "book2", "book3"];

// var box = {
//     width : 4,
//     height : 6,
//     books : myBooks,
//     addBook : function(book){
//         this.books.push(book);
//     },
//     address : {
//         city : "Mumbai",
//         street : "201, Main Road"
//     }
// }

// box.volume = box.width * box.height;

// // box.books.push("book4");
// // box.addBook("Book4");

// // console.log(box.books.length);      //4
// // console.log(myBooks.length);      //? 

// console.log(delete box.xyz);
// console.log(box);



// Constructor
//ES6+
// class Student extends {
//     constructor(){}
//     sayHello(){console.log("Hello")}
// }
// let f = new Student();
// f.sayHello();


//ES5
// function Person(fname, lname){
//     // var this = {};
//     this.fname = fname;
//     this.lname = lname;
//     this.getFullName = function(){
//         return this.fname +" " + this.lname;
//     }
//     // return this;
// }

// Person.prototype.sayHello = function(){
//     return "Hello " + this.fname;
// }

// console.log(Person.name);

// var foo = new Person("Foo", "Bar");
// console.log(foo)
// console.log(foo.sayHello());

// var bam = new Person("Bam", "Baz");
// console.log(bam.getFullName())
// console.log(bam.sayHello());


//Extend the existing String functionality
// var str = "Some String";
// var str1 = new String("Some String");

// String.prototype.countLetter = function (letter) {
//     var counter = 0;
//     for (var i = 0; i < this.length ; i++) {
//         if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
//             counter++;
//          }
//     }
//     return counter;
// }

// console.log(str.countLetter('s'));       
// console.log(str1.countLetter('i'));       













// console.log(str.length);          //?

// Object (constructor, isPrototypeOf(), hasOwnProperty(), valueOf(), toString())
//     String (length, toUppercase, toLowercase, charAt(), indexOf())
//         str.length
//         str.constructor
//     Function (name, bind(), call(), apply())
//     Number (isFixed(), Number())
//     Date ()
//     Array ()
//     Person (fname, lname, getFullName)
//             - foo.fname
//     Boolean (isBoolean())



// Instance Method

var Shoe = {
    size : 10,
    gender : "Women"
}

var magicShoe = Object.create(Shoe);

magicShoe.size = 12;

console.log(magicShoe.size);            // 12

console.log(magicShoe);            // { size : 12 }

console.log(magicShoe.isPrototypeOf(Shoe));
console.log(Shoe.isPrototypeOf(magicShoe));
console.log(magicShoe.hasOwnProperty('size'));
console.log(magicShoe.hasOwnProperty('gender'));
console.log(Object.prototype.isPrototypeOf(Shoe));
console.log(Object.prototype.isPrototypeOf(magicShoe));





