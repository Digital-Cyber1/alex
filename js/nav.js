let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the navbar
    document.getElementById('nav-open').classList.add('visible');
    document.getElementById('nav-open').classList.remove('non-visible');
  } else {
    // Scrolling down, hide the navbar
    document.getElementById('nav-open').classList.add('non-visible');
    document.getElementById('nav-open').classList.remove('visible');
  }

  prevScrollPos = currentScrollPos;
};
