//CRUD OPRATION VIA POST MAN

const express = require('express')
const PORT = process.env.PORT || 4000
const app = express()


const students = [
    { id: 1, name: 'solomon' },
    { id: 2, name: 'john' },
    { id: 3, name: 'mary' },
    { id: 4, name: 'roseline' }

]

//CREAT

app.post('/list/add', (req, res) => {
    const course = {
        id: students.length + 1,
        name: req.body.name
    };
    students.push(course);
    res.send(students)
})

//READ

app.get('/list', (req, res) => {
    res.send(students)
})

//UPDATE STUDENT

app.put('/list/update/:id', (req, res) => {
    const student = students.find((u) => u.id === Number(req.params.id));
    if (!student) {
        res.status(401).send(`no user with this id: ${req.params.id} found `)
    }

    student.name = req.body.name
    res.send(student)
})

//DELETE ___ DELETING STUDENT

app.delete('/list/:id', (req, res) => {

    const student = students.find((u) => u.id === Number(req.params.id))
    if (!student) {
        res.status(401).send(`no  user with the coresponding id: ${req.params.id} found`)
    }

    const index = students.indexOf(student)
    student.splice(index, 1)
    res.send(students)
})

app.listen(PORT, () => console.log(`server rinning on port ${PORT}`))