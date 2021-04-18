const express = require('express');
const app = express();

const cors = require('cors');

const router = require('./routes/router');
app.use(
  cors({
    origin: process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:8080' : 'https://cris-names.vercel.app',
  }),
);

app.use(express.json());

router(app);

app.listen(3000, () => {
  console.log('Server listening in http://localhost:3000 \nENV: ' + process.env.NODE_ENV);
});
