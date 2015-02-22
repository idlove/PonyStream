var express = require("express")
var app = express();

var position = 0;
var translation = false;

function tickStream()
{
    if(translation == true)
        position++;
    else
        return;
}

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/static'));


app.get('/',function(req,res){
    res.render('index');
});

app.get('/video',function(req,res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('Client '+ip+' connected to stream!');
    res.render("stream");
});

app.get('/start',function(req,res){
    if(translation == false)
        translation=true;
    position = 0;
    setInterval(function(){tickStream()},1000);
    res.send("Translation started!");
});

app.get('/stop',function(req,res){
   translation = false;
    res.send("Translation stopped!");
});

app.get('/ajax',function(req,res) {
    if(translation == true)
        res.send(position.toString());
    else
        res.send("0");
});

app.get('/source',function(req,res){
    var fs = require("fs");
    var sourceJson = fs.readFileSync("config.json");
    sourceJson = JSON.parse(sourceJson);
    res.send(sourceJson.video)
});

app.listen(3000);