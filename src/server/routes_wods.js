var bodyParser = require('body-parser');
var mysql = require('mysql');

// connection configurations
const Server = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'abcd4ABCD',
    database: 'prbook',
    // port: 8888
});

// connect to database
Server.connect(function(err){
    if (err) throw err;
    console.log("Connected wods");
})

// Retrieve all wods 
exports.getWods = function (req, res) {
    Server.query('SELECT * FROM wods', function (error, results, fields) {
        if (error) throw error;
        // results = JSON.stringify(results, ,'');
        return res.json(results);
    });
};

// Retrieve all composants 
exports.getComposants = function (req, res) {
    Server.query('SELECT * FROM composants', function (error, results, fields) {
        if (error) throw error;
        // results = JSON.stringify(results, ,'');
        return res.json(results);
    });
};

// Retrieve all json 
exports.getJson = function (req, res) {
    Server.query('SELECT * FROM jsontest', function (error, results, fields) {
        if (error) throw error;
        // results = JSON.stringify(results, ,'');
        return res.json(results);
    });
};

// Retrieve wod with id 
exports.getWodById = function (req, res) {
    
    let wod_id = req.params.id;
    
    if (!wod_id) {
        return res.status(400).send({ error: true, message: 'Please provide wod_id' });
    }
    
    Server.query('SELECT * FROM wods where id=?', wod_id, function (error, results, fields) {
        if (error) throw error;
        return res.json(results[0]);
    });
    
};

// Retrieve wod with id 
exports.getJsonById = function (req, res) {
    
    let json_id = req.params.id;
    
    if (!json_id) {
        return res.status(400).send({ error: true, message: 'Please provide wod_id' });
    }
    
    Server.query('SELECT * FROM jsontest where id=?', json_id, function (error, results, fields) {
        if (error) throw error;
        return res.json(results[0]);
    });
    
};

// Search for wods with ‘bug’ in their name
exports.searchWod = function (req, res) {
    let keyword = req.params.keyword;
    Server.query("SELECT * FROM wods WHERE name LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.json(results);
    });
};

// Add a new wod  
exports.createWod = function (req, res) {
    
    let name = req.body.name;
    let id = req.body.id;
    
    if (!name) {
        return res.status(400).send({ error:true, message: 'Please provide wod name' });
    }
    
    Server.query("INSERT INTO wods SET ? ", { name : name }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New wod has been created successfully.' });
    });
};

// Add a new json  
exports.createJson = function (req, res) {
    
    let content = req.body.content;
    let id = req.body.id;
    
    if (!content) {
        return res.status(400).send({ error:true, message: 'Please provide json content' });
    }
    
    Server.query("INSERT INTO jsontest SET ? ", { id : id, content : content }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New json has been created successfully.' });
    });
};


//  Delete wod
exports.deleteWod = function (req, res) {
    
    let id = req.params.id;
    
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }
    Server.query('DELETE FROM wods WHERE id = ?', [id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ data: results, message: 'Wod has been updated successfully.' });
    });
};    

//  Update todo with id
exports.updateWod = function (req, res) {
    
    let id = req.body.id;
    let name = req.body.name;
    
    if (!id || !name) {
        return res.status(400).send({ message: 'Please provide wod and id' });
    }
    
    Server.query("UPDATE wods SET name = ? WHERE id = ?", [name, id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'wod has been updated successfully.' });
    });
};
