'use strict'
/*
let userName = prompt('what is your name?')
alert ('welcome  ' + userName)



let user = prompt('do you know my name?')
user = user.toLowerCase();
if (user === 'yes' || user === 'y' ){
    alert('you right');
}
    else {
        user === 'no' || user === 'n'
        alert ('oh no my name is eid!');
    }
        console.log (user)

let myCountry = prompt(' am i live in jordan?')
    myCountry = myCountry.toLowerCase();
    if (myCountry === 'yes' || myCountry === 'y'){
        alert ('that is right');
    }
    else{
        myCountry === 'no' || myCountry === 'n'
        alert ('no');
    }
        console.log (myCountry)

let myColor = prompt(' do you know my fav color?')
    myColor = myColor.toLowerCase();
    if (myColor === 'yes' || myColor === 'y'){
            alert ('good');
    }
    else{
        myColor === 'no' || myColor === 'n'
        alert ('my fav color is green');
    }
        console.log (myColor)

let myAge = prompt(' am i older than 20?')
        myAge = myAge.toLowerCase();
    if (myCountry === 'yes' || myCountry === 'y'){
            alert ('good');
    }
    else{
        myAge === 'no' || myAge === 'n'
         alert ('my age is 23');
    }
        console.log (myAge)


let myFood = prompt('do you know my fav food?')
    myFood = myFood.toLowerCase();
    if (myFood === 'yes' || myFood === 'y' ){
    alert('you right');
}
    else {
        myFood === 'no' || myFood === 'n'
        alert (' is shawrma!');
    }
        console.log (myFood)




   
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
        break
    }
    
   
}
*/

let found = false;
let bigCity = ['irbid', 'amman', 'alzaqaa', 'ma`an', 'ajlon', 'jarash' ]
let tru = prompt('what is the biggest city in jordan')
    tru = tru.toLowerCase();

for (i=0; i<6; i++){
    
        for (let j = 0; j < bigCity.length; j++) {
            if (tru === 'amman'){
                alert('good');
                break
            }else{
                alert('try again')
                let score= (j+1)
            }
            
        }

        if(found === true){
            break;
        }
    }
alert (`thank you ${userName} your score is ${score}`)

    
