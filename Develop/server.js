const express = require('express');
const { notes } = require('./db/db.json')

const app = express();

app.listen(3001, () => {
    console.log('WORKING ON PORT 3001')
});