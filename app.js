const fs = require('fs');
const notes = require('./notes.js')
const yargs = require('yargs')

var argv = yargs.argv

var command = argv._[0];
console.log(`command : ${command}`)


if(command == 'add')
{
   var note =  notes.addNote(argv.title,argv.body);
   if (note){
    console.log('Note Added');
    notes.logNote(note);
   }
   else{
    console.log("Note title taken");
   }
}
else if(command == 'list')
{
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}
else if(command == "remove")
{
   var removedNote = notes.removeNote(argv.title);
   var message = removedNote ? "Note Removed" : "Note not found";
   console.log(message);
}
else if(command == "read")
{
    var note = notes.getNote(argv.title);
    if (note){
        console.log('Note found');
        notes.logNote(note);
       }
       else{
        console.log("Note not found");
       }
}

else
{

    console.log("command not recognized");
}
