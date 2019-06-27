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
    const duplicateNotes = notes.filter(note => note.title == title);
    if (duplicateNotes.length == 0) {
        notes.push({ title, body });
        debugger;
        saveNote(notes);
    } else {
        console.log(chalk.red("Duplicate Title. Try again!"))
    }

}

const readNote = (title) => {
    const notes = loadAllNotes();
    const note = notes.filter(note => note.title == title);
    if (note.length > 0) {
        console.log(chalk.blue("Title : " + note[0].title))
        console.log(chalk.blue("Body : " + note[0].body))
    }else{
        console.log(chalk.red("NOT FOUND"));
    }

}
const removeNote = (title) => {
    const notes = loadAllNotes();
    const updateNotes = notes.filter(note => note.title != title);
    if(updateNotes.length != notes.length){
        saveNote(updateNotes);
    }else{
        console.log(chalk.red("NOT FOUND"));
    }
    
}

const listNote = () => {
    const notes = loadAllNotes();
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
