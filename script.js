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

// (() => {
//   'use strict';

//   const forms = document.querySelectorAll('.needs-validation');

//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       form.classList.add('was-validated');
//     }, false);
//   });
// })();

// (() => {
//   'use strict';

//   const forms = document.querySelectorAll('.needs-validation');

//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {

//       // EMAIL STRICT VALIDATION
//       const emailInput = form.querySelector('input[type="email"]');
//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//       if (!emailRegex.test(emailInput.value)) {
//         emailInput.setCustomValidity('Invalid');
//       } else {
//         emailInput.setCustomValidity('');
//       }

//       // FINAL CHECK
//       if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//       }

//       form.classList.add('was-validated');
//     }, false);
//   });
// })();


// ======================================================================
// (() => {
//   'use strict';

//   const forms = document.querySelectorAll('.needs-validation');

//   Array.from(forms).forEach(form => {

//     const emailInput = form.querySelector('input[type="email"]');
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     // REAL-TIME EMAIL VALIDATION
//     emailInput.addEventListener('input', () => {
//       if (emailRegex.test(emailInput.value)) {
//         emailInput.setCustomValidity('');
//         emailInput.classList.remove('is-invalid');
//         emailInput.classList.add('is-valid');
//       } else {
//         emailInput.setCustomValidity('Invalid');
//         emailInput.classList.remove('is-valid');
//         emailInput.classList.add('is-invalid');
//       }
//     });

//     // FORM SUBMIT
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       form.classList.add('was-validated');
//     });

//   });
// })();

// ========================for name validation only letters ==============================
// (() => {
//   'use strict';

//   const forms = document.querySelectorAll('.needs-validation');

//   Array.from(forms).forEach(form => {

//     /* ================= EMAIL VALIDATION ================= */
//     const emailInput = form.querySelector('input[type="email"]');
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     emailInput.addEventListener('input', () => {
//       if (emailRegex.test(emailInput.value)) {
//         emailInput.classList.remove('is-invalid');
//         emailInput.classList.add('is-valid');
//       } else {
//         emailInput.classList.remove('is-valid');
//         emailInput.classList.add('is-invalid');
//       }
//     });

//     /* ================= NAME VALIDATION ================= */
//     const firstNameInput = form.querySelector('#first_name'); // optional
//     const lastNameInput = form.querySelector('#last_name');   // required (if you want)

//     const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;

//     function validateName(input, isRequired) {
//       const value = input.value.trim();

//       // If NOT required and empty → valid
//       if (!isRequired && value === '') {
//         input.classList.remove('is-invalid');
//         input.classList.remove('is-valid');
//         return true;
//       }

//       if (nameRegex.test(value)) {
//         input.classList.remove('is-invalid');
//         input.classList.add('is-valid');
//         return true;
//       } else {
//         input.classList.remove('is-valid');
//         input.classList.add('is-invalid');
//         return false;
//       }
//     }

//     // LIVE VALIDATION
//     firstNameInput.addEventListener('input', () =>
//       validateName(firstNameInput, false) // NOT required
//     );

//     lastNameInput.addEventListener('input', () =>
//       validateName(lastNameInput, true) // REQUIRED
//     );

//     /* ================= FORM SUBMIT ================= */
//     form.addEventListener('submit', event => {

//       const isEmailValid = emailRegex.test(emailInput.value);
//       const isFirstNameValid = validateName(firstNameInput, false);
//       const isLastNameValid = validateName(lastNameInput, true);

//       if (!form.checkValidity() || !isEmailValid || !isFirstNameValid || !isLastNameValid) {
//         event.preventDefault();
//         event.stopPropagation();
//       }

//       form.classList.add('was-validated');
//     });

//   });
// })();

// ===============================for adding bootstrap css alert===============================
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
    firstName.addEventListener('input', () => {
      if (nameRegex.test(firstName.value.trim())) {
        firstName.setCustomValidity('');
      } else {
        firstName.setCustomValidity('Invalid name');
      }
    });

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


// ==========================================================================================


function handleSubmit(event) {
  const form = event.target;

  // Trigger bootstrap validation
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
    return false; // ❌ Don't submit, ❌ don't show modal
  }

  // ✅ Valid form — submit to Salesforce
  form.classList.add('was-validated');

  // Show modal AFTER successful submit
  setTimeout(() => {
    const modal = new bootstrap.Modal(
      document.getElementById('successModal')
    );
    modal.show();
  }, 500);

  return true; // ✅ submit form
}

// Reload page & hide modal
function reloadPage() {
  window.location.reload();
}




