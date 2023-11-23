let currentStep = 1;  // multiple form

function nextStep() {
  if (validateStep(currentStep)) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add('active');
  }
}

function prevStep() {
  document.getElementById(`step${currentStep}`).classList.remove('active');
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add('active');
}

function submitForm() {
  if (validateStep(currentStep)) {
    alert('Form submitted successfully!');
    window.location.href = "register.html";
    // when its submitted, it refreshes page
  }
}

function validateStep(step) {
  if (step === 1) {
    // validate step 1
    const name = document.getElementById('name').value.trim();
    if (name === '') {
      alert('Please enter your name.');
      return false;
    }
  } else if (step === 2) {
    // validate step2
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  } else if (step === 3) {
    // validate step3
    const password = document.getElementById('password').value.trim();
    const passwordRegex = /^.{8,}$/;

    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters.');
      return false;
    }
  }

  return true;
}
