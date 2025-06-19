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