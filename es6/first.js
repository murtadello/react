
//var a = 'test';
//let b = 'test2';
/*
function testVar(){
    var a=34;
    if(true){
        var a=45;
        console.log(a);
    }
    console.log(a);
}


function testlet(){
    
    let a=45;
    if(true){
        let a=54;
        console.log(a);
    }
    console.log(a);
}


for (let i =0; i<10;i++){
    console.log(i);
}

testlet();
*/

/*
const colors=[];

colors.push('red');
colors.push('blue');
console.log(colors);

*/
/*

class difniatioon and iheritence in es6
class User{
    constructor(username, email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    static countUser(){
        console.log('There are 50 Users');
    }
    register(){
        console.log(this.username + 'is now registered');
        console.log(this.email);
        console.log(this.password);

    }
}
//let bob=new User('Murtaza','bob@gmail.com','12344');
//bob.register();


class Member extends User{
    constructor(username, email,password, memberPackage){
        super(username, email,password);
        this.package=memberPackage;

    }
    getPackage(){
        console.log(this.username + ' is subscribed the' + this.package +'Package');
    }
}

let mike=new Member('mike','mike@gmail.com','342423432','Standard');

mike.getPackage();

*/
/*

 litrals
function makeUpperCase(word){
    return word.toUpperCase();
}


let name='john';
let template =
`<h1>${makeUpperCase('Hello')}, ${name}</h1>
<p>This is a simple paragraph</p>`;

document.getElementById('template').innerHTML=template;
*/
//String and Number Methode
//let theString= 'Hello, my name is Murtaza and I love Javascript';


// startsWith
// endsWith
//includes


//console.log(theString.startsWith('ello'));

//console.log(theString.endsWith('Javascript'));

//console.log(theString.includes('love'));



//Hex
/*

Number Methode
console.log(0xfff);
//Binary
console.log(0b101011);
//Ocatal

console.log(0o543);

console.log(Number.isFinite(NaN));

console.log(Number.isNaN());
console.log(Number.isInteger(34));

*/
 
/*
function greet($greeting='Hello World'){
    console.log($greeting);
}

greet();
*/
/*Spread operator*/
/*

let args1=[1,2,3];
let args2=[4,5,6];
function test(){
    console.log(args1 + ',' +args2);

}
test(...args1,...args2);


*/
/*
let fruits=['Apple','Orange','Banan'];
let newfruit=['WaterMelon',...fruits];

console.log(newfruit);

var obj1={id:1234, name:'Murtaza'}

var obj2={age:23, country:'Afghanistan'}

const emp={...obj1,...obj2}
console.log(emp);


var num=[1,2,3,4,5,5,65];
console.log(Math.max(...num));


var alphabets=['A',...num,'B'];

console.log(alphabets);


*/

/*
let myArray=[1,2,3,4,5,7];
let mySet=new Set(myArray);

mySet.add('Mung');
mySet.delete('Mung');
//mySet.clear();
console.log(mySet);
mySet.add({a:1,b:2});


console.log(mySet.size);
*/
/*
let myMap=new Map([['a1','Hello'],['b2','Goodby']]);
myMap.set('c3','Foo');
myMap.set(5,'Hello World');
myMap.set('Murtaza','Mohammadi');
console.log(myMap);
*/

/*
for(i=0; i<10; i++){
var myStringArray = ["Mung","Ali Ahmad","Muhammad"];
console.log(myStringArray);
}
*/
