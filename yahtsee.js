
document.addEventListener('DOMContentLoaded', mainjsFunc);
//document.addEventListener('DOMContentLoaded', mainFunction);
function mainjsFunc(){

var button_cal = document.getElementById("calculate_p1");
button_cal.addEventListener("click",calculateSum);
//button_cal.addEventListener("change",calculateSum);


function calculateSum(event){
    event.preventDefault();
        
    let textid1 = document.getElementById("p11");
    let textid2 = document.getElementById("p12");
    let textid3 = document.getElementById("p13");
    let textid4 = document.getElementById("p14");
    let textid5 = document.getElementById("p15");
    let textid6 = document.getElementById("p16");

    let result = document.getElementById("resultP1");
    result.value = parseInt(textid1.value)+parseInt(textid2.value)+parseInt(textid3.value)+parseInt(textid4.value)+parseInt(textid5.value)+parseInt(textid6.value);
}
}

/*
// updating Yahtsee form when change occurs

function mainFunction(){
    event.preventDefault();

    var textid1 = document.getElementById("p11");
    var textid2 = document.getElementById("p12");
    var textid3 = document.getElementById("p13");
    var textid4 = document.getElementById("p14");
    var textid5 = document.getElementById("p15");
    var textid6 = document.getElementById("p16");

    textid1.addEventListener("change", calculateSum);
    textid2.addEventListener("change", calculateSum);
    textid3.addEventListener("change", calculateSum);
    textid4.addEventListener("change", calculateSum);
    textid5.addEventListener("change", calculateSum);
    textid6.addEventListener("change", calculateSum);
 
    
    function calculateSum(){
        let result = document.getElementById("resultP1");
        result.value = parseInt(textid1.value)+parseInt(textid2.value)+parseInt(textid3.value)+parseInt(textid4.value)+parseInt(textid5.value)+parseInt(textid6.value);

    }
}
*/

//trial of Arrays

/*
//document.addEventListener("click", getRandomInt(1,7));
//let gen= document.getElementById("btn");
//gen.addEventListener("click", getRandomInt);
var i; 
var random;
for(i=0; i<5; i++){
random[i] = Math.floor(Math.random() * (max - min)) + min;
}
d1.value = random[0];
d2.value = random[1];
d3.value = random[2];
d4.value = random[3];
d5.value = random[4];
*/

//linked to dice form and updates 5 dice boxes and check checkboxes

let gen= document.getElementById("diceFormBtn");
gen.addEventListener("click", getRandomInt);

var chk1=document.getElementById("cb1");
var chk2=document.getElementById("cb2");
var chk3=document.getElementById("cb3");
var chk5=document.getElementById("cb5");
var chk4=document.getElementById("cb4");

 d1 = document.getElementById("dice1");
 d2 = document.getElementById("dice2");
 d3 = document.getElementById("dice3");
 d4 = document.getElementById("dice4");
 d5 = document.getElementById("dice5");

function getRandomInt(event) {

 min = 1;
 max = 7;
if(chk1.checked == false){
 r1 = Math.floor(Math.random() * (max - min)) + min;
}
if(chk2.checked== false) {
 r2 = Math.floor(Math.random() * (max - min)) + min;
}
if(chk3.checked == false){
 r3 = Math.floor(Math.random() * (max - min)) + min;
}
if(chk4.checked== false) {
 r4 = Math.floor(Math.random() * (max - min)) + min;
}
if(chk5.checked == false){
 r5 = Math.floor(Math.random() * (max - min)) + min;
}

d1.value = r1;
d2.value = r2;
d3.value = r3;
d4.value = r4;
d5.value = r5;

}