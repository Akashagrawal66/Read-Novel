let express = require('express');
let fs = require('fs');

let app = express();
app.get('/books/:name',function(req, res) {
    var bookName = req.params.name.toLowerCase();
    var data1 = fs.readFileSync('book.json');
    var jsonObj = [];
    jsonObj = JSON.parse(data1);
    res.writeHead(200, {'Content-Type': 'application/pdf'});
    for (let i =0; i<jsonObj.length;i++) {
        if(bookName == jsonObj[i].name) {
            var tempFile = jsonObj[i].path;
            // console.log(tempFile);
            fs.readFile(tempFile, function(err, data){
                // console.log(data);
                res.end(data);
            });
        }
    } 
});

let server = app.listen(8085,'0.0.0.0',function() {
	let host = server.address().address
	let port = server.address().port
	
	console.log("Example app listening at http://%s:%s", host, port);
});