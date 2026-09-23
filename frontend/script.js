const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

let students = [];

studentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    const student = {
        id: Date.now(),
        name: name,
        email: email,
        course: course
    };

    students.push(student);

    displayStudents();

    studentForm.reset();
});


function displayStudents() {

    studentList.innerHTML = "";

    if (students.length === 0) {
        studentList.innerHTML = "<p>No students added yet.</p>";
        return;
    }

    students.forEach(function (student) {

        const card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>Email: ${student.email}</p>
            <p>Course: ${student.course}</p>

            <button
                class="delete-btn"
                onclick="deleteStudent(${student.id})">
                Delete
            </button>
        `;

        studentList.appendChild(card);
    });
}


function deleteStudent(id) {

    students = students.filter(function (student) {
        return student.id !== id;
    });

    displayStudents();
}
