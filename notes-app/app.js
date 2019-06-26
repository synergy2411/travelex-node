const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
    command: "add",
    description: "To add new note",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "Title of the note"
        },
        body: {
            type: "string",
            demandOption: true,
            description: "Body of the note"
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: "read",
    description: "To add new note",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "Title of the note"
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: "remove",
    description: "To remove a note",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "Title to remove the note"
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: "list",
    description: "Read all notes",
    handler: function (argv) {
        notes.listNote();
    }
})

yargs.parse();

// node app.js add --title="My Title" --body ="Note Body"
// node app.js read --title="My Title" 
// node app.js remove --title="My Title"
// node app.js list