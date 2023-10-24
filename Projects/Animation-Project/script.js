const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opactiy: 0
})

Shery.textAnimate("#headings h1",{
    style: 2,
    y: 10,
    delay: .3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2", {
    y: 50,
    stagger: .3,
    opactiy: 0,
    ease: Expo,
    duration: 1,
})

// Shery.imageEffect("#imgntext img", {
//     style: 3,
//     debug: true,
// })

// Shery.imageEffect('#bimg img', {
//     style: 6,
//     debug: true,
//     gooey: true,
// })