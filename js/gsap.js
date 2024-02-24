// var tl = gsap.timeline();
// gsap.set(".common-flip-style", {
//   opacity: 0,
//   scale: 0,
// });
// gsap.set(".a", {
//   opacity: 0,
//   y: 10,
// });
// gsap.set(".bar1", {
//   opacity: 0,
// });
// gsap.set(".bar2", {
//   opacity: 0,
// });
// gsap.set(".bar3", {
//   opacity: 0,
// });
// gsap.set(".bar4", {
//   opacity: 0,
// });
// gsap.set("#logo", {
//   opacity: 0,
// });

// tl.to("#logo", {
//   opacity: 1,
//   duration: 0.3,
//   delay: 0.2,
//   ease: "Expo.easeinOut",
// })
//   .to(".bar1", {
//     opacity: 1,
//     duration: 0.3,
//     ease: "Expo.easeinOut",
//   })
//   .to(".bar2", {
//     opacity: 1,
//     duration: 0.3,
//     ease: "Expo.easeinOut",
//   })
//   .to(".bar3", {
//     opacity: 1,
//     duration: 0.3,
//     ease: "Expo.easeinOut",
//   })
//   .to(".bar4", {
//     opacity: 1,
//     duration: 0.3,
//     ease: "Expo.easeinOut",
//   })
//   .to(".a", {
//     delay: 1,
//     stagger: 0.2,
//     opacity: 1,
//     y: 0,
//     duration: 1,

//     ease: "Expo.easeinOut",
//   })
//   .to(".common-flip-style", {
//     opacity: 1,
//     scale: 1,
//     duration: 1,
//     delay: -2,
//     ease: "Expo.easeinOut",
//   })
//   .from("#back-to-top-container", {
//     y: "-100%",
//     opacity: 0,
//     scale: 2,
//     rotate: 360,
//     duration: 1,
//     ease: "Expo.easeinOut",
//   });

// gsap.from("#aboutHeading h1", {
//   scale: 2,
//   opacity: 0,
//   duration: 1,

//   scrollTrigger: {
//     trigger: "#aboutHeading h1",
//     scroller: "body",
//     scrub: 2,
//   },
// });
// gsap.from(".aboutimg", {
//   opacity: 0,
//   duration: 1,
//   x: 10,
//   scrollTrigger: {
//     trigger: ".aboutimg",
//     scroller: "body",
//     scrub: 1,
//     start: "top 80%",
//     end: "bottom 20%",
//   },
// });
// gsap.from(".aboutContent", {
//   opacity: 0,
//   duration: 1,
//   x: 10,
//   scrollTrigger: {
//     trigger: ".aboutContent",
//     scroller: "body",
//     scrub: 1,
//     start: "top 80%",
//     end: "bottom 20%",
//   },
// });

// // skills

// gsap.from("#skillsheading h2", {
//   scale: 2,
//   opacity: 0,
//   duration: 1,

//   scrollTrigger: {
//     trigger: "#skillsheading h2",
//     scroller: "body",
//     scrub: 2,
//   },
// });
// gsap.from(".skillBoxes", {
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".skillBoxes",
//     scroller: "body",
//     scrub: 2,
//     start: "top 80%",
//     end: "bottom 20%",
//   },
// });

// //   education

// gsap.from("#eduheading h1", {
//   scale: 2,
//   opacity: 0,
//   duration: 1,

//   scrollTrigger: {
//     trigger: "#eduheading h1",
//     scroller: "body",
//     scrub: 2,
//   },
// });

// gsap.from(".educard1", {
//   x: "-100%",
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".educard1",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none",
//   },
// });
// gsap.from(".educard2", {
//   x: "100%",
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".educard2",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none",
//   },
// });
// gsap.from(".educard3", {
//   x: "-100%",
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".educard3",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none",
//   },
// });

// //projects

// gsap.from("#projectheading h1", {
//   scale: 2,
//   opacity: 0,
//   duration: 1,

//   scrollTrigger: {
//     trigger: "#projectheading h1",
//     scroller: "body",
//     scrub: 2,
//   },
// });

// //contact

// gsap.from("#contactheading h1", {
//   scale: 2,
//   opacity: 0,
//   duration: 1,

//   scrollTrigger: {
//     trigger: "#contactheading h1",
//     scroller: "body",
//     scrub: 2,
//   },
// });

// gsap.from(".contactImg", {
//   x: "-100%",
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".contactImg",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none",
//   },
// });
// gsap.from(".contactForm", {
//   x: "100%",
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".contactForm",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none",
//   },
// });
// gsap.from(".letsChat", {
//   width: 0,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".letsChat",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none",
//   },
// });

// // footer

// gsap.from(".footer1", {
//   y: 10,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".footer1",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none",
//   },
// });
// gsap.from(".footer2", {
//   y: 10,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".footer2",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none",
//   },
// });
// gsap.from(".footer3", {
//   y: 10,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".footer3",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none",
//   },
// });

function flyToTop() {
    gsap.to("#back-to-top-button img", {
      y: -900,
      scale: 2, 
      duration: 2, 
      onUpdate: function() {
        document.getElementById("rocket").src = "./assets/rocket.png";
      },
      onComplete: function() {
        window.scrollTo(0, 0); 
        document.getElementById("rocket").src = "./assets/rocketfireless.png";
        gsap.to("#back-to-top-button img", {
          y: 0, 
          rotation: 0, 
          scale: 1, 
          duration: 0 
        });
      }
    });
  }