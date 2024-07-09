const express = require('express');
const app = express();
const port = 4000;
app.set('view engine', 'pug')

app.use(express.static("public"))

const disponible=require('./midelwears/isauto.js')
app.use(disponible)
app.get('/contact', function(req, res){
    res.render('contact');
});
app.get('/Home', function(req, res){
    res.render('Home');
});
app.get('/service',function(req, res){
    res.render('service')});






app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});