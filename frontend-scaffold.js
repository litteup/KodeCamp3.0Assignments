
const fs = require('fs/promises');
const path = require('path');


//Script to create a folder 

async function createAfolder(folderName){
    try {
        await fs.mkdir(folderName);
        //console.log(`Folder "${folderName}" created successfully.`);
    } catch (error) {
        console.error(`Error encountered while attempting to create ${folderName} folder: ${error.message}.`)
    }
};

//Script to create a file.

async function writeToFile(filename, data){
    try {
        await fs.writeFile(filename, data);
        //console.log(`${filename} created successfully and data written into it.`);
    } catch (error) {
        console.error(`Error encountered while attempting to create the file ${filename}.\n${error.message}.`)
        
    }
};

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

}`


// Content of js file.
let jsFileData = `
alert("Welcome"); `


let folderArray = ["frontend-scaffold", "css", "js", "images"];
let filesArray = ["index.html", "styles.css","script.js"];
let contentOfFiles = [htmlFileData, cssFileData, jsFileData];

// Create a folder
folderArray.forEach(folder => {
    createAfolder(folder);
    
});
// Function creates files and their corresponding contents.

filesArray.forEach(file => {    
    let index = filesArray.indexOf(file);
    let filePath = path.join(__dirname + "/"+folderArray[index])
    writeToFile(filePath + `/${file}`, contentOfFiles[index]); 
});


console.log("Frontend scaffold created successfully!");