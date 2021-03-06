const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var cors=require('./cors');
app.use(cors.permission)
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

ServerWOD = require('./routes_wods');
ServerTODO = require('./routes_todos');
 
// default route
app.get('/', function (req, res) {
    return res.send({ message: 'Bienveeeenue' })
});

// // // // // // // // // WODS // // // // // // // // // //
// Retrieve all wods 
app.get('/wods', ServerWOD.getWods);

// Retrieve all wods 
app.get('/composants', ServerWOD.getComposants);

// Retrieve all json 
app.get('/jsons', ServerWOD.getJson);

// Retrieve wod with id 
app.get('/wod/:id', ServerWOD.getWodById);

// Retrieve wod with id 
app.get('/json/:id', ServerWOD.getJsonById);

// Search for wods with ‘bug’ in their name
app.get('/wod/search/:keyword', ServerWOD.searchWod);

// Add a new wod  
app.post('/wod', ServerWOD.createWod);

// Add a new json  
app.post('/json', ServerWOD.createJson);

//  Update wod with id
app.put('/wod/:id', ServerWOD.updateWod);

//  Delete wod
app.delete('/wod/:id', ServerWOD.deleteWod);

// // // // // // // // // TODOS // // // // // // // // // //
// Retrieve all todos
app.get('/todos', ServerTODO.getTodos);

// Retrieve todo with id 
app.get('/todo/:id', ServerTODO.getTodoById);

// Search for todos with ‘bug’ in their name
app.get('/todo/search/:keyword', ServerTODO.searchTodo);

// Add a new todo  
app.post('/todo', ServerTODO.createTodo);

//  Update todo with id
app.put('/todo/:id', ServerTODO.updateTodo);

//  Delete todo
app.delete('/todo/:id', ServerTODO.deleteTodo);

// // // // // // // // // // // // // // // // // // // // // // // // // // // /// // // // //

// port must be set to 3000 because incoming http requests are routed from port 80 to port 8080
app.listen(5000, function () {
   console.log('Node app is running on port 5000');
});

module.exports = app;