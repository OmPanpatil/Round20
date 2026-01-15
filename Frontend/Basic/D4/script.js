console.log("Hello world..");
console.warn("This is a warning");
console.error("This is an error");
var abs = confirm('Are u sure u want to do all of these ?');
console.log(abs);
let x = 'LinkinPark';
let y = 'Numb';
console.log(x + ' ' + y);
let z = x.slice(0,4);
console.log(z);

let dateofbirth = 31/12/2026;
let todaydate = 31/12/2026;
function happynewyear(){
    alert('Happy New Year 2026!');
}

if(dateofbirth === todaydate){
    happynewyear();
}

let arr = [1,2,3,4,5];

arr.forEach(function(val){
    console.log(val);
});

let obj = {
    name : function namess(){
        console.log("ur name is : " + this.name2);
    },
    name2 : "Om",
    name3 : "Omm"
}

obj.name();


let obj2 = {
    fn : function(){
        function innerfn(){
            console.log("This is the function inside the method " + this);
            
        }
        innerfn();
    }
}
obj2.fn();

let objj = {
    fns: function(){
        const ab = () => {
            console.log("This value is object inside es6 arrow function " );
            
        }
        ab();
    }
}
objj.fns();

let cofns = function bdd(){
    console.log("This is a constructor function " + this);
    
}
const anss = new cofns();    //gives a new blank object.

document.querySelector('button').addEventListener('click', function(){
    alert('Button Clicked!');
    console.log(this);
})

let objjjj = {namess : 'Om'};

function abddd(){
    console.log(this);
    
}
abddd.call(objjjj);


let biiid = {f : 'Self-love buddy'};
function biifn(){
    console.log(this);
}
const badmckl = biifn.bind(biiid);
badmckl();


function makehuman(username, age){
    this.username = username;
    this.age = age;
    // this.printmyname = function(){

    // }

}

makehuman.prototype.printmyname = function(){
    console.log(this.name);
    
}



let ansss1 = new makehuman("Om", 22);
let ansss2 = new makehuman("Salauddin", 22);


let parent = document.querySelector("#parent");
parent.addEventListener("click", function(ev){
    if(ev.target.id === "play"){
        console.log("Play the song!");
        
    } else if(ev.target.id === "pause"){
        console.log("Pause the song!");    
    }
});

function hofs(){
    return function(){

    }
}



function divide(a,b){
    try{
        if(b === 0){
            console.log("It can't be divided!");
            alert("can't divide!");
        }
        console.log(a/b);
    }
    catch(err){
        console.log(err);
    }
}
divide(12,0);
// divide(a/b);

let calievent = new Event("DO push urself!");
let cali = document.querySelector("#cali");
cali.addEventListener("DO push urself!", function(){
    alert("Let's go 😀");
});
// document.querySelector("cali").dispatchEvent(calievent);


// let iamge1 = document.querySelector('#abcd');
// let iamge2 = document.querySelector('.abcd');

// let firsttext = document.querySelector('.def');
// let secondtext = document.querySelector('#def');

// Agar aapke pass bohot saare h3 hai and aap select karte ho toh sirf pehla walla h3 select hoga.


let heads2 = document.querySelector("h2");
heads2.textContent += "Om";
heads2.innerHTML += '<i> Helo </i>';

// function namekar(){

// }

let calbtn = document.querySelector('#cali');
heads2.style.color = 'red';
heads2.style.fontFamily = 'Gilroy';
heads2.style.fontWeight = '300';
heads2.classList.add('makeitfontss');

let headddd = document.createElement('h1');
headddd.textContent = "Haahahaahaa hehe";

// document.querySelector("body").appendChild(headddd);
// let headddd2 = document.querySelector('headddd2');
// headddd2.style.color = 'blue';

let imaggg = document.createElement('img');
imaggg.src='https://images.unsplash.com/photo-1767503263183-39c0b7ff96a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
document.querySelector("body").appendChild(imaggg);
imaggg.style.padding = '4em';
imaggg.classList.add('makeitfine');


calbtn.addEventListener('click', function(){
    calbtn.style.backgroundColor = 'orange';
    calbtn.style.color = 'white';
    calbtn.style.fontWeight = '500';
    calbtn.style.fontSize = '1vw';
    alert("Let's do it!");
    // screen.style.backgroundColor = 'black';
});

function rs(a,b,c,d,...rest){
    console.log(a,b,c,d,...rest);
}

rs(1,2,3,4,5,6,7,8);

// Hoisting :
// let a;
// a=12;
// console.log(bss);
// let bss = 12;   //no error Hoisting gives undefined value

(function abbbs(){
    console.log("Heyyyyyyy!");
})();


(function ii(){
    let a = 12;

    function setter(val){
        a= val;
    }

    function getter(){
        console.log(a);
        
    }
}) ();


let om = (function harae(){
    return {
        // objects 
        imageEffect : function(){
            console.log("Image Effect");
            
        },
        mousefollower : function(){
            console.log("Mousefollower");
            
        },
    };
}) ();

om.mousefollower();


function hho(){
    return function(){
        // console.log("heyeheye");
        fncc();
    }
}
hho(
    function(){
        console.log("Heyeehye");
        
    }
);


let bannarray = [1,2,3,4];
let bannarray2 = new Array(5,6,7,7,8);
bannarray2[5] = 9;


// let om = [om, omisha, ajeet];

// Questions : 

// 1. Log "Hello world" to the console :
console.log("Hello world!");
alert("Hello world!");
confirm("Hello world!");
console.warn("Hello world!");
console.error("Hello world!");
console.info("hello world!");
console.table({nameee: "Om", aggge : 1000});

// perform 35*2-(10/2)+7 :
console.log(35*2-(10/2)+7);

// Log the data type of "123", 123, true and null using typeof operator :
console.log(typeof 123);
console.log(typeof "13");
console.log(typeof true);
console.log(typeof null);

// write a program to swap two numbers :

let p =5;
let q = 10;
p = p+q;
q = p - q;
p = p - q;
[p,q] = [q,p];
console.log(p, q);

Number("50");
parseInt("100");
parseFloat("12.34");
String(123);
Boolean(1);


let mm = [1,2,3,4,5];
let ansn = mm.map(function(val){
    return val * 1.1;
});

let ansmm = mm.reduce(function(acc, val){
    return acc *val * 2;
}, 1);

// Create an array of 5 numbers and log the sum using .reduce() :

let arr5 = [1,2,3,4,5];
let sumarr5 = arr5.reduce(function(acc, val){
    return acc + val;
}, 0);
console.log(sumarr5);

let sum = 0;

for(let i=1; i<=5; i++){
    sum += i;
}
console.log(sum);



// Array 

// Q. Remove the duplicate values from an array :

let array = [1,2,22,33,44,44,33,22,2,1];
let arrans = [...new Set(array)];
console.log(arrans);


// Q. Find the second largest number in an array :

let arrrr2 = [1,2,3,4,5,6,5,4,3,21,2,1];
let arrrans = ([...new Set(arrrr2)]);
let arrsort = arrans.sort(function(a,b){
    // return a-b;  //for ascending order
    return b-a;
});
console.log(arrsort[1]);


// Unique [1,2,3,4,5,6,21];
// Sort in ascending and descending order : 
// Accesing the value from Indexing the number 


let ars = [5,3,8,7,1];    //how many times the values have been returned.
let objs = {}
ars.forEach(function(val){
    objs[val] === undefined? (objs[val] = 1) : (objs[val]++);    // when the val as we know it is undefined we will get then suppose for number 3 we get undefined then we will assign it to 1 else we will increment it by 1.
});