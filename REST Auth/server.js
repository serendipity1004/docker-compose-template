const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/**
 * Routes Import
 */
require('./src/api/auth')(app);

/**
 * Start Server
 */
app.listen(port, () => console.log(`Server started at port ${port}`));