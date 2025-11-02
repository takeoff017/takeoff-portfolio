// Auto-update year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Scroll Reveal for sections, projects, testimonials, blogs
const revealElements = document.querySelectorAll('.project-card, .testimonial-card, .blog-card, .about-inner');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.15});
revealElements.forEach(el=>observer.observe(el));

// Hero Carousel Auto Slide
const carousel = document.querySelector('.carousel');
if(carousel){
  const images = carousel.querySelectorAll('img');
  let current = 0;
  images[current].classList.add('active');
  setInterval(()=>{
    images[current].classList.remove('active');
    current = (current+1) % images.length;
    images[current].classList.add('active');
  },4000);
}

// Optional: Animate skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.transform='scale(1)';
      entry.target.style.opacity='1';
      skillObserver.unobserve(entry.target);
    }
  });
},{threshold:0.3});
skillCards.forEach(card=>{
  card.style.transform='scale(0.95)';
  card.style.opacity='0';
  skillObserver.observe(card);
});
