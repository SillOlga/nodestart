http = require('http')

path = require('path');

server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>Hello from SKTVp20!</h1>')
    res.write('<h2>Sergey is a wonderful teacher!</h2>')
    res.write('<h3>Ida-Virumaa Kutsehariduskeskus 2021</h3')
    res.write('<img style="background: orange; width; 100px; height: 100px;" src="'  + path.dirname(__filename) + "/ivkhk.jpg" + '">')

    res.write('</div>')

    res.write('</div>')

    res.end()


 })


 server.listen(3001, () => {

    console.log('Server is running...')

 })
 
 
 