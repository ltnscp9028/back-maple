const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const logger = require("morgan");
const http = require("http");
const fs = require("fs");
const PORT = 3001;

const app = express();

let whitelist = ["http://localhost:3000","https://ltnscp9028.github.io"];
const corsOptions = {
	origin: function(origin,callback){
		if(whitelist.indexOf(origin != -1) || !origin)callback(null,true);
		else callback(new Error('Cors Not Allow'));
	}
}

app.use(cors(corsOptions));
app.use(express.static("public"))
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use("/api",require("./api"));
app.get("/api",(req,res)=>res.send('api page'));
// app.get("/",(req,res)=>res.send('maplestory-backend'));

http.createServer(app).listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
});
