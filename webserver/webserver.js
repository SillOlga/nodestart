const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>Hello from SKTVp20!</h1>')
    res.write('<h2>Sergey is a wonderful teacher!</h2>')
    res.end(`
        <div style="background: orange; width; 100px; height: 100px;">
            <img src="webserver/img/ivkhk.jpg" width="400" height="300">
            <hr>
            <h3>Ida-Virumaa Kutsehariduskeskus 2021</h3>
        </div>
    `)
})

server.listen(3002, () => {
    console.log('Server is running...')
})


