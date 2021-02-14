'use strict'

let userName = prompt('what is your name?')
alert ('welcome  ' + userName)

let score =0;
function myName(){
let user = prompt('do you know my name?')
user = user.toLowerCase();
if (user === 'yes' || user === 'y' ){
    alert('you right');
    score++;
}
    else {
        user === 'no' || user === 'n'
        alert ('oh no my name is eid!');
    }
        //console.log (user);
}
myName();

function live(){
let myCountry = prompt(' am i live in jordan?')
    myCountry = myCountry.toLowerCase();
    if (myCountry === 'yes' || myCountry === 'y'){
        alert ('that is right');
        score++;
    }
    else{
        myCountry === 'no' || myCountry === 'n'
        alert ('no');
    }
        console.log (myCountry)
}
live();
function color(){
let myColor = prompt(' do you know my fav color?')
    myColor = myColor.toLowerCase();
    if (myColor === 'yes' || myColor === 'y'){
            alert ('good');
            score++;
    }
    else{
        myColor === 'no' || myColor === 'n'
        alert ('my fav color is green');
    }
        console.log (myColor)
}
color();
function age(){
let myAge = prompt(' am i older than 20?')
        myAge = myAge.toLowerCase();
    if (myAge === 'yes' || myAge === 'y'){
            alert ('good');
            score++;
    }
    else{
        myAge === 'no' || myAge === 'n'
         alert ('my age is 23');
    }
        console.log (myAge);
}
age();

function food(){
let myFood = prompt('do you know my fav food?')
    myFood = myFood.toLowerCase();
    if (myFood === 'yes' || myFood === 'y' ){
    alert('you right');
    score++;
}
    else {
         myFood === 'no' || myFood === 'n'
        alert (' is shawrma!');
    }
        console.log (myFood);
}
food();


function myOld(){
   
let myA = 24;
let qu1 = prompt('Do you know how old I am');
   
    for(let i=0; i<4; i++){
        
    if (qu1 > myA ){
    alert('too high');
    qu1 = prompt('again pleas')
    if (i===4){
        alert('it is 24')
    }
    }
    else if  (qu1 < myA ){
        alert('too low');
        qu1 =prompt  ('again pleas');
        if (i===4){
            alert ('it is 24')
        }
    }
   
    else {
        (qu1 == myA) 
        alert('right')
        score++;
        break;
    }
    
   
}
}
myOld();


function city(){
let flag = false;
let loveCity = ['irbid', 'amman', 'ma`an', 'ajlon', 'jarash' ];
let tru ;
for (let i=0; i<6; i++){
 tru = prompt('can you guss my fav city in jordan?');
    tru = tru.toLowerCase();
    console.log(tru);
    
        for (let j = 0; j < loveCity.length; j++) {
            if (tru === loveCity[j]){
                alert('good');
                flag=true;
                score++;
                break;
            }
            
        }

        if(flag){
            break;
        }
    }
}
city();
alert (`thank you ${userName} your score is ${score}`);

    
