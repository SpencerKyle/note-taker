const express = require('express');
const apiRoutes = require('./routes/apiRoute');

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`WORKING ON PORT ${PORT}!`)
});