const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;
//DB Connect
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('mongodb connected'))
  .catch(err => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
