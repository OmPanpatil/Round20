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