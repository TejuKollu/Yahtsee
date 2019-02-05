
//document.addEventListener('DOMContentLoaded', mainjsFunc);
document.addEventListener('DOMContentLoaded', mainFunction);
//function mainjsFunc(){

//var button_cal = document.getElementById("calculate");
//button_cal.addEventListener("click",calculateSum);

/*
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

}*/

function mainFunction(){
    event.preventDefault();
/*
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
//document.addEventListener("click", getRandomInt(1,7));
//let gen= document.getElementById("btn");
//gen.addEventListener("click", getRandomInt);
/*

function onClickHandler(){
    var chk1=document.getElementById("cb1").value;
    var chk2=document.getElementById("cb2").value;
    var chk3=document.getElementById("cb3").value;
    var chk4=document.getElementById("cb4").value;
    var chk5=document.getElementById("cb5").value;

    console.log(chk1);
    console.log(chk2);
    console.log(chk3);
    console.log(chk4);
    console.log(chk5);
}

function getRandomInt(event) {

let min = 1;
let max = 7;
let d1 = document.getElementById("dice1");
let d2 = document.getElementById("dice2");
let d3 = document.getElementById("dice3");
let d4 = document.getElementById("dice4");
let d5 = document.getElementById("dice5");

let r1 = Math.floor(Math.random() * (max - min)) + min;
let r2 = Math.floor(Math.random() * (max - min)) + min;
let r3 = Math.floor(Math.random() * (max - min)) + min;
let r4 = Math.floor(Math.random() * (max - min)) + min;
let r5 = Math.floor(Math.random() * (max - min)) + min;

d1.innerHTML = r1;
d2.innerHTML = r2;
d3.innerHTML = r3;
d4.innerHTML = r4;
d5.innerHTML = r5;


var i; 
var random;
for(i=0; i<5; i++){
random[i] = Math.floor(Math.random() * (max - min)) + min;
}
d1.innerHTML = random[0];
d2.innerHTML = random[1];
d3.innerHTML = random[2];
d4.innerHTML = random[3];
d5.innerHTML = random[4];
*/

let gen= document.getElementById("btn");
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

}
