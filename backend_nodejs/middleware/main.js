const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs')

// app.use(express.static("public"))

//middleware 1
app.use((req, res, next) => {
    fs.appendFile('log.txt', `${Date.now()} - ${req.method} - ${req.url}\n`, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    console.log(`${Date.now()} - ${req.method} - ${req.url}`)
    next()
})

app.use((req, res, next) => {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Hello World about!');
});

app.get('/contact', (req, res) => {
  res.send('Hello World contact!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});