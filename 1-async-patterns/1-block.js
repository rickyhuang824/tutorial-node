const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('home page');
    }else if (req.url === '/about') {
        for(let i = 0; i<10000; i++) {
            for (let j = 0; j < 10000; j++) {
                console.log('here');
            }
        }
        res.end('about page');
    } else {
        res.end('Error page');
    }

});

server.listen(5000, ()=>{
    console.log('Server is listening on port 500...');
})