const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//index page rout
app.get('/', function (req, res) {
  // res.sendFile(__dirname + '/index.html');
  var invoiceData = [
    {
      id: 1,
      customer: 'habeba',
      customerEngagement: 'لا يوجد ارتباط',
      createDate: '1-1-2020',
      user: 'مستخدم 1',
      notes: '',
    },
    {
      id: 2,
      customer: 'aziza',
      customerEngagement: 'لا يوجد ارتباط',
      createDate: '2-1-2020',
      user: 'مستخدم 2',
      notes: '',
    },
    {
      id: 3,
      customer: 'hind',
      customerEngagement: 'لا يوجد ارتباط',
      createDate: '3-1-2020',
      user: 'مستخدم 3',
      notes: '',
    },
    {
      id: 4,
      customer: 'mahmmud',
      customerEngagement: 'لا يوجد ارتباط',
      createDate: '4-1-2020',
      user: 'مستخدم 4',
      notes: '',
    },
  ];
  res.render('pages/index', {
    invoiceData: invoiceData,
  });
});

app.listen(4000, function (req, res) {
  console.log('server is running');
});
