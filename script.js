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

    /* ================= EMAIL VALIDATION ================= */
    const emailInput = form.querySelector('input[type="email"]');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailInput.addEventListener('input', () => {
      if (emailRegex.test(emailInput.value)) {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
      } else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
      }
    });

    /* ================= NAME VALIDATION ================= */
    const firstNameInput = form.querySelector('#first_name'); // optional
    const lastNameInput = form.querySelector('#last_name');   // required (if you want)

    const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;

    function validateName(input, isRequired) {
      const value = input.value.trim();

      // If NOT required and empty → valid
      if (!isRequired && value === '') {
        input.classList.remove('is-invalid');
        input.classList.remove('is-valid');
        return true;
      }

      if (nameRegex.test(value)) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
      } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
      }
    }

    // LIVE VALIDATION
    firstNameInput.addEventListener('input', () =>
      validateName(firstNameInput, false) // NOT required
    );

    lastNameInput.addEventListener('input', () =>
      validateName(lastNameInput, true) // REQUIRED
    );

    /* ================= FORM SUBMIT ================= */
    form.addEventListener('submit', event => {

      const isEmailValid = emailRegex.test(emailInput.value);
      const isFirstNameValid = validateName(firstNameInput, false);
      const isLastNameValid = validateName(lastNameInput, true);

      if (!form.checkValidity() || !isEmailValid || !isFirstNameValid || !isLastNameValid) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });

  });
})();





