 const registerBtns = document.querySelectorAll('.register');
  const formContainer = document.getElementById('form_container');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close_form');

  registerBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      formContainer.classList.add('active');
      overlay.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', function() {
    formContainer.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', function() {
    formContainer.classList.remove('active');
    this.classList.remove('active');
  });



  document.querySelectorAll('.faq-head').forEach(head => {
  head.addEventListener('click', () => {
    const parent = head.parentElement;
    parent.classList.toggle('active');
  });
});


  const faqLinks = document.querySelectorAll('.faq-link a');
faqLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    faqLinks.forEach(l => l.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});



const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");
  const icon = toggle.querySelector("i");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });
