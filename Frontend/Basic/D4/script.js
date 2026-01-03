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