var firstNumber = Math.floor(Math.random() * 9) + 1;
var secondNumber = Math.floor(Math.random() * 9) + 1;
var thirdNumber = Math.floor(Math.random() * 9) + 1;
var forthNumber = Math.floor(Math.random() * 9) + 1;



function checkbtn() {
    var yek = document.getElementById('firstInput');
    var tho = document.getElementById('secondInput');
    var se = document.getElementById('thirdInput');
    var chahar = document.getElementById('forthInput');
    
    if ((yek == firstNumber) && (tho == secondNumber) && (se == thirdNumber) && (chahar == forthNumber)) {
        console.log('shod');
    } else {
        console.log('nashd');
    }



    // ---------------- YEK -----------------------------------------
    if (yek.value == firstNumber) {

        yek.style.backgroundColor = 'lightgreen';// true

    }

    else if (yek.value > firstNumber) {

        yek.style.backgroundColor = 'aqua'; // higher

    }

    else {

        yek.style.backgroundColor = 'orange'; //lower
    }
    // ---------------- DO -----------------------------------------

    if (tho.value == secondNumber) {

        tho.style.backgroundColor = 'lightgreen';// true

    }

    else if (tho.value > secondNumber) {

        tho.style.backgroundColor = 'aqua'; // higher

    }

    else {
        tho.style.backgroundColor = 'orange'; //lower

    }
    // ---------------- SE -----------------------------------------

    if (se.value == thirdNumber) {
        se.style.backgroundColor = 'lightgreen';// true

    }

    else if (se.value > thirdNumber) {

        se.style.backgroundColor = 'aqua'; // higher

    }


    else {
        se.style.backgroundColor = 'orange'; //lower

    }
    // ---------------- CHAR -----------------------------------------

    if (chahar.value == forthNumber) {
        chahar.style.backgroundColor = 'lightgreen';// true

    }

    else if (chahar.value > forthNumber) {
        chahar.style.backgroundColor = 'aqua'; // higher

    }

    else {
        chahar.style.backgroundColor = 'orange'; //lower

    }





};




// if ((yekk == firstNumber) && (thoo == secondNumber) && (see == thirdNumber) && (chaharr == forthNumber)) {
//     console.log('shod');
// } else {
//     console.log('nashd');
// }




var counter = document.getElementById('counter');
var adad = 0;

btn.addEventListener('click', function alibei() {
    adad++;
    counter.innerHTML = 'You Guessed ' + adad + ' Times';
})


function redfunc() {
    document.body.style.backgroundColor = 'red';
}

function bluefunc() {
    document.body.style.backgroundColor = 'aqua';
}

function orangefunc() {
    document.body.style.backgroundColor = 'orange';
}

function grayfunc() {
    document.body.style.backgroundColor = 'gray';
}

