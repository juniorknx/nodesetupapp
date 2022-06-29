const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(
    express.urlencoded({
        extended:true
    }),
)

// Arquivos estáticos e públicos.. Assets, CSS, JS, IMG
app.use(express.static('public'));

const basePath = path.join(__dirname, 'templates');

app.listen(port, () => {
    console.log(`===> Express is running! at ${port} !!!`)
});

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.post('/user/add', (req, res) => {
    const { name, age} = req.body
    console.log(req.body.name.length);
    console.log(`===> Meu nome é ${name} e tenho ${age} de idade!`);
    res.sendFile(`${basePath}/user.html`)
});

