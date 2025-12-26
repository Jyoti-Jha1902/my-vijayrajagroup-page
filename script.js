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

    const firstName = form.querySelector('#first_name');
    const lastName  = form.querySelector('#last_name');
    const email     = form.querySelector('#email');

    const nameRegex  = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    /* ===== First Name (optional) ===== */
     /* ===== First Name (optional) ===== */
    firstName.addEventListener('input', () => {
      if (nameRegex.test(firstName.value.trim())) {
        firstName.setCustomValidity('');
      } else {
        firstName.setCustomValidity('Invalid name');
      }
    });;

    /* ===== Last Name (required) ===== */
    lastName.addEventListener('input', () => {
      if (nameRegex.test(lastName.value.trim())) {
        lastName.setCustomValidity('');
      } else {
        lastName.setCustomValidity('Invalid name');
      }
    });

    /* ===== Email ===== */
    email.addEventListener('input', () => {
      if (emailRegex.test(email.value.trim())) {
        email.setCustomValidity('');
      } else {
        email.setCustomValidity('Invalid email');
      }
    });

    /* ===== Submit ===== */
    form.addEventListener('submit', event => {

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });

  });
})();









