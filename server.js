const express = require('express'),
      PORT = process.env.PORT || 9000;

let app = express();

app.use('/', express.static('tests'));

app.listen(PORT);

console.log('Started server on port', PORT);
