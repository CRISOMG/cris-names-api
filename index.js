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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}\nENV: ${process.env.NODE_ENV}`);
});
