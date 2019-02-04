
//document.addEventListener('DOMContentLoaded', mainjsFunc);
document.addEventListener('DOMContentLoaded', mainFunction);
//function mainjsFunc(){

//var button_cal = document.getElementById("calculate");
//button_cal.addEventListener("change",calculateSum);

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
