// The path module provides utilities for working with file and directory paths. It can be accessed using
const path = require('path')

console.log(__filename)
// Return the last portion of a path.
console.log(path.basename(__filename))
// Return the directory name of a path. Similar to the Unix dirname command.
console.log(path.dirname(__filename))
// Return the extension of the path, from the last '.' to end of string in the last portion of the path.
console.log(path.extname(__filename))

// Returns an object from a path string - the opposite of format().
console.log(path.parse(__filename))

// Join all arguments together and normalize the resulting path.
console.log(path.join(__dirname, 'test', 'second.html'))

// The right-most parameter is considered {to}. Other parameters are considered an array of {from}.
console.log(path.resolve(__dirname, './test', '/second.html'))
