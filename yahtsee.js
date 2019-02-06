// wmake array and clean code
// 3 rolls check
// calculation for the lower part.

document.addEventListener('DOMContentLoaded', mainjsFunc);
//document.addEventListener('DOMContentLoaded', mainFunction);
function mainjsFunc() {
    var indP = 1;
    var button_cal = [];
    for (let ind = 1; ind <= 4; ind++) {
        event.preventDefault();
        button_cal[ind] = document.getElementById("calculate_p" + ind);
        button_cal[ind].addEventListener("click", calculateSum);
      //  indP = ind;
        //button_cal.addEventListener("change",calculateSum);
    }

    function calculateSum(event) {
        event.preventDefault();
        console.log(event);
        
        let inx= event.toElement.id;
        if(inx === 'calculate_p1')
        {indP = 1}
        if(inx === 'calculate_p2')
        {indP = 2}
        if(inx === 'calculate_p3')
        {indP = 3}
        if(inx === 'calculate_p4')
        {indP = 4}
       // console.log("hey hey hey" + indP);
        var textid = [];
        for (let i = 1; i <= 6; i++) {
            console.log("p" + indP + i);
            textid[i] = parseInt((document.getElementById("p" + indP + i)).value);
        }
        var result = document.getElementById("resultP" + indP);
        result.value = textid.reduce((total, value, index, array) => {
            return total + value;
        }, 0);
      //  indP = 1;
    }

    /*
            let textid1 = document.getElementById("p11");
            let textid2 = document.getElementById("p12");
            let textid3 = document.getElementById("p13");
            let textid4 = document.getElementById("p14");
            let textid5 = document.getElementById("p15");
            let textid6 = document.getElementById("p16");

            let result = document.getElementById("resultP1");
            result.value = parseInt(textid1.value) + parseInt(textid2.value) + parseInt(textid3.value) + parseInt(textid4.value) + parseInt(textid5.value) + parseInt(textid6.value);
      */

    //dice roll on click --------------------------------------------------------------------------------->

    var count = 1;

    var gen = document.getElementById("diceFormBtn");
    gen.addEventListener("click", getRandomInt);

    var done = document.getElementById("doneBtn");
    done.addEventListener('click', turnDone);

    var chk = [];
    var d = [];
    for (let i = 1; i < 6; i++) {
        chk[i] = document.getElementById("cb" + i);
        d[i] = document.getElementById("dice" + i);
    }

    function getRandomInt(event) {

        if (count <= 3) {
            min = 1;
            max = 7;

            for (let i = 1; i <= 5; i++) {
                if (chk[i].checked == false) {
                    d[i].value = Math.floor(Math.random() * (max - min)) + min;
                }
            }
            count++;
        } else {
            alert("three rolls done..update score sheet...Next Player Turn");
            count = 1;
        }
    }

    function turnDone() {
        alert("Your turn is over, enter your scores");
    }

    /*
    var chk1 = document.getElementById("cb1");
    var chk2 = document.getElementById("cb2");
    var chk3 = document.getElementById("cb3");
    var chk5 = document.getElementById("cb5");
    var chk4 = document.getElementById("cb4");

    d1 = document.getElementById("dice1");
    d2 = document.getElementById("dice2");
    d3 = document.getElementById("dice3");
    d4 = document.getElementById("dice4");
    d5 = document.getElementById("dice5");

            if (chk1.checked == false) {
                r1 = Math.floor(Math.random() * (max - min)) + min;
            }
            if (chk2.checked == false) {
                r2 = Math.floor(Math.random() * (max - min)) + min;
            }
            if (chk3.checked == false) {
                r3 = Math.floor(Math.random() * (max - min)) + min;
            }
            if (chk4.checked == false) {
                r4 = Math.floor(Math.random() * (max - min)) + min;
            }
            if (chk5.checked == false) {
                r5 = Math.floor(Math.random() * (max - min)) + min;
            }

            d1.value = r1;
            d2.value = r2;
            d3.value = r3;
            d4.value = r4;
            d5.value = r5;
            count++;

        }
        else{
            alert("three rolls done..update score sheet...Next Player Turn");
            count = 1;
        }
}

function turnDone(){
    alert("Your turn is over, enter your scores");
   // count = 4;
}

*/

}

//----------------------------updating Yahtsee form when change occurs ---------------------------------
/*

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