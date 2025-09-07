document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-button');
  const userInput = document.getElementById('user-input');

  searchBtn.addEventListener('click', async () => {
    const username = userInput.value.trim();
    if (!username) {
      alert('Please enter a username');
      return;
    }

    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
      const data = await response.json();

      if (data.status !== 'success') {
        alert('User not found or API error');
        return;
      }

      updateCircle('.easy-progress', data.easySolved, 500, 'green');
      updateCircle('.medium-progress', data.mediumSolved, 1000, 'orange');
      updateCircle('.hard-progress', data.hardSolved, 1000, 'red');

      document.getElementById('easy-label').textContent = data.easySolved;
      document.getElementById('medium-label').textContent = data.mediumSolved;
      document.getElementById('hard-label').textContent = data.hardSolved;

      document.querySelector('.stats-card').innerHTML = `
        <h2>Stats for ${username}</h2>
        <p><strong>Total Solved:</strong> ${data.totalSolved}</p>
        <p><strong>Ranking:</strong> ${data.ranking}</p>
        <p><strong>Contribution:</strong> ${data.contributionPoints}</p>
        <p><strong>Reputation:</strong> ${data.reputation}</p>
      `;
    } catch (error) {
      alert('Failed to fetch data');
    }
  });

  function updateCircle(selector, value, max, color) {
    const percent = Math.min(100, Math.round((value / max) * 100));
    const circle = document.querySelector(selector);
    circle.style.background = `conic-gradient(${color} ${percent}%, transparent ${percent}%)`;
  }

  function displayUserData(data){
    
  }
});
