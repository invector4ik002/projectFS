const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/get', require('./routes/get.routes'));

const PORT = config.get('port') || 4000;

async function start() {
   try {
      await mongoose.connect(config.get('mongoUri'),{
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
      })
      app.listen(PORT, () => {
         console.log(`Work: ...serwer ${PORT}`)
      })
   } catch (err) {
      process.exit(1)
   }
}
start();