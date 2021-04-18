const express = require('express');
const app = express();

const cors = require('cors');
const router = require('./routes/router');

const isDev = process.env.NODE_ENV === 'development';
app.use([
  cors({
    origin: isDev ? '*' : 'https://cris-names.vercel.app',
  }),
  express.json(),
]);

router(app);

const ni = require('os').networkInterfaces();

let ip_list = [];
let ip_table = [];
for (let interface in ni) {
  const ipv4 = ni[interface].find((i) => i.family === 'IPv4').address;
  ip_table.push({ interface, ipv4 });
  ip_list.push(ipv4);
}
console.table(ip_table);

const PORT = process.env.PORT || 3000;
const hostname = ip_list[1] || 'localhost';
app.listen(PORT, function () {
  console.log(`Server listening in http://${hostname}:${PORT}\nENV: ${process.env.NODE_ENV}`);
});
