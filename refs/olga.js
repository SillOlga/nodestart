const fs = require('fs')
const path = require('path')

// File System
fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) throw err

    console.log('Папка была создана')
})

fs.writeFile(
    path.join(__dirname, 'test', 'olga.txt'),
    'SKTVp20 2021',
    (err) => {
        if (err) throw err
        console.log('Файл был создан')

        fs.appendFile(
            path.join(__dirname, 'test', 'olga.txt'),
            'From append file',
            err => {
                if (err) throw err
                console.log('Файл был изменен')

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