document.addEventListener('DOMContentLoaded', () => {
  const jobs = [
    {
      id: 'job-frontend-1',
      title: 'Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      type: 'Frontend Development',
      description: 'Build responsive and interactive web apps using React, HTML, and CSS.',
      applyLink: 'https://example.com/apply/frontend'
    },
    {
      id: 'job-backend-1',
      title: 'Backend Developer',
      company: 'Innovatech Solutions',
      location: 'New York, USA',
      type: 'Backend Development',
      description: 'Work on scalable APIs and databases using Node.js and MongoDB.',
      applyLink: 'https://example.com/apply/backend'
    },
    {
      id: 'job-fullstack-1',
      title: 'Full Stack Developer',
      company: 'NextGen Web',
      location: 'San Francisco, USA',
      type: 'Full Stack',
      description: 'Develop end-to-end solutions using JavaScript frameworks (React + Node).',
      applyLink: 'https://example.com/apply/fullstack'
    },
    {
      id: 'job-mobile-1',
      title: 'Mobile App Developer',
      company: 'Appify Co.',
      location: 'Remote',
      type: 'Mobile Development',
      description: 'Create cross-platform mobile applications using Flutter or React Native.',
      applyLink: 'https://example.com/apply/mobile'
    }
  ];

  const jobsList = document.getElementById('jobs-list');
  const searchInput = document.getElementById('job-search');
  const categoryFilter = document.getElementById('job-category');

  function renderJobs(list) {
    jobsList.innerHTML = '';
    if (list.length === 0) {
      jobsList.innerHTML = `<p class="muted">No jobs found.</p>`;
      return;
    }

    list.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.className = 'job-card';
      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Category:</strong> ${job.type}</p>
        <p>${job.description}</p>
        <a class="btn-primary" href="${job.applyLink}" target="_blank">Apply Now</a>
      `;
      jobsList.appendChild(jobCard);
    });
  }

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const cat = categoryFilter.value;
    const filtered = jobs.filter(j => {
      const matchesQ = !q || (j.title.toLowerCase().includes(q) || j.description.toLowerCase().includes(q));
      const matchesCat = !cat || j.type.toLowerCase() === cat.toLowerCase();
      return matchesQ && matchesCat;
    });
    renderJobs(filtered);
  }

  renderJobs(jobs);

  searchInput.addEventListener('input', debounce(applyFilters, 200));
  categoryFilter.addEventListener('change', applyFilters);

  function debounce(fn, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), wait);
    };
  }
});
