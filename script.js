// Animation
if(window.innerWidth < 1200) {
    gsap.fromTo(".header__logo", {
        opacity: 0 
    }, {
        opacity: 1,
        duration: 1.5,
        delay: 1
    })
} else {
    gsap.fromTo(".header__logo", {
        x: 630,
        y: 300,
        scale: 4, 
    }, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 1.5,
        delay: 1
    })
}

gsap.fromTo(".menu__link",{
    opacity: 0
}, {
    delay: 2,
    duration: 1,
    opacity: 1,
    stagger: .3
})

gsap.fromTo(".menu, .menu__icon, .heading-main-page,.img-text-container, .img-button-container",{
    opacity: 0
}, {
    delay: 2,
    duration: .5,
    opacity: 1,
    stagger: .6
})

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('.swiper-slide', {
    scrollTrigger: {
        trigger: '.take-care-container',
        start: '-=60% top'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.take-care-container',
        start: '-=60% top'
    },
    opacity: 1,
    duration: .5,
    stagger: .3
})

gsap.fromTo('.img-container-about-one', {
    scrollTrigger: {
        trigger: '.about-us-container',
        start: '-=20% top'
    },
    x: -100,
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.about-us-container',
        start: '-=20% top'
    },
    x: 0,
    opacity: 1,
    duration: 1,
})

gsap.fromTo('.img-container-about-two', {
    scrollTrigger: {
        trigger: '.about-us-container',
        start: '-=30% top'
    },
    x: -100,
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.about-us-container',
        start: '-=30% top'
    },
    x: 0,
    opacity: 1,
    duration: 1,
    delay: .6
})

gsap.fromTo('.img-container-choose, .img-container-choose-two', {
    scrollTrigger: {
        trigger: '.no-show-container',
        start: '-=40% top'
    },
    x: -100,
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.no-show-container',
        start: '-=40% top'
    },
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: .3
})

gsap.fromTo('.img-description-learn-more, .img-description-learn-more-left', {
    scrollTrigger: {
        trigger: '#instructors-section',
        start: '-=30% top',
        end: '+=500px'
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '#instructors-section',
        start: '-=30% top',
        end: '+=500px'
    },
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: .6
})

gsap.fromTo('.price-box', {
    scrollTrigger: {
        trigger: '#join-us-pricing',
        start: '-=40% top'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '#join-us-pricing',
        start: '-=40% top'
    },
    opacity: 1,
    duration: 1,
    stagger: .3
})

gsap.fromTo('.img-container-help', {
    scrollTrigger: {
        trigger: '.help-container',
        start: '-=40% top'
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.help-container',
        start: '-=40% top'
    },
    opacity: 1,
    x: -0,
    duration: 1
})

gsap.fromTo('.img-container-have-questions', {
    scrollTrigger: {
        trigger: '#contacts-section',
        start: '-=40% top'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '#contacts-section',
        start: '-=40% top'
    },
    opacity: 1,
    duration: 1
})

gsap.fromTo('.label-info', {
    scrollTrigger: {
        trigger: '#contacts-section',
        start: '-=50% top'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '#contacts-section',
        start: '-=50% top'
    },
    opacity: 1,
    stagger: .6
})


// Menu
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if (iconMenu) {
    iconMenu.addEventListener("click", function() {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");

    menuBody.querySelectorAll(".menu__link").forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("_lock");
            iconMenu.classList.remove("_active");
            menuBody.classList.remove("_active");
        });
    });
});
}

// Sliders
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    spaceBetween: 30,
    centerSlides: true,
    initialSlide: 2,
});

// Our classes slider
const buttonLeft = document.querySelector('.btn-left');
const buttonRight = document.querySelector('.btn-right');

let i = 0;

let title = ['kundalini yoga', 'hatha yoga', 'ashtanga yoga', 'nidra yoga', 'vinyasa yoga'];
let numbers = ['01','02','03','04','05'];
let picturesLong = ['full-shot-woman-with-healthy-lifestyle.jpg',
                    'young-woman-doing-downward-facing-dog-exercise.jpg',
                    'young-woman-one-legged-wheel-pose-grey-studio.jpg',
                    'young-attractive-woman-warrior-one-exercise.jpg',
                    'beautiful-yoga-adho-mukha-vrksasana-pose.jpg'];
let picturesShort = ['young-woman-practicing-yoga-home.jpg',
                    'woman-doing-push-ups-press-ups-exercise-close-up.jpg',
                    'young-woman-camel-pose-grey-studio-background.jpg',
                    'young-attractive-woman-upward-facing-dog-pose.jpg',
                    'young-woman-bakasana-pose-grey-studio-background.jpg'];

let textFirst = [`A spiritual and physical practice that aims to awaken the dormant energy at the base of the spine.<br><br>It involves a combination of physical postures, breathing techniques, meditation, and chanting to activate and balance the chakras, or energy centers, in the body.<br><br>Kundalini yoga is known for its dynamic and powerful movements, as well as its emphasis on self-awareness and personal transformation.`,
                `Hatha yoga is a gentle yet powerful practice that integrates physical postures, breath control, and mindfulness.<br><br>It offers a path to physical well-being, mental clarity, and inner peace.<br><br>Whether you are a beginner or an experienced practitioner, hatha yoga provides a foundation for a balanced and harmonious life.<br><br>In hatha yoga, the emphasis is placed on the alignment of the body and the integration of breath with movement.`,
                `The practice of Ashtanga yoga offers numerous benefits.<br><br>It builds strength and flexibility throughout the body, tones the muscles, and improves posture.<br><br>The dynamic nature of the practice also increases cardiovascular endurance and promotes detoxification through sweat.<br><br>Additionally, regular practice can enhance mental focus, concentration and self-discipline.`,
                `The aim of yoga Nidra is to induce a state of profound relaxation that goes beyond ordinary sleep.<br><br>It allows for the release of physical, mental and emotional tension, promoting deep healing and restoration.<br><br>Yoga Nidra is not only a relaxation technique but also a powerful tool for self-exploration and personal transformation.`,
                `Vinyasa is a style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath. Commonly referred to as “flow” yoga, it is sometimes confused with “power yoga“.<br><br>Vinyasa classes offer a variety of postures and no two classes are ever alike. The variable nature of Vinyasa Yoga helps to develop a more balanced body as well as prevent repetitive motion injuries that can happen if you are always doing the same thing every day.<br><br>Vinyasa Yoga connects one posture to the next using the breath.`];
let textSecond = [`Practitioners of Kundalini yoga often report increased energy, clarity of mind, and a deeper connection to their spiritual selves.`,
                `The practice aims to create a state of balance, strength, flexibility and relaxation.`,
                `It is well-suited for those seeking a vigorous and structured practice that brings a sense of discipline and self-awareness.`,
                `Through the practice of yoga Nidra, one can experience profound relaxation, rejuvenation and a deeper connection with oneself.`,
                `Build strength, coupled with flexibility, by emphasizing and exploring slower options.`];

document.querySelector('.sm-head').innerText = title[i];
document.querySelector('.changed-numbers').innerHTML = numbers[i];                
document.querySelector('.img-classes-box-one').src = picturesLong[i];
document.querySelector('.text-first').innerHTML = textFirst[i];
document.querySelector('.img-classes-box-two').src = picturesShort[i];
document.querySelector('.text-second').innerHTML = textSecond[i];

buttonRight.addEventListener('click', ()=> {
    gsap.fromTo(".sm-head, .img-classes-box-one, .text-first, .img-classes-box-two, .text-second", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1
    })
    i++;
    if (i > title.length - 1) i=0;

    document.querySelector('.sm-head').innerText = title[i];
    document.querySelector('.changed-numbers').innerHTML = numbers[i];                
    document.querySelector('.img-classes-box-one').src = picturesLong[i];
    document.querySelector('.text-first').innerHTML = textFirst[i];
    document.querySelector('.img-classes-box-two').src = picturesShort[i];
    document.querySelector('.text-second').innerHTML = textSecond[i];
})

buttonLeft.addEventListener('click', ()=> {
    gsap.fromTo(".sm-head, .changed-numbers, .img-classes-box-one, .text-first, .img-classes-box-two, .text-second", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1
    })
    i--;
    if (i < 0) i = title.length - 1;
    
    document.querySelector('.sm-head').innerText = title[i];
    document.querySelector('.changed-numbers').innerHTML = numbers[i];                
    document.querySelector('.img-classes-box-one').src = picturesLong[i];
    document.querySelector('.text-first').innerHTML = textFirst[i];
    document.querySelector('.img-classes-box-two').src = picturesShort[i];
    document.querySelector('.text-second').innerHTML = textSecond[i];
})

// Choose classes
const buttonOne = document.querySelector('#btnOne');
const buttonTwo = document.querySelector('#btnTwo');
const buttonThree = document.querySelector('#btnThree');
const buttonFour = document.querySelector('#btnFour');
const buttonFive = document.querySelector('#btnFive');
const buttonSix = document.querySelector('#btnSix');
const buttonSeven = document.querySelector('#btnSeven');
const buttonEight = document.querySelector('#btnEight');
const buttonStart = document.querySelector('.btn-start');

let answerA = 0;
let answerB = 0;
let answerC = 0;
let answerD = 0;
let answerE = 0;

buttonStart.addEventListener('click', showQuiz);
function showQuiz() {
    gsap.to('.question-containerOne', {
        opacity: 1,
        duration: 1
    })
    document.querySelector('.no-show-container').style.display = 'none';
    document.querySelector('.question-containerOne').style.display = 'block';
    buttonOne.style.display = 'block';
    buttonOne.addEventListener('click', showQuestionTwo);
}
function showQuestionTwo(e) {
    e.preventDefault();
    if (document.querySelector('#one-a').checked) {
        answerA++;
    }
    if (document.querySelector('#one-b').checked) {
        answerB++;
    }
    if (document.querySelector('#one-c').checked) {
        answerC++;
    }
    if (document.querySelector('#one-d').checked) {
        answerD++;
    }
    if (document.querySelector('#one-e').checked) {
        answerE++;
    }   

    gsap.to('.question-containerTwo', {
        opacity: 1,
        duration: 1
    })
    document.querySelector('.question-containerOne').style.display = 'none';
    document.querySelector('.question-containerTwo').style.display = 'block';
    buttonOne.style.display = 'none';
    buttonTwo.style.display = 'block';
    buttonTwo.addEventListener('click', showQuestionThree);
}
function showQuestionThree(e) {
    e.preventDefault();
    if (document.querySelector('#two-a').checked) {
        answerA++;
    }
    if (document.querySelector('#two-b').checked) {
        answerB++;
    }
    if (document.querySelector('#two-c').checked) {
        answerC++;
    }
    if (document.querySelector('#two-d').checked) {
        answerD++;
    }
    if (document.querySelector('#two-e').checked) {
        answerE++;
    }
    
    gsap.to('.question-containerThree', {
        opacity: 1,
        duration: 1
    })
    document.querySelector('.question-containerTwo').style.display = 'none';
    document.querySelector('.question-containerThree').style.display = 'block';
    buttonTwo.style.display = 'none';
    buttonThree.style.display = 'block';
    buttonThree.addEventListener('click', showQuestionFour);
}
function showQuestionFour(e) {
    e.preventDefault();
    if (document.querySelector('#three-a').checked) {
        answerA++;
    }
    if (document.querySelector('#three-b').checked) {
        answerB++;
    }
    if (document.querySelector('#three-c').checked) {
        answerC++;
    }
    if (document.querySelector('#three-d').checked) {
        answerD++;
    }
    if (document.querySelector('#three-e').checked) {
        answerE++;
    }

    gsap.to('.question-containerFour', {
        opacity: 1,
        duration: 1
    })
    document.querySelector('.question-containerThree').style.display = 'none';
    document.querySelector('.question-containerFour').style.display = 'block';
    buttonThree.style.display = 'none';
    buttonFour.style.display = 'block';
    buttonFour.addEventListener('click', showQuestionFive);
}
function showQuestionFive(e) {
    e.preventDefault();
    if (document.querySelector('#four-a').checked) {
        answerA++;
    }
    if (document.querySelector('#four-b').checked) {
        answerB++;
    }
    if (document.querySelector('#four-c').checked) {
        answerC++;
    }
    if (document.querySelector('#four-d').checked) {
        answerD++;
    }
    if (document.querySelector('#four-e').checked) {
        answerE++;
    }

    gsap.to('.question-containerFive', {
        opacity: 1,
        duration: 1
    })
    document.querySelector('.question-containerFour').style.display = 'none';
    document.querySelector('.question-containerFive').style.display = 'block';
    buttonFour.style.display = 'none';
    buttonFive.style.display = 'block';
    buttonFive.addEventListener('click', showQuestionSix);
}
function showQuestionSix(e) {
    e.preventDefault();
    if (document.querySelector('#five-a').checked) {
        answerA++;
    }
    if (document.querySelector('#five-b').checked) {
        answerB++;
    }
    if (document.querySelector('#five-c').checked) {
        answerC++;
    }
    if (document.querySelector('#five-d').checked) {
        answerD++;
    }
    if (document.querySelector('#five-e').checked) {
        answerE++;
    }

    gsap.to('.question-containerSix', {
        opacity: 1,
        duration: 1
    })
    document.querySelector('.question-containerFive').style.display = 'none';
    document.querySelector('.question-containerSix').style.display = 'block';
    buttonFive.style.display = 'none';
    buttonSix.style.display = 'block';
    buttonSix.addEventListener('click', showQuestionSeven);
}
function showQuestionSeven(e) {
    e.preventDefault();
    if (document.querySelector('#six-a').checked) {
        answerA++;
    }
    if (document.querySelector('#six-b').checked) {
        answerB++;
    }
    if (document.querySelector('#six-c').checked) {
        answerC++;
    }
    if (document.querySelector('#six-d').checked) {
        answerD++;
    }
    if (document.querySelector('#six-e').checked) {
        answerE++;
    }

    gsap.to('.question-containerSeven', {
        opacity: 1,
        duration: 1
    })
    document.querySelector('.question-containerSix').style.display = 'none';
    document.querySelector('.question-containerSeven').style.display = 'block';
    buttonSix.style.display = 'none';
    buttonSeven.style.display = 'block';
    buttonSeven.addEventListener('click', showQuestionEight);
}
function showQuestionEight(e) {
    e.preventDefault();
    if (document.querySelector('#seven-a').checked) {
        answerA++;
    }
    if (document.querySelector('#seven-b').checked) {
        answerB++;
    }
    if (document.querySelector('#seven-c').checked) {
        answerC++;
    }
    if (document.querySelector('#seven-d').checked) {
        answerD++;
    }
    if (document.querySelector('#seven-e').checked) {
        answerE++;
    }

    gsap.to('.question-containerEight', {
        opacity: 1,
        duration: 1
    })
    document.querySelector('.question-containerSeven').style.display = 'none';
    document.querySelector('.question-containerEight').style.display = 'block';
    buttonSeven.style.display = 'none';
    buttonEight.style.display = 'block';
    buttonEight.addEventListener('click', showAnswers);
}
function showAnswers(e) {
    e.preventDefault();
    if (document.querySelector('#eight-a').checked) {
        answerA++;
    }
    if (document.querySelector('#eight-b').checked) {
        answerB++;
    }
    if (document.querySelector('#eight-c').checked) {
        answerC++;
    }
    if (document.querySelector('#eight-d').checked) {
        answerD++;
    }
    if (document.querySelector('#eight-e').checked) {
        answerE++;
    }

    gsap.to('.showYourChoice', {
        opacity: 1,
        duration: 1
    })
    buttonEight.style.display = 'none';
    document.querySelector('.question-containerEight').style.display = 'none';
    if (answerA <= 8 && answerA >= 4) {
        document.querySelector('.showYourChoice').innerHTML = `Yoga is likely new to you. You may also be looking for a gentle way to stay active or stretch out as a means for alleviating injury-related issues, finding the harmony. You might enjoy a basic, peaceful and passive practice, so we recommend you try <span class='style-choice'>Hatha yoga</span> or <span class='style-choice'>Nidra yoga</span>.`;
    }
    if (answerB <= 8 && answerB >= 4) {
        document.querySelector('.showYourChoice').innerHTML = `You’ve tried yoga before, and have no issues that you’re trying to overcome physically – you’re simply looking to learn more about the practice on a spiritual and physical level. Our guess is you’ll enjoy <span class='style-choice'>Vinyasa yoga</span> or <span class='style-choice'>Hatha yoga</span>.`
    }
    if (answerC <= 8 && answerC >= 4) {
        document.querySelector('.showYourChoice').innerHTML = `You have a firm grasp on the practice of yoga, and are looking to deepen your practice spiritually and physically to reflect your overall lifestyle. You might want to try <span class='style-choice'>Ashtanga yoga</span>, <span class='style-choice'>Kundalini yoga</span>.`
    }
    if (answerD <= 8 && answerD >= 4) {
        document.querySelector('.showYourChoice').innerHTML = `You’re a fitness fanatic who loves a good challenge and a decent sweat. Working out is a pastime – not a chore! You like to practice yoga because it’s one of the many ways you can switch up your routine, but the spiritual aspect is not appealing to you. You might want to try <span class='style-choice'>Vinyasa yoga</span> or <span class='style-choice'>Ashtanga yoga</span>.`
    }
    if (answerE <= 8 && answerE >= 4) {
        document.querySelector('.showYourChoice').innerHTML = `You’re a diehard yogi who enjoys both the physical and spiritual aspects the practice brings you. Because you practice yoga so much, it’s important that you feel inspired and challenged. You might want to try <span class='style-choice'>Ashtanga Yoga</span> or <span class='style-choice'>Kundalini yoga</span>.`
    } else {
        document.querySelector('.showYourChoice').innerHTML = `We advise you to take advantage of our offer and come to a free trial class, where our instructors will select the right class for you!`;
    }
}

//Pricing changed color
const priceList = document.querySelectorAll('.price-box');
priceList.forEach(item => {
    item.addEventListener('mouseover', function() {
        removeFocus();
        item.classList.add('changed-color');
    });
})
function removeFocus() {
    priceList.forEach(item => {
        item.classList.remove('changed-color');
    })
}






