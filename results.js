const body = document.getElementById("body");

function Remark(average) {
    if (average > 90) {
        return "Exemplary";
    } else if (average > 80) {
        return "Proficient";
    } else if (average > 70) {
        return "Fairly Proficient";
    } else {
        return "Need Improvement";
    }
}

const entries = JSON.parse(localStorage.getItem("entries")) || [];

entries.forEach(function  (entry) {
    const average = (entry.quiz + entry.project + entry.exam) / 3;
    const remark = Remark(average);

    const row = document.createElement("tr");

    const cells = [
        entry.name,
        entry.degree,
        entry.course,
        entry.quiz,
        entry.project,
        entry.exam,
        average.toFixed(2),
        remark
    ];

    cells.forEach(function (value) {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
    });

    body.appendChild(row);
})