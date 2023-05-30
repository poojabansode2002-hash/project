const express = require('express');
const app = express();



app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = {
    name: 'shivi',
    age: 165,
    email: 'johndoe@example.com'
  };
  res.render('index', { data });
});

app.listen(3000, () => {
  console.log('Server is running on port  http://localhost:3000');
});