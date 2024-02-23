var tl = gsap.timeline();
gsap.set(".common-flip-style", {
    opacity: 0,
    scale:0
  });
gsap.set(".a", {
  opacity: 0,
  y: 10,
});



tl
.to(".a", {
  delay: 1,
  stagger: 0.2,
  opacity: 1,
  y: 0,
  duration: 1,

  ease: "Expo.easeinOut",
})
.to(".common-flip-style", {
  opacity: 1,
  scale:1,
  delay : -2,
  ease: "Expo.easeinOut",
});

// gsap

// gsap.from(".hometext", {
//   width: 0,
//   duration: 4,
//   ease: Expo.easeInOut,
// });

// gsap
