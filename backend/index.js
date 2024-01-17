const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 3000

app.use(express.json());

//Available routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('This is index page API')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})