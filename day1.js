//1. Variable Declaration & Reassignment

var firstName = "Martin"; 
//cause an error: Identifier 'firstName' has already been declared
//Redeclared a variable with var is allowed, but not recommended
console.log(firstName); 

//Reassigning variables
firstName = "Yves"; 
console.log(firstName); 

var lastName = "Abankwah"; 
//cause an error: Identifier 'lastName' has already been declared   
console.log(lastName); 

//Reassigning variables
lastName = "Syre"; 
console.log(lastName);   

const PI_VALUE = 3.14; //cause an error: Identifier 'PI_VALUE' has already been declared 
console.log(PI_VALUE); 

//Reassigning a constant variable will cause an error
//PI_VALUE = 3.14159; //Uncommenting this line will cause an error: Assignment to constant variable
//Reassigning a constant variable
//const PI_VALUE = 3.14159; //Uncommenting this line will cause 
//an error: Identifier 'PI_VALUE' has already been declared
//Reassigning a constant variable is not allowed



//2. String Manipulation
//Using string methods to manipulate strings    
let myString = "Hello JavaScript World!"; 
console.log(myString.length);  
   

myString = myString.toUpperCase();
console.log(myString); 

myString = myString.toLowerCase();
console.log(myString);

myString = myString.replace("JavaScript", "JS");
console.log(myString);   

myString = myString.trim();
console.log(myString); 

//ARRAY OPERATIONS 
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

fruits.push("grape"); 
console.log(fruits); 

fruits.pop();  
console.log(fruits); 

//Adding an element to the beginning of the array
fruits.unshift("strawberry"); 
console.log(fruits); 
fruits.shift(); 
console.log(fruits); 

//3. Object Manipulation
//Creating an object and manipulating its properties    
let book = {
    title: "JavaScript Essentials",
    author: "Jane Doe",
    pages: 250
};

// Log the title of the book
console.log("Title:", book.title);  

// Update the pages property to a new value
book.pages = 300; 

// Add a new property isAvailable (boolean)
book.isAvailable = true; 
console.log("Updated Book Object:", book); 

// Log the title of the book
console.log("Title:", book.title);

// Update the pages property to a new value
book.pages = 300;

// Add a new property isAvailable (boolean)
book.isAvailable = true;

// Log the entire book object after all modifications
console.log("Updated Book Object:", book);

//ARITHMETIC OPERATIONS
let num1 = 15;
let num2 = 4;
let sum = num1 + num2; 
let difference = num1 - num2; 
let product = num1 * num2; 
let quotient = num1 / num2; 
let remainder = num1 % num2; 
let exponentiation = num1 ** num2; 
console.log("Sum:", sum); 
console.log("Difference:", difference); 

//COMPARISON OPERATORS
console.log(10 == "10"); 
console.log(10 === "10"); 
console.log(10 != "10"); 
console.log(10 !== "10"); 
console.log(7 > 5);      
console.log(8 <= 8);     
console.log(5 != 3);     
console.log("apple" != "orange"); 

//Logical Operators
console.log(true && false); 
console.log(true || false); 
console.log(!true); 

//Bitwise Operators
console.log(5 & 3);    

