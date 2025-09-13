window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html';
  }
});

function logout() {
  localStorage.removeItem('loggedIn');
  alert('Logged out successfully');
  window.location.href = 'login.html';
}
