const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const logger = require("morgan");
const http = require("http");
const https = require("https");
const fs = require("fs");
const PORT = 5001;
const options = {
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./cert.pem')
};
//console.log(test);
const app = express();

let whitelist = ["http://locasthost:3000/*","https://ltnscp9028.github.io/*"];
const corsOptions = {
	origin: function(origin,callback){
	let isWhitelisted = whitelist.indexOf(origin) != -1;
	callback(null,isWhitelisted);
	},
	credentials:true
}; 
app.use(cors());
app.use(express.static("public"))
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use("/api",require("./api"));
http.createServer(app).listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
});
const port2=443;
https.createServer(options,app).listen(port2,()=>{
   console.log(`server running on port2 ${port2}`);
});

