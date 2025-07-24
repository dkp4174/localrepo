const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // JSON body ko parse karega

// Sample student data
let students = [
  { id: 1, name: 'Denish', age: 22 },
  { id: 2, name: 'Priya', age: 20 }
];

// GET request → sabhi students dikhayega
app.get('/students', (req, res) => {
  res.json(students);
});

// POST request → naya student add karega
app.post('/students', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json({ message: 'Student added successfully' });
});

// Server chalu karo
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
