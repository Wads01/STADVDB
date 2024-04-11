//Open Terminal and copy paste commands below
//npm init
//npm i express express-handlebars body-parser mysql hbs dotenv method-override

//1.) To run the app type "node app.js" in terminal
//2.) Open web-browser and type "http://localhost:3000/"

const express = require('express');
require('dotenv').config();
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')

const {executeQuery} = require('./public/commons/javascript/queryDatabase.js');

const databaseRouter = require('./routes/node.js');
const isolationRouter = require('./routes/isolation.js');

const app = express();

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const hbs = require('hbs')
app.set('view engine', 'hbs')
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}))
app.use(express.static('public'))

app.get('/', async (req, res) => {
  try{
    const central_node = 'central'
    const result = await executeQuery(central_node, "SELECT @@global.transaction_isolation AS transactionIsolation");

    const isolation = result[0].transactionIsolation;

    res.render('main', {
      layout: 'index',
      title: 'Home',
      isolation: isolation
    })

  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.use('/node', databaseRouter);
app.use('/isolation', isolationRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});