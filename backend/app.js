const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const jsonfile = require('jsonfile')
const file = './data/stockdata.json'
const usersFile = './data/users.json'

const app = express();
const router = express.Router();


app.use(cors());
app.use(bodyParser.json());

/* register Users */
router.route('/registerUser').post((req, res) => {
    jsonfile.readFile(usersFile, function(err, obj) {
        if(obj) {
        obj.users.push(req.body);
        jsonfile.writeFile(usersFile, obj, function(err){
            if (err) {res.status(404).json(err);}
            else{ res.status(200).json({ Success : 'User Created Success'}); }
        });
        }        
    });   
});

/* Check for Logged In User */
router.route('/checkLoggedInUser').post((req, res) => {
    jsonfile.readFile(usersFile, function(err, obj) {      
        var flag = false;
        for (var key in obj.users){
            if (obj.users[key].Email == req.body.Email && obj.users[key].Password == req.body.Password) flag = true;
         }  
        if (flag == false) {res.status(401).json({ Error : 'User Invalid'});}
            else{ res.status(200).json({ Success : 'User Valid'}); }      
    });   
});

/* adding stock to json file */
router.route('/addStock').post((req, res) => {
    jsonfile.readFile(file, function(err, obj) {
        if(obj) {
        obj.stocks.push(req.body);
        jsonfile.writeFile(file, obj, function(err){
            if (err) {res.status(404).json(err);}
            else{ res.status(200).json({ Success : 'Success'}); }
        });
        }        
    });
    
});

/* retrieving stock from json file */
router.route('/viewStocks').get((req, res) => {
    jsonfile.readFile(file, function(err, obj) {
       if (err) { res.status(404).json(err);}
       else { res.status(200).json(obj);  }  
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Server running on port 4000'));
