$(document).ready(function () {
    const $navbar = $('.sidebar');
    const $toggle = $('.toggle-button');
  
    // Toggle sidebar on mobile
    $toggle.click(function () {
      $navbar.toggleClass("toggle-left");
    });
  
    // Highlight active nav link
    $('a.nav-link').click(function(){
      $('a.nav-link').removeClass('active');
      $(this).addClass('active');
    });
  });
  
  // Typed.js animations
  setTimeout(() => {
    new Typed('#typed', {
      strings: ['Frontend Developer', 'UI/UX Enthusiast', 'Web Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
  
    new Typed('#typed_2', {
      strings: ['Frontend Developer', 'UI/UX Enthusiast', 'Web Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
  }, 300);