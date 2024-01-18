const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome To Our Home Page');
    } else if (req.url === '/about') {
        // Only this block will execute if the URL is '/about'
        res.end('Here is our short history');
    } else {
        // This block will execute if the URL is neither '/' nor '/about'
        res.end(`<h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>`);
    }
});

server.listen(5000, () => {
    console.log(`Server is running on port: 5000`);
});
