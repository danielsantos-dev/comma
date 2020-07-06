

//const snappy = require('snappy');
// const fs = require('fs');
// const axios = require('axios');

// //joining path of directory 
// const directoryPath = path.join(__dirname, 'trips4');
// //passing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//   //handling error
//   if (err) {
//     return console.log('Unable to scan directory: ' + err);
//   }
//   //listing all files using forEach
//   files.forEach(function (file) {
//     fs.readFile('trips4\\' + file, 'utf8', function (err, data) {
//       if (err) {
//         return console.log(err);
//       }
//       newObject = data.toString();

//       snappy.compress(newObject, function (err, compressed) {
//         console.log('compressed is a Buffer', file)

//         axios.post('http://localhost:5000/dataComma/bodyDB', {
//           bodyDB: compressed
//         })
          // .catch(function (error) {
          //   console.log(error);
          // });
//       })
//     })
//   })
// })
