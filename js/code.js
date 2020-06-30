TweenMax.from("header", 2, {
    width: "0%",
    delay: .2,
    ease: Expo.easeInOut
  })

  TweenMax.from(['.title', '.menu-btn'], 1.2, {
      opacity: "0",
      delay: 1,
      ease: Expo.easeInOut
  })

TweenMax.from(".welcome", 1.2, {
    bottom: "-100%",  
    delay: 1.5,
    ease: Expo.easeInOut
  })

  //Menu Trigger
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  }) 

