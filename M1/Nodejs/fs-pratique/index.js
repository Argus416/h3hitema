import fs from "fs"

const FILE_NAME = "file.txt"
const FILE_PATH = './public'
const FILE_FULL_PATH = `${FILE_PATH}/${FILE_NAME}`


fs.readFile(FILE_FULL_PATH, 'utf8' , (err, originalContent) =>{
    console.log(err);
    fs.watch(FILE_FULL_PATH, (event, filename)=>{
        if(event === 'change' && filename == FILE_NAME){
            resetFileContent(originalContent)
        }
    })
})

const resetFileContent = (originalContent) =>{
    fs.writeFile(FILE_FULL_PATH, originalContent,  function (err) {
        if (err) throw err;
        // console.log('Saved!');
    })
}