gsap.registerPlugin(ScrollTrigger)
gsap.fromTo('.instructor-maria-container, .instructor-maria-container-two', {
    scrollTrigger: {
        trigger: '.instructor-container',
        start: '-=40% top'
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.instructor-container',
        start: '-=40% top'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: .3
})

gsap.fromTo('.first-pic-hatha, .second-pic-hatha', {
    scrollTrigger: {
        trigger: '.hatha-container',
        start: '-=40% top'
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.hatha-container',
        start: '-=40% top'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: .3
})

gsap.fromTo('.instructor-helen-container, .instructor-helen-container-two', {
    scrollTrigger: {
        trigger: '.instructor-helen-container',
        start: '-=60% top'
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.instructor-helen-container',
        start: '-=60% top'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: .3
})

gsap.fromTo('.first-pic-nidra, .second-pic-nidra', {
    scrollTrigger: {
        trigger: '.second-pic-nidra',
        start: '-=60% top'
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.second-pic-nidra',
        start: '-=60% top'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: .3
})

gsap.fromTo('.instructor-kate-container, .instructor-kate-container-two', {
    scrollTrigger: {
        trigger: '.instructor-kate-container',
        start: '-=60% top'
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.instructor-kate-container',
        start: '-=60% top'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: .3
})