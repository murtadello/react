// let name;
// name = 'Murtaza';
// console.log(name);
// let message = 'Then I said: hey!! that\'s nice';



// let learning = 'Javascript', modern = 'Modern';
// console.log('Learning ' + modern + learning);


// let payam = 'Modern' + ' '+ 'Javascript';

// console.log(payam);
//Concatenating with String
let band = 'Metalica',
    song = 'Enter Sandman';
let playing;


playing = 'Playing ' + song + 'by ' + band;

console.log(playing);


let learning;

learning = 'Modern ';
learning += 'Javascript ';
learning += 'at udemy ';

console.log(learning);


const learning2 = 'Learning Javascript is Great';
//length of string
let output;
output = learning2.length;

output = learning2.concat(" ","and fun");
console.log(output);


output= learning2.toUpperCase();

console.log(output);

output = learning.toLocaleLowerCase();

console.log(output);


output = learning.indexOf('Javascript');
console.log(output);

const email = 'murtaza@gmail.com';

output = email.indexOf('@');
if(output>0){
    console.log('Valid Email');

}
else{
    console.log('Invalid email');
}
output = learning.substring(0,5);

console.log(output);


output = learning.substring(learning2.length-7);

console.log(output);


//replace function
output = learning2.replace('Javascript', 'Modern JS');


console.log(output);

//include


output = learning2.includes('JS');

console.log(output);

let great = learning2.includes('PHP');

console.log(great);














