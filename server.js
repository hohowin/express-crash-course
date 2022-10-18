const logger = require('./middleware/logger')
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: false }));

// Set static folder path
app.use(express.static(path.join(__dirname, 'public')));
//app.get('/', function(req, res) {
//    res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});

// Members API Route
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));