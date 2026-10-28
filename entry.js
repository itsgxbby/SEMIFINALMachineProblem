const form = document.getElementById("entry");
const fix = document.getElementById("fix");

function error(text) {
    fix.textContent = text;
    fix.className = "error";
}

function validGrade(val) {
    return val !== "" && Number(val) >= 0 && Number(val) <= 100;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const degree = document.getElementById("degree").value;
    const course = document.getElementById("course").value;
    const quiz = document.getElementById("quizGrade").value;
    const project = document.getElementById("projectGrade").value;
    const exam = document.getElementById("examGrade").value;

    if (studentName.length < 3) {
        error("Student's name must have at least 3 characters.");
        return;
    }

    if (degree === "") {
        error("Please select a degree.");
        return;
    }

    if (course === "") {
        error("Please select a course.");
        return;
    }

    if (!validGrade(quiz)) {
        error("Quiz grade must be from 0 to 100.");
        return;
    }

    if (!validGrade(project)) {
        error("Project grade must be from 0 to 100.");
        return;
    }

    if (!validGrade(exam)) {
        error("Exam grade must be from 0 to 100.");
        return;
    }

    const result = {
        name: studentName,
        degree: degree,
        course: course,
        quiz: Number(quiz),
        project: Number(project),
        exam: Number(exam)
    };

    const results = JSON.parse(localStorage.getItem("entries")) || [];
    results.push(result);
    localStorage.setItem("entries", JSON.stringify(results));
    window.location.href = "results.html";
});