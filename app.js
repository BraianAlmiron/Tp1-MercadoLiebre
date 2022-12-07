const express = require('express');
const app = express();
const path = require('path');
const port = 3030;
app.use(express.static(path.resolve(__dirname,'public')))

app.listen(port,() => console.log(`Server runner in http://localhost:${port}`));

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')))

