var bodyParser = require('body-parser');
var mysql = require('mysql');

// connection configurations
const Server = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'abcd4ABCD',
    database: 'prbook',
    // port: 3306
});

// connect to database
Server.connect(function(err){
    if (err) throw err;
    console.log("Connected todos");
})

// Retrieve all todos 
exports.getTodos = function (req, res) {
    Server.query('SELECT * FROM todos', function (error, results, fields) {
        if (error) throw error;
        // results = JSON.stringify(results, ,'');
        return res.json(results);
    });
};

// Retrieve wod with id 
exports.getTodoById = function (req, res) {
    
    let id = req.params.id;
    
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }
    
    Server.query('SELECT * FROM todos where id=?', id, function (error, results, fields) {
        if (error) throw error;
        return res.json(results[0]);
    });
    
};

// Search for todos with ‘bug’ in their name
exports.searchTodo = function (req, res) {
    let keyword = req.params.keyword;
    Server.query("SELECT * FROM todos WHERE name LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.json(results);
    });
};

// Add a new todo  
exports.createTodo = function (req, res) {
    
    let id = req.body.id;
    let titre = req.body.titre;
    let contenu = req.body.contenu;
    
    if (!titre) {
        return res.status(400).send({ error:true, message: 'Please provide wod name' });
    }
    
    Server.query("INSERT INTO todos SET ? ", { titre : titre, contenu : contenu, status : "false" }, function (error, results, fields) {
        if (error) throw error;
        return res.json({ results });
    });
};


//  Delete wod
exports.deleteTodo = function (req, res) {
    
    let id = req.params.id;
    
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }
    Server.query('DELETE FROM todos WHERE id = ?', [id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ results });
    });
};    

//  Update todo with id
exports.updateTodo = function (req, res) {
    
    let id = req.params.id;
    let titre = req.body.titre;
    let contenu = req.body.contenu;
    let status = req.body.status;
    
    if (!id || !titre) {
        return res.status(400).send({ message: 'Please provide todo and id' });
    }
    
    Server.query("UPDATE todos SET titre = ? ,contenu = ? ,status = ? WHERE id = ?", [titre, contenu, status, id], function (error, results, fields) {
        if (error) throw error;
        return res.json(results);
    });
};
