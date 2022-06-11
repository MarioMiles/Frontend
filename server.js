//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();




app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/frontend/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
