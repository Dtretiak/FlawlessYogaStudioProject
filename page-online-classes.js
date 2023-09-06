gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.img-suitable-container', {
    scrollTrigger: {
        trigger: '.who-suitable-container',
        start: '-=50% top'
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.who-suitable-container',
        start: '-=50% top'
    },
    opacity: 1,
    x: 0, 
    duration: 1
})

gsap.fromTo('#myVideo', {
    scrollTrigger: {
        trigger: '.who-suitable-container',
        start: '+=50% top'
    },
    opacity: 0
}, {
    scrollTrigger: {
    trigger: '.who-suitable-container',
    start: '+=50% top'
    },
    opacity: 1,
    duration: 2
})