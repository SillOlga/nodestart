const http = require('http')
const fs = require('fs')

fs.readFile('img/ivkhk.jpg', function (err, data) {
    if (err) throw err;

    const server = http.createServer((req, res) => {

        console.log(req.url)

        res.write('<h1 style="background-color:MediumSeaGreen; text-align:center; text-transform: capitalize;">Hello from SKTVp20!</h1>')
        res.write('<div style="border:1px solid gray; padding: 1em;">')
        res.write('<h2 style="text-align: center; color: MediumSeaGreen;">Sergey is a wonderful teacher!</h2>')
        res.write('<p style="text-indent: 50px; text-align: justify; letter-spacing: 1px;">Ida-Virumaa Kutsehariduskeskus 2021</p>')
        res.write('<img src="data:image/jpeg;base64,')
        res.write(Buffer.from(data).toString('base64'));
        res.write('" style="padding: 5px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #ddd; border-radius: 4px;" alt="Mountain" width="38%">');
        res.end(`</div>`)

    })

    server.listen(3001, () => {
        console.log('Server is running...')
    })

})



































