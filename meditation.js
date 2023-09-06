let timer = 10;
let totalTime = timer * 60; 
let minutes;
let seconds;
let intervalOne;
let intervalTwo;
let intervalThree;
let intervalFour;

const buttonOne = document.querySelector('.btnOne');
const buttonTwo = document.querySelector('.btnTwo');
const buttonThree = document.querySelector('.btnThree');
const buttonFour = document.querySelector('.btnFour');
const resetButton = document.querySelector('.reset-btn');

//button One is clicked
buttonOne.addEventListener('click', playerOne);
function playerOne() {
    gsap.fromTo('.containerOne', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1
    })

    gsap.fromTo('.timeOne', {
        opacity: 0,
        y: 20
    }, {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: .6
    })
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.containerOne').style.display = 'flex';
    document.querySelector('.containerTwo').style.display = 'none';
    document.querySelector('.containerThree').style.display = 'none';
    document.querySelector('.containerFour').style.display = 'none';
    intervalOne = setInterval(countdownTimerOne,1000);
}

function countdownTimerOne() {
    const showTimeOne = document.querySelector('.timeOne');
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime%60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    showTimeOne.innerHTML = `${minutes}:${seconds}`;
    totalTime--;
    document.querySelector('#playerOne').muted = false;
    document.querySelector('#playerOne').play();
    if (totalTime < 0) {
        clearInterval(intervalOne);
        totalTime = 0;
        document.querySelector('#playerOne').pause();
    }
}

//button Two is clicked
buttonTwo.addEventListener('click', playerTwo);
function playerTwo() {
    gsap.fromTo('.containerTwo', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1
    })

    gsap.fromTo('.timeTwo', {
        opacity: 0,
        y: 20
    }, {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: .6
    })
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.containerTwo').style.display = 'flex';
    document.querySelector('.containerOne').style.display = 'none';
    document.querySelector('.containerThree').style.display = 'none';
    document.querySelector('.containerFour').style.display = 'none';
    intervalTwo = setInterval(countdownTimerTwo,1000);
}

function countdownTimerTwo() {
    const showTimeTwo = document.querySelector('.timeTwo');
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime%60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    showTimeTwo.innerHTML = `${minutes}:${seconds}`;
    totalTime--;
    document.querySelector('#playerTwo').muted = false;
    document.querySelector('#playerTwo').play();
    if (totalTime < 0) {
        clearInterval(intervalTwo);
        totalTime = 0;
        document.querySelector('#playerTwo').pause();
    }
}

//button Three is clicked
buttonThree.addEventListener('click', playerThree);
function playerThree() {
    gsap.fromTo('.containerThree', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1
    })

    gsap.fromTo('.timeThree', {
        opacity: 0,
        y: 20
    }, {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: .6
    })
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.containerThree').style.display = 'flex';
    document.querySelector('.containerOne').style.display = 'none';
    document.querySelector('.containerTwo').style.display = 'none';
    document.querySelector('.containerFour').style.display = 'none';
    intervalThree = setInterval(countdownTimerThree,1000);
}

function countdownTimerThree() {
    const showTimeThree = document.querySelector('.timeThree');
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime%60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    showTimeThree.innerHTML = `${minutes}:${seconds}`;
    totalTime--;
    document.querySelector('#playerThree').muted = false;
    document.querySelector('#playerThree').play();
    if (totalTime < 0) {
        clearInterval(intervalThree);
        totalTime = 0;
        document.querySelector('#playerThree').pause();
    }
}

//button Four is clicked
buttonFour.addEventListener('click', playerFour);
function playerFour() {
    gsap.fromTo('.containerFour', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1
    })

    gsap.fromTo('.timeFour', {
        opacity: 0,
        y: 20
    }, {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: .6
    })
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.containerFour').style.display = 'flex';
    document.querySelector('.containerOne').style.display = 'none';
    document.querySelector('.containerTwo').style.display = 'none';
    document.querySelector('.containerThree').style.display = 'none';
    intervalFour = setInterval(countdownTimerFour,1000);
}

function countdownTimerFour() {
    const showTimeFour = document.querySelector('.timeFour');
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime%60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    showTimeFour.innerHTML = `${minutes}:${seconds}`;
    totalTime--;
    document.querySelector('#playerFour').muted = false;
    document.querySelector('#playerFour').play();
    if (totalTime < 0) {
        clearInterval(intervalFour);
        totalTime = 0;
        document.querySelector('#playerFour').pause();
    }
}

//button Reset for each blocks
const blockResetOneButton = document.querySelector('.block-resetOne');
const blockResetTwoButton = document.querySelector('.block-resetTwo');
const blockResetThreeButton = document.querySelector('.block-resetThree');
const blockResetFourButton = document.querySelector('.block-resetFour');

blockResetOneButton.addEventListener('click', deleteDisplayOne);
function deleteDisplayOne() {
    document.querySelector('#playerOne').muted = true;
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.containerOne').style.display = 'none';
    clearInterval(intervalOne);
    timer = 10;
    totalTime = timer * 60;
}

blockResetTwoButton.addEventListener('click', deleteDisplayTwo);
function deleteDisplayTwo() {
    document.querySelector('#playerTwo').muted = true;
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.containerTwo').style.display = 'none';
    clearInterval(intervalTwo);
    timer = 10;
    totalTime = timer * 60;
}

blockResetThreeButton.addEventListener('click', deleteDisplayThree);
function deleteDisplayThree() {
    document.querySelector('#playerThree').muted = true;
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.containerThree').style.display = 'none';
    clearInterval(intervalThree);
    timer = 10;
    totalTime = timer * 60;
}

blockResetFourButton.addEventListener('click', deleteDisplayFour);
function deleteDisplayFour() {
    document.querySelector('#playerFour').muted = true;
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.containerFour').style.display = 'none';
    clearInterval(intervalFour);
    timer = 10;
    totalTime = timer * 60;
}













