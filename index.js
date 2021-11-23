// The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use.
const http = require('http')
// The path module provides utilities for working with file and directory paths. It can be accessed using
const path = require('path')
// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require('fs')

// The requestListener is a function which is automatically added to the 'request' event.
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Returns a reference to the ServerResponse, so that calls can be chained.
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    if (req.url === '/') {
      // Asynchronously reads the entire contents of a file.
      fs.readFile(
        path.join(__dirname, 'views', 'index.html'),
        'utf-8',
        (err, content) => {
          if (err) {
            throw err
          }

          // Asynchronously reads the entire contents of a file.
          res.end(content)
        }
      )
    } else if (req.url === '/about') {
      // Asynchronously reads the entire contents of a file.
      fs.readFile(
        path.join(__dirname, 'views', 'about.html'),
        'utf-8',
        (err, content) => {
          if (err) {
            throw err
          }

          // Asynchronously reads the entire contents of a file.
          res.end(content)
        }
      )
    }
  } else if (req.method === 'POST') {
    const body = []
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    req.on('data', data => {
      body.push(Buffer.from(data))
    })

    req.on('end', () => {
      const message = body.toString().split('=')[1]

      res.end(`
        <h1>Ваше сообщение: ${message}</h1>
      `)
    })
  }
})

server.listen(3000, () => {
  console.log('Server is running...')
})
