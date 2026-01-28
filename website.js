const fs = require('fs')
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url == '/hello'){
        res.end('<h1> This is abhishekh</h1> <p> Hey this is the way to rock the world! </p>');
    }
    else if (req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> ABOUT Abhishekh</h1> <p> Hey this is the about section! </p>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Page not found brother </h1> <p> write the valid things </p>');
    }

})
server.listen(port, () => {-

    console.log(`server is listening on port ${port}`)
    
})