const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

app.use(cors()); // Enable requests from anywhere
app.use(express.json()); // Parse json body requests

require('./routes')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))