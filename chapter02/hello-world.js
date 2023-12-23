const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {
    // normalize url by removing querystring, optional
    // trailing slash, and making it lowercase
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    let msg = ''
    switch(path) {
        case '':
            msg = 'HomePage'
            break;
        case '/about':
            msg = "AboutPage"
            break;
        default:
            msg = "Not Found"
            break;
    }
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end(msg)
})

server.listen(port, () => console.log(`server started on port ${port}; ` +
'press Ctrl-C to terminate....'))