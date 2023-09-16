
const fs = require('fs');
const path = require('path');


// Content of html file.
let htmlFileData = `<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, 
initial-scale=1.0">

<link rel="stylesheet" href="./css/style.css">

<title>Document</title>

</head>

<body>

<h1>Welcome</h1>

<script src="./js/script.js"></script>

</body>

</html>`;


// Content of css file.
let cssFileData = `
h1 {

text-align:center;

}`;

// Content of js file.
let jsFileData = `
alert("Welcome"); `

//Script to create a folder 

function createAfolder(folderName){
    try {
        fs.mkdirSync(folderName);
        
    } catch (error) {
        console.error(`Error creating folder: ${error.message}`);

    }
};

createAfolder('frontend-scaffold');

//Script to create a file.

function writeToFile(filename, data){
    try {
        fs.writeFileSync(filename, data);
        
    } catch (error) {
        console.error(`Error encountered while attempting to create the file ${filename}.\n${error.message}.`)
       
    }
};
writeToFile(`./frontend-scaffold/`+'index.html',htmlFileData);

let folderArray = ["css", "js", "images"];
let filesArray = ["style.css","script.js"];
let contentOfFiles = [cssFileData, jsFileData];

// Create a folder
folderArray.forEach(folder => {
    createAfolder(`./frontend-scaffold/` +folder);
    
});

for (let i = 0; i < folderArray.length -1; i++) {
    let filePath = (__dirname+`/frontend-scaffold`+`/${folderArray[i]}`+`/${filesArray[i]}`)
    let fileContent = contentOfFiles[i];
    writeToFile(filePath,fileContent);
}
console.log("Frontend scaffold created successfully!");
