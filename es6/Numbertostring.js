// let number = 899798,
//     output;

//     output = String(number);


// let output;
// output = String(true);
//     console.log(output);
//     console.log(typeof output);


// var i = 0;
// for(var i =0 ;i<=10; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }

// const name = 'Murtay';
// const surname = 'Mohammadi';
// const age = 34;
// const myobj = {name,surname,age};
// console.log(myobj);




// //String interpolation

// let name ='Murta';
// let age =45;
//  let mytext= `my name ${name} and I am ${age}`;

//  console.log(mytext);

// //default parameter

//  function printDate(name ='Ali',  age =34){
//      console.log(`my name is ${name} and I am ${age}`)
//  }

//  printDate();


//  //Arrow function


//  let addNumber = (a,b)=>{console.log(a+b)}
// addNumber(2,3);//calling the arrow function
//arrow function is not only about the syntax, but it 

//about This keyword


// let user = { 
//     name: "GFG", 
//     gfg1:() => { 
//         console.log("hello " + this.name); // no 'this' binding here 
//     }, 
//     gfg2(){        
//         console.log("Welcome to " + this.name); // 'this' binding works here 
//     }   
//  }; 
// user.gfg1(); 
// user.gfg2(); 



// let output;
// output = String(true);

// //date to string
// output =new Date();
// output =String(output);
// //changing the array into string
// output = String([1,2,3,4,5]);

// //to string

// output =[1,2,3,4,5,6].toString();

// console.log(output);
// console.log(typeof output);

// let a =[1,2,3,4,5];
// console.log(a);

// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);

// //creating array of months

// const months = new Array("January","February","March","April","May");

// console.log(months);


// //Mixex values
// console.log('The array has different values');
// const mixedArray = ['Hello',10,true,'yes',null];
// console.log(mixedArray);
// console.log('checking the lenght of an array');
// console.log(mixedArray.length);
// //check if the array is an array

// console.log(Array.isArray(mixedArray));
// let name = 'Juan';
// console.log(Array.isArray(name));


// console.log('changing the value of an array');
// mixedArray[0] = 'World';

// console.log(mixedArray);

// //find something in array

// console.log(mixedArray.indexOf(10));


// const months = ['January','February','March','April'];
// //push add an array to the end of the array
// // months.push('July');
// // //let add an item at the beggining of the array
// // months.unshift('First month of the year');

// // //add an element at the middle of the array
// // months.splice(3,null,'Murtazas Birthday');

// // //removing element from the array
// // months.pop();
// // //remove element from the beginning

// // months.shift();
// // //remove element from the middle of the array
// // months.splice(3,1,'New Element');
// //reverse
// // months.reverse();
// //concatenat two arrays
// const array1 = [11,1,100,2,3,4],
//       array2 = [5,6,7,8];

// console.log(array1.concat(array2));
// // console.log(months);

// let fruits = ['Banana','Apple','Orange','Watermelon'];
// console.log(fruits.reverse());
// //order from lower to greater number
// array1.sort(function(number1,number2)

// {
//         return number1-number2;
// });
// //order from greater to lower number
// array1.sort(function(number1,number2)

// {
//         return number2-number1;
// });
// console.log(array1);


