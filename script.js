// small interactions: mobile nav, copy email, contact form handling
document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle){
    navToggle.addEventListener('click', () => {
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
    });
  }

  // resume button (demo: downloads resume.pdf if available)
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn && downloadBtn.addEventListener('click', () => {
    // default behavior: navigate to resume.pdf in same folder
    window.open('resume.pdf', '_blank');
  });

  // copy email
  const copyBtn = document.getElementById('copyEmail');
  copyBtn && copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('hello@kajal.design');
      copyBtn.textContent = 'copied ✓';
      setTimeout(()=> copyBtn.textContent = "copy email", 1600);
    } catch(e) {
      alert('Copy failed — please copy manually: hello@kajal.design');
    }
  });

  // simple contact form (demo)
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name').trim();
    // In production, send to serverless endpoint or email service.
    alert(`thanks ${name || 'there'} — message received. (This demo doesn't send emails)`);
    form.reset();
  });

  // smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        ev.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
