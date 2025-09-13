const courses = [
  { name: "JavaScript Basics", link: "#" },
  { name: "Python for Beginners", link: "#" },
  { name: "Web Development Bootcamp", link: "#" }
];

function renderCourses(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear old items

  if (list.length === 0) {
    container.innerHTML = "<li>No courses available right now.</li>";
    return;
  }

  list.forEach(course => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${course.link}" target="_blank" rel="noopener">${course.name}</a>`;
    container.appendChild(li);
  });
}

// call once on load
renderCourses(courses, "course-list");
