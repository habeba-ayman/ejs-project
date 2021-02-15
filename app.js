const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//index page rout
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

//about page rout
// app.get('/about', function (req, res) {
//   res.sendFile(__dirname + '/about.html');
// });

//template
// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function (req, res) {
  //res.render('pages/about');

  var myInformation = [
    {
      name: 'Habeba',
      organization: 'Concept Business Solutions',
      birth_year: 1994,
    },
  ];
  var myJob = 'I am front end developer';

  res.render('pages/about', {
    myInformation: myInformation,
    myJob: myJob,
  });
});
///

app.listen(4000, function (req, res) {
  console.log('server is running');
});
