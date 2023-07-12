const fs = require('fs');


// read files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// console.log("last line");


// write file

// fs.writeFile('./docs/blog1.txt', 'Hello world', () => {
//     console.log("File wrriten");
// });

// fs.writeFile('./docs/blog2.txt', 'Hello world', () => {
//     console.log("File wrriten");
// });

// directories

// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("dir created");
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("dir deleted");
//     });
// }
 
// delete files
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
    });
}
