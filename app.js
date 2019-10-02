const express = require('express');
const app = express();
const port = 3000;
const todoController = require('./controllers/todoController');
//set up template engine
app.set('view engine','ejs')

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);
//listen to port
app.listen(port);
console.log('Listening to the port 3000');