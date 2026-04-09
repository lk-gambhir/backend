require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send('Please login')
})

app.get('/jokes',(req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Funny one',
            content: 'Why did the programmer quit? Because he didn’t get arrays.'
        },
        {
            id: 4,
            title: 'Tech joke',
            content: 'Debugging: Removing the needles from the haystack.'
        },
        {
            id: 5,
            title: 'Last joke',
            content: 'I would tell you a UDP joke, but you might not get it.'
        }
    ];
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})