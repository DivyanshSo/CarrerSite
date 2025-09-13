// courses.js
document.addEventListener('DOMContentLoaded', () => {
  // Enhanced course data with additional fields
  const courses = [
    {
      id: 'web-dev',
      title: 'Web Development Bootcamp',
      short: 'Master Modern Web Development',
      desc: 'Comprehensive bootcamp covering frontend and backend development.',
      topics: [
        'HTML5 & CSS3 Mastery',
        'JavaScript ES6+ & DOM',
        'React.js Development',
        'Node.js & Express',
        'MongoDB & APIs',
        'DevOps & Deployment'
      ],
      duration: '12 weeks',
      level: 'Beginner → Advanced',
      category: 'web',
      image: "assets/images/web-development.jpg",
      price: "$599",
      rating: 4.8,
      students: 1200,
      isNew: true
    },
    {
      id: 'data-science',
      title: 'Data Science',
      short: 'Data analysis & visualization with Python',
      desc: 'Learn Python, Pandas, data cleaning, visualization, and statistics. Hands-on projects with real datasets and a capstone project.',
      topics: ['Python basics','Pandas & NumPy','Data Visualization','Statistics','Capstone Project'],
      duration: '10 weeks',
      level: 'Beginner → Intermediate',
      category: 'data',
      image: "assets/images/data-science.jpg",
      price: "$399",
      description: "Master data analysis and visualization with Python.",
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      short: 'Build predictive models & understand ML algorithms',
      desc: 'Supervised and unsupervised learning, model evaluation, and deployment. Practical labs with scikit-learn and introduction to deep learning.',
      topics: ['Regression & Classification','Model evaluation','Clustering','Intro to Neural Nets'],
      duration: '10 weeks',
      level: 'Intermediate',
      category: 'ml',
      image: "assets/images/machine-learning.jpg",
      price: "$499",
      description: "Dive into machine learning algorithms and applications.",
    },
    {
      id: 'cyber',
      title: 'Cybersecurity',
      short: 'Protect systems and learn security best practices',
      desc: 'Introduction to networks, common vulnerabilities, secure coding, and hands-on labs in ethical hacking and defense strategies.',
      topics: ['Network basics','Vulnerabilities & OWASP','Secure coding','Ethical hacking labs'],
      duration: '8 weeks',
      level: 'Beginner → Intermediate',
      category: 'security',
      image: "assets/images/cybersecurity.jpg",
      price: "$299",
      description: "Learn to protect systems and data.",
    },
    { 
      id: 'cloud',
      title: 'Cloud Computing',
      short: 'Learn cloud services and architecture with AWS',
      desc: 'Comprehensive course on cloud fundamentals, AWS services, architecture design, and hands-on labs for deploying applications in the cloud.',
      topics: ['Cloud fundamentals','AWS core services','Architecture design','Hands-on labs'],
      duration: '10 weeks',
      level: 'Beginner → Intermediate',
      category: 'cloud',
      image: "assets/images/cloud.jpg",
      price: "$399",
      description: "Master cloud computing with AWS.",

    },
    {
        id: 5,
        title: "Mobile App Development with React Native",
        short: "Create mobile apps using React Native",
        desc: "Learn to build mobile applications for iOS and Android using React Native framework.",
        topics: ["React Native Basics", "Native Components", "App Publishing", "Mobile UI/UX"],
        duration: "10 weeks",
        level: "Intermediate",
        category: "mobile",
        image: "assets/images/react-native.jpg",
        price: "$449",
        description: "Build cross-platform mobile apps.",
    },
    {
        id: 6,
        title: "UI/UX Design Masterclass",
        short: "Design stunning user interfaces and experiences",
        category: "design",
        image: "assets/images/ui-ux.jpg",
        duration: "8 weeks",
        level: "All Levels",
        price: "$349",
        description: "Master modern UI/UX design principles.",
        topics: ["Design Thinking", "Figma", "Prototyping", "User Research"]
    }
  ];

  // Enhanced card creation with more features
  function createCourseCard(course) {
    return `
      <article class="course-card" data-id="${course.id}">
        ${course.isNew ? '<span class="course-label label-new">New</span>' : ''}
        ${course.students > 1000 ? '<span class="course-label label-popular">Popular</span>' : ''}
        
        <img src="${course.image}" alt="${course.title}" loading="lazy">
        
        <div class="course-content">
          <h3>${course.title}</h3>
          <p>${course.short}</p>
          
          <div class="course-stats">
            <div class="course-rating">
              <span>★</span>
              <span>${course.rating.toFixed(1)}</span>
              <span>(${course.students} students)</span>
            </div>
          </div>

          <div class="progress-container">
            <div class="progress-bar" style="width: ${Math.random() * 100}%"></div>
          </div>
          
          <div class="course-meta">
            <span><i class="far fa-clock"></i> ${course.duration}</span>
            <span class="price-tag">${course.price}</span>
          </div>
          
          <button class="btn-primary view-details" data-id="${course.id}">
            View Details
          </button>
        </div>
      </article>
    `;
  }

  // Initialize the page
  document.addEventListener('DOMContentLoaded', () => {
    const coursesGrid = document.getElementById('courses-grid');
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const modal = document.getElementById('course-modal');

    // Display all courses initially
    coursesGrid.innerHTML = courses.map(course => createCourseCard(course)).join('');

    // Enhanced filter functionality
    function filterCourses() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const grid = document.getElementById('courses-grid');

        grid.classList.add('loading');

        setTimeout(() => {
          const filtered = courses.filter(course => {
            const matchesSearch = 
              course.title.toLowerCase().includes(searchTerm) ||
              course.short.toLowerCase().includes(searchTerm) ||
              course.desc.toLowerCase().includes(searchTerm) ||
              course.topics.some(topic => topic.toLowerCase().includes(searchTerm));
            
            const matchesCategory = !category || course.category === category;
            
            return matchesSearch && matchesCategory;
          });

          grid.innerHTML = filtered.length ? 
            filtered.map(createCourseCard).join('') : 
            '<p class="no-results">No courses found matching your criteria</p>';
          
          grid.classList.remove('loading');
        }, 500); // Simulate loading
      }

    // Enhanced modal functionality
    function showCourseDetails(courseId) {
        const course = courses.find(c => c.id === courseId);
        if (!course) return;
  
        const modal = document.getElementById('course-modal');
        
        modal.querySelector('#modal-title').textContent = course.title;
        modal.querySelector('#modal-sub').innerHTML = `
          <span class="level">${course.level}</span> • 
          <span class="duration">${course.duration}</span> • 
          <span class="students">${course.students} enrolled</span>
        `;
        
        modal.querySelector('#modal-desc').textContent = course.desc;
        modal.querySelector('#modal-topics').innerHTML = 
          course.topics.map(topic => `
            <li><i class="fas fa-check"></i> ${topic}</li>
          `).join('');
  
        modal.querySelector('#enroll-link').href = 
          `contact.html?course=${encodeURIComponent(course.title)}`;
  
        modal.classList.add('active');
      }

    // Search and filter functionality
    function filterCourses() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;

        const filtered = courses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchTerm) ||
                                course.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !category || course.category === category;
            return matchesSearch && matchesCategory;
        });

        coursesGrid.innerHTML = filtered.map(course => createCourseCard(course)).join('');
    }

    searchInput.addEventListener('input', debounce(filterCourses, 300));
    categoryFilter.addEventListener('change', filterCourses);

    // Event Listeners
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('view-details')) {
        showCourseDetails(e.target.dataset.id);
      }
      if (e.target.classList.contains('modal-close') || 
          e.target.classList.contains('modal-backdrop')) {
        document.getElementById('course-modal').classList.remove('active');
      }
    });

    // Close modal
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-close') || 
            e.target.hasAttribute('data-dismiss')) {
            modal.classList.remove('active');
        }
    });
});

  const grid = document.getElementById('courses-grid');
  const search = document.getElementById('search');
  const filter = document.getElementById('category-filter');

  function render(list) {
    grid.innerHTML = '';
    if (list.length === 0) {
      grid.innerHTML = `<p class="muted">No courses found.</p>`;
      return;
    }

    list.forEach(course => {
      const card = document.createElement('article');
      card.className = 'course-card';
      card.innerHTML = `
        <div class="meta">
          <span class="badge">${course.category.toUpperCase()}</span>
          <span>${course.duration}</span>
        </div>
        <h3>${course.title}</h3>
        <p class="short">${course.short}</p>
        <div class="card-actions">
          <div><small>${course.level}</small></div>
          <div>
            <button class="btn-outline details-btn" data-id="${course.id}">View Details</button>
            <a class="btn-primary" href="contact.html?course=${encodeURIComponent(course.title)}">Enroll</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    // wire up detail buttons
    document.querySelectorAll('.details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const c = courses.find(x => x.id === id);
        openModal(c);
      });
    });
  }

  function applyFilters() {
    const q = search.value.trim().toLowerCase();
    const cat = filter.value;
    const filtered = courses.filter(c => {
      const matchesQ = !q || (c.title.toLowerCase().includes(q) || c.short.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
      const matchesCat = !cat || c.category === cat;
      return matchesQ && matchesCat;
    });
    render(filtered);
  }

  // initial render
  render(courses);

  // events
  search.addEventListener('input', debounce(applyFilters, 220));
  filter.addEventListener('change', applyFilters);

  // simple debounce
  function debounce(fn, wait) {
    let t;
    return function(...args){
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this,args), wait);
    };
  }

  // modal logic
  const modal = document.getElementById('course-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSub = document.getElementById('modal-sub');
  const modalDesc = document.getElementById('modal-desc');
  const modalTopics = document.getElementById('modal-topics');
  const modalDuration = document.getElementById('modal-duration');
  const modalLevel = document.getElementById('modal-level');
  const enrollLink = document.getElementById('enroll-link');

  function openModal(course) {
    if (!course) return;
    modalTitle.textContent = course.title;
    modalSub.textContent = course.short;
    modalDesc.textContent = course.desc;
    modalTopics.innerHTML = '';
    course.topics.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t;
      modalTopics.appendChild(li);
    });
    modalDuration.textContent = course.duration;
    modalLevel.textContent = course.level;
    enrollLink.href = `contact.html?course=${encodeURIComponent(course.title)}`;
    showModal();
  }

  function showModal() {
    modal.setAttribute('aria-hidden','false');
    // trap focus minimally
    document.body.style.overflow = 'hidden';
    // focus first focusable element inside modal
    const close = modal.querySelector('.modal-close');
    close?.focus();
  }

  function closeModal() {
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  // close handlers
  modal.querySelectorAll('.modal-close').forEach(b => b.addEventListener('click', closeModal));
  modal.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });

});
