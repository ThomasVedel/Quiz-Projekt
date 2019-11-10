const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
//var script = require(__dirname + '/Script/script.js')

app.use(express.static(__dirname + '/Script'));
app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/images'));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/View/themes.html'))
});

app.use('/', router);
app.listen(process.env.port || 8080);


console.log('Running at port 8080')
console.log(__dirname)
