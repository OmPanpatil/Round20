// let boxss = document.querySelector('#box');
// boxss.style.color = 'white';

let boxss = document.createElement('div');
boxss.style.height = '200px';
boxss.style.width = '300px';
boxss.style.backgroundColor = 'blue';
document.body.appendChild(boxss);
boxss.style.position = 'absolute';
boxss.style.top = '50%';
boxss.style.left = '50%';
boxss.style.transform = 'translate(-50% , -50%)';

let btns = document.createElement('button');
btns.innerHTML = 'CLick Me';
document.body.appendChild(btns);
btns.style.position = 'absolute';
btns.style.top = '70%';
btns.style.left = '50%';
btns.style.transform = 'translate(-50% , -50%)';
btns.style.padding = '10px 20px';

btns.addEventListener('click', function(){
    boxss.style.backgroundColor = 'red';
})

let h5 = document.createElement('h5');
h5.innerHTML = 'Stranger';
document.body.appendChild(h5);
h5.style.fontSize = '30px';
h5.style.textAlign = 'center';
h5.style.marginTop = '20px';

let btnsss = document.createElement('button');
btnsss.innerHTML = 'Add Friend';
document.body.appendChild(btnsss)
btnsss.style.backgroundColor = 'yellow';
btnsss.style.padding = '10px 20px';
btnsss.style.marginLeft = '47%';

let flag = 0;
btnsss.addEventListener('click', function(){
    if(flag === 0){
        h5.innerHTML = 'Friend Added';
        btnsss.innerHTML = 'Following';
        flag = 1;
    }
    else{
        h5.innerHTML = 'Stranger'
        btnsss.innerHTML = 'Add Friend';
        flag = 0;
    }
})


