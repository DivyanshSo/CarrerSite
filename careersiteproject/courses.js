// Sample array of courses
const courses = [
    { name: "JavaScript Basics", duration: "4 weeks", level: "Beginner" },
    { name: "Web Development Bootcamp", duration: "12 weeks", level: "Intermediate" },
    { name: "Data Structures and Algorithms", duration: "8 weeks", level: "Advanced" },
    { name: "React for Beginners", duration: "6 weeks", level: "Beginner" }
];

// Function to populate the course list
function populateCourseList() {
    const courseList = document.getElementById('course-list');

    courses.forEach(course => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${course.name}</strong> - ${course.duration} (${course.level})`;
        courseList.appendChild(listItem);
    });
}

// Populate the course list when the script loads
populateCourseList();
