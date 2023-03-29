const { json } = require('express');
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("this is home page");
      
         }
        if (req.url === '/about') {
            res.write("this is about page");
         
               }
         if (req.url === "/praveen") {
            res.write("this is praveen page");
         
        }
         if (req.url === "/node") {
             res.write(JSON.stringify( "Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node and Nodejs is same. Node is a cross-platform, open-source JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser."
             ));
          
    }
      res.end();
    }
)
server.listen(3004)