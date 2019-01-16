require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.json({extended: false}));

const user_routes = require('./api/routes/user');

require('./config/passport');
app.use(passport.initialize());

app.use('/api/v1/user', user_routes);
app.use(express.static(__dirname+'/public'));

// Mongoose
const dbConn = process.env.MONGOLAB_URI;
mongoose.Promise = require('bluebird');
mongoose.connect(dbConn, {
    useNewUrlParser: true,
    promiseLibrary: require('bluebird')
  }).then(() => console.log('DB Connected.'))
  .catch(err => console.log(err));
mongoose.set('useCreateIndex', true);

app.get('/[^\.]+$', (req, res) => {
  res.set('Content-Type', 'text/html')
    .sendFile(path.join(__dirname, 'public/index.html'));
});

/*app.get('/', (req, res) => {
  res.json({msg:'Index.html'});
});*/

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"message" : err.name + ": " + err.message, success: false});
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Node app is running at localhost:" + port);
});
