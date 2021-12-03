//import { newData } from "./data/newData";

const newData = require('./data/newData')

const http = require("http");
const { runInNewContext } = require("vm");
const PORT = 4210;
const LOCALHOST = "http://localhost:4200/";

const requestListener = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*'); 

  if (req.url === "/") {
    res.writeHead(200);
    res.end(
      `
      <p>Content:  Link <a href='/data'> <button> data </button></a> </p>
      <p>New component: Link <a href=${LOCALHOST} ><button>new container</button></a></p>
      `
    );
  }
  if (req.url === "/data") {
    res.writeHead(200, {
      "Content-Type": "text/json",
    });
    const users = [
      { name: "Oleg", surname: "Gorbulich" },
      { name: "Elena", age: 23 },
    ];
    console.log("url", newData);
    res.end(newData);
  }
};

const server = http.createServer(requestListener);
server.listen(PORT);
console.info(`server started on port ${PORT}`);
