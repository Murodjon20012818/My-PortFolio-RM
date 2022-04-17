window.addEventListener('DOMContentLoaded', () => {

  const loader = document.querySelector('.loader');
    setTimeout( ()=> {
      loader.style.opacity = "0"
      setTimeout(() => {
        loader.style.display = "none";
      }, 500)
    },2000 
  );


  // new idea

  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  });

  const menuBtn = document.querySelector('.fa-bars'),
  menuClose = document.querySelector('.fa-close'),
  navigation = document.querySelector('.navigation'),
  navigationItems = document.querySelectorAll('.navigation a');

  menuBtn.addEventListener('click', () => {
    menuClose.style.display = 'inline-block';
    menuBtn.style.opacity = '0';
    navigation.classList.toggle('active');
  })

  menuClose.addEventListener('click', () => {
    menuBtn.style.opacity = '1';
    menuClose.style.display = 'none';
    navigation.classList.remove('active');
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navigation.classList.remove('active')
      menuBtn.style.opacity = '1';
      menuClose.style.display = 'none';
    });
  });


  const scrollBtn = document.querySelector('.scrollToTop-btn');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500);
  })

  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;
      
      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active1');
      }
    }
  })

  const viewAllWork = document.querySelector('.viewWork'),
  cards = document.querySelectorAll('.Card');
  let a = true;
  viewAllWork.addEventListener('click', () => {
    cards.forEach((item) => {
      item.classList.toggle('plus');
    })
    if(a){
      viewAllWork.innerHTML = 'Back Work';
      a = false;
    } else {
      viewAllWork.innerHTML = 'See All'
      a = true;
    }
  });
});