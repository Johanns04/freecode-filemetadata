var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

//The main body
app.post('/api/fileanalyse', upload.single('upfile'), (req, res)=>{
  
  let jsonfile = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  };

  res.send(jsonfile);
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
