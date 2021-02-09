'use strict'

/*let userName = prompt('what is your name?')
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

*/

//let myA = 24;

   /*switch (qu1){
    case '24':
       alert('right');
       break;
    case qu1 >'24':
        alert('too high');
    case qu1 < '24':
        alert('too low')

   }
    */
let myA = 24;
let qu1 = prompt('Do you know how old I am');
   
    for(let i=0; i<4; i++){
        
    if (qu1 == myA ){
    alert('right');
    break
    }
    else if  (qu1 < myA ){
        alert('too low');
        qu1 =prompt  ('again pleas');
    }
   
    else {
        (qu1 > myA) 
        alert('too high')
    }
    qu1 = prompt('again pleas')
   
}

let found = false;
let bigCity = ['irbid', 'amman', 'alzaqaa', 'ma`an', 'ajlon', 'jarash' ]

for (i=0; i<6; i++){
    let tru = prompt('what is the biggest city in jordan')
    tru = tru.toLowerCase();
        for (let j = 0; j < bigCity.length;j++) {
            if (tru === bigCity[j]){
                found = true;
                break
            }
            
        }

        if(found === true){
            break;
        }
    }


    
