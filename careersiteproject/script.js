const courses = [
    {name: "Javascript Basics", link: "#" },
    {name: "Python for Beginners", link: "#"},
    {name: "Web Development Bootcamp", link: "#"}
];

const courseList = document.getElementById("course-list");
courses.forEach(course => {let li = document.createElement("li");
    li.innerHTML = `<a href="${course.link}">${course.name}</a>`;
    courseList.appendChild(li);
});