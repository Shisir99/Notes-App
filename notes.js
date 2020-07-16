const fs = require('fs')

var fetchNotes = ()=>{

    try{

        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
        return notes;
    
        }catch(e){
            return [];
        }

};

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
};

var addNote = (title,body) =>{

    var notes = fetchNotes();
    var note = {
        title,
        body
    }

   

    var duplicates = notes.filter((note)=>{
        return note.title == title
    });

    if (duplicates.length==0){
    notes.push(note);
    saveNotes(notes);
    return note;
    }

    else{
        return
    }

};

var getAll = () =>{
    return fetchNotes();
};

var removeNote = (title) =>{

    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return filteredNotes.length!==notes.length;

};

var getNote = (title) =>{

    var notes = fetchNotes();
    var filteredNote = notes.filter((note) => note.title == title);
    return filteredNote[0]; 

};

var logNote = (note)=>{
    console.log('---------');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};


module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
    logNote
};