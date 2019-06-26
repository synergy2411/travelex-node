const fs = require("fs");
const chalk = require("chalk");

const loadAllNotes = () => {
    try {
        let notesBuffer = fs.readFileSync("./notes.json");
        let notesString = notesBuffer.toString();
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}
const saveNote = (notes) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes));
    console.log(chalk.green("SAVED."));
}

const addNote = (title, body) => {
    const notes = loadAllNotes();
    notes.push({title, body});
    saveNote(notes);
}

const readNote = (title) => { }
const removeNote = (title) => { }

const listNote = () => {
    const notes =  loadAllNotes();
    console.log(chalk.inverse.green("MY NOTES"))
    console.log("-------------------");

    notes.forEach(note => {
        console.log(chalk.blue("Title : ", note.title))
        console.log(chalk.blue("Body : ", note.body))
        console.log(chalk.grey("***********************"));
    })
 }

module.exports = {
    addNote,
    readNote,
    removeNote,
    listNote
}

// const dataBuffer = fs.readFileSync("./package.json");

// console.log(dataBuffer.toString());

// var note = {
//     "title" : "Renew Insurance",
//     "body" : "domestic"
// }

// fs.writeFileSync("./notes.json", JSON.stringify(note));
