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

        yek.style.backgroundColor = '#5bff4f';// true

    }

    else if (yek.value > firstNumber) {

        yek.style.backgroundColor = '#1d69f5'; // higher

    }

    else {

        yek.style.backgroundColor = 'orange'; //lower
    }
    // ---------------- DO -----------------------------------------

    if (tho.value == secondNumber) {

        tho.style.backgroundColor = '#5bff4f';// true

    }

    else if (tho.value > secondNumber) {

        tho.style.backgroundColor = '#1d69f5'; // higher

    }

    else {
        tho.style.backgroundColor = 'orange'; //lower

    }
    // ---------------- SE -----------------------------------------

    if (se.value == thirdNumber) {
        se.style.backgroundColor = '#5bff4f';// true

    }

    else if (se.value > thirdNumber) {

        se.style.backgroundColor = '#1d69f5'; // higher

    }


    else {
        se.style.backgroundColor = 'orange'; //lower

    }
    // ---------------- CHAR -----------------------------------------

    if (chahar.value == forthNumber) {
        chahar.style.backgroundColor = '#5bff4f';// true

    }

    else if (chahar.value > forthNumber) {
        chahar.style.backgroundColor = '#1d69f5'; // higher

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
    document.body.style.backgroundColor = '#12bebe';
}

function orangefunc() {
    document.body.style.backgroundColor = 'orange';
}

function grayfunc() {
    document.body.style.backgroundColor = 'gray';
}

