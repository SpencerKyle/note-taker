const express = require('express');

const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`WORKING ON PORT ${PORT}!`)
});