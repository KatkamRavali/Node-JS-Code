const http = require("http");

const port = 8081;

http.createServer((req , res) => {
    res.writeHead(200 , { "Content-Type": "text/html" });
    res.write("<h2> Hey finally server has been started </h2>");
    res.end();
})
.listen(port , () => {
    console.log(`NodeJS server started running on Port ${port}`);
    // console.log(`NodeJS server started running on Port http://localhost:${port}/`);
});

// http://localhost:8081/


