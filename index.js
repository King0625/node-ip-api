const express = require('express');
const app = express();
const { execSync } = require('child_process');

app.get('/ip', (req, res) => {
  const ipinfo = execSync("curl localhost:3000");
  const ip = JSON.parse(ipinfo.toString());
  res.send(ip);
})

app.get('/', (req, res) => {
  res.json({
    ip: req.ip
  });
})
app.listen(3000, () => console.log("Listening on port 3000"));
