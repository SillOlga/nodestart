// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require('fs')
// The path module provides utilities for working with file and directory paths. It can be accessed using
const path = require('path')

// File System
// create a directory
// Join all arguments together and normalize the resulting path.
fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) throw err

    console.log('Папка была создана')
})

// Asynchronously writes data to a file, replacing the file if it already exists.
fs.writeFile(
    path.join(__dirname, 'test', 'olga.txt'),
    'SKTVp20 2021',
    (err) => {
        if (err) throw err
        console.log('Файл был создан')

        // Asynchronously append data to a file, creating the file if it does not exist.
        fs.appendFile(
            path.join(__dirname, 'test', 'olga.txt'),
            'From append file',
            err => {
                if (err) throw err
                console.log('Файл был изменен')

                // Asynchronously reads the entire contents of a file.
                fs.readFile(
                    path.join(__dirname, 'test', 'olga.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err
                        console.log(data)
                    }
                )
            }
        )
    }
)

// // fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     err => {
//         if (err) throw err

//         console.log('Файл переименован')
//     }
// )