// Require Statements
const express = require('express');
const methodOverride = require('method-override');

const characters = require('./models/avatarCharacters');

// Initialize express()
const app = express();

// Configure
const port = 3000;

// MiddleWare
app.use(methodOverride('_method'));
// makes form data readable
app.use(express.urlencoded({ extended: false}))

// Routes INDUCES
// I
app.get('/atlaCharacter', (req, res) => {
    res.render('index.ejs', {'characters' : characters})
});
// N
app.get('atlaCharacter/new', (req, res) => {
    res.render('new.ejs')
});
// D

// U

// C
app.post('/atlaCharacter', (req, res) => {
    characters.unshift(req.body)
    console.log(characters)
    res.redirect('/characters')
});
// E

// S
app.get('characters/indexOfCharactersArray', (req,res) => {
    res.render('show.ejs', {
        character : characters[req.params.indexOfCharactersArray]
    })
})
// LISTENERS
app.listen(port, () => {
    console.log('...everything changed when the firenation attacked', port)
});