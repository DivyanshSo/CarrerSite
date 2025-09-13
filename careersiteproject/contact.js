window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const courseTitle = params.get('course');
  if (courseTitle) {
    document.getElementById('course-input').value = decodeURIComponent(courseTitle);
    document.getElementById('topic').value = 'courses';
  }

  document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById('form-status');

    // Basic validation
    const requiredFields = ['name', 'email', 'message'];
    let valid = true;
    requiredFields.forEach(id => {
      const field = document.getElementById(id);
      if (!field.value.trim()) {
        field.style.border = '2px solid red';
        valid = false;
      } else {
        field.style.border = '';
      }
    });

    if (!valid) {
      statusDiv.textContent = '⚠️ Please fill all required fields.';
      statusDiv.style.color = 'orange';
      return;
    }

    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      statusDiv.textContent = '🎉 Thank you! Your enrollment has been submitted.';
      statusDiv.style.color = 'green';
      form.reset();
    } else {
      statusDiv.textContent = '😞 Oops! There was an error submitting your enrollment.';
      statusDiv.style.color = 'red';
    }
  });
});
