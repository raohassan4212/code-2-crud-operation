const express = require("express");
const app = express();

app.use(express.json());

let students = [
    {id: 1, name: "Hassan"},
    {id: 2, name: "kumail"},
    {id: 3, name: "Ali"},
];

// Get Request
app.get("/", (req, res) => {
    console.log
    res.send(`Students: <br> ${JSON.stringify(students)}`);
});

// Post Request
app.post("/student", (req, res) => {
    let student = {
        id: students.length + 1,
        name: req.body.name
    };

    students.push(student);
    console.log(`Length of Student ${students.length}`);
    res.send("Student is add");
});

// Put Request
app.put("/student/:id", (req, res) => {
    let student = students.find(s => s.id === parseInt(req.params.id));
    student.name = req.body.name;
    console.log(`ID ${req.params.id} id Updated`);
    res.send("Record is updated");
});

// Delete Request
app.delete("/student/:id", (req, res) => {
    let student = students.find(s => s.id === parseInt(req.params.id));
    let index = students.indexOf(student);
    students.splice(index,1);
    console.log(`ID ${req.params.id} is deleted`);
    res.send("Record is deleted");
});


app.listen(5000, () => {
    console.log("Server is up on port: 5000");
});