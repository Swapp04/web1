// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Adding dynamic scroll effects (optional)
  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.feature-item, .blog-post');
    elements.forEach(el => {
      if (isElementInView(el)) {
        el.classList.add('animate');
      }
    });
  });
  
  function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
  }
  // Add sticky class to header when scrolling
window.onscroll = function() {stickyHeader()};

function stickyHeader() {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Smooth scroll animation on page load
window.addEventListener("load", function() {
    document.querySelector('.hero').classList.add('fadeIn');
});
