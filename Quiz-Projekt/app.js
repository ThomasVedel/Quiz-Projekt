const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/Script'));
app.use(express.static(__dirname + '/images'));

router.get('/', function(req, res) {
    if (true) {
        res.sendFile(path.join(__dirname + '/View/themes.html'))

    } else {
        res.sendStatus(200) // equivalent to res.status(200).send('OK')
        res.sendStatus(403) // equivalent to res.status(403).send('Forbidden')
        res.sendStatus(404) // equivalent to res.status(404).send('Not Found')
        res.sendStatus(500) // equivalent to res.status(500).send('Internal Server Error')
    }
});

app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at port 8080')
console.log(__dirname)
