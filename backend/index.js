import express from 'express' // type : module 
//  const express = require('express) // type : commonjs
const app = express();

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//     res.send('Server is ready !')
// })
app.get ('/api/jokes' , (req, res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content : 'This is a joke'
        },
        {
            id:2,
            title: 'Another joke',
            content : 'This is a another joke'
        },
        {
            id:3,
            title: 'Third joke',
            content : 'This is a third joke'
        },
        {
            id:4,
            title: 'Fourth joke',
            content : 'This is forth joke'
        },
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000
app.listen(port , () => {
    console.log(`Server at http://localhost:${port}`);
})