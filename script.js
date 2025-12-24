$(document).ready(function () {
  $('.property-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 }
    }
  });
});

// ===============================================

$(document).ready(function () {
  $('.featured-slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 4500,
    smartSpeed: 800
  });
});


// Example starter JavaScript for disabling form submissions if there are invalid fields

(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {

    const emailInput = form.querySelector('input[type="email"]');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // REAL-TIME EMAIL VALIDATION
    emailInput.addEventListener('input', () => {
      if (emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity('');
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
      } else {
        emailInput.setCustomValidity('Invalid');
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
      }
    });

    // FORM SUBMIT
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });

  });
})();



