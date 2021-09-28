const express = require('express')
const ejs = require('ejs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
      ];
    var tagline = "this i variable";
    
    res.render('pages/index',{
        mascots,tagline
    });

});

app.get('/about',(req,res) => {
    res.render('pages/about');
});


app.listen(3000, () => console.log(`listening at http://localhost:3000`));



