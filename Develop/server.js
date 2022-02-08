const express = require('express');
const { notes } = require('./db/db.json')

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`WORKING ON PORT ${PORT}!`)
});