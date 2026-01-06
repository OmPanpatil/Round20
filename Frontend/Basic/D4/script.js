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
})