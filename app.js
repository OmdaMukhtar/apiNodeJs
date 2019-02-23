var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res){
        var responseJosn = { hello:'this my first my api on node js'};
        res.json(responseJosn);
});

app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('welecome to my first node js api');
});

app.listen(port, function(){
    console.log('gulp work on  : ', port);
});