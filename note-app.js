//Let forms load first before executing
document.addEventListener('DOMContentLoaded', function()
{
    const noteForm = document.getElementById('note-form'); // get and store note-form element
    const noteList = document.getElementById('notes-list'); // get note list element

    // listen for submission of note form
    noteForm.addEventListener('submit', event => {
        event.preventDefault(); // prevent default behavior of submitting form
        addNewNote(); // Call function to add new note
    });

    noteList.addEventListener('click', event => {
        // if delete button was clicked
        if (event.target.id.includes('delete-button')){
            const noteToDelete = event.target.parentElement; // get the parent note
            noteList.removeChild(noteToDelete); // remove the note
        }
    });

    // Function to add new note to HTML Page
    function addNewNote(){
        // Create a div container for new note
        const noteDiv = document.createElement("div");
        noteDiv.classList.add('added-note-div');
        noteDiv.id = "added-note-div"

        // Create a div for note header
        const noteHeader = document.createElement('div');
        noteHeader.className = 'note';
        
        // Create paragraph to store note title
        const noteTitle = document.createElement('p');
        noteTitle.className = 'note-title';
        noteTitle.textContent = new Date().toLocaleString(); // get current date time and add it to the title

        // Create delete button with icon
        const garbageIcon = document.createElement('i');
        garbageIcon.className = 'fa-solid fa-trash';
        garbageIcon.id = 'delete-button';

        // Add the cursor: pointer style
        garbageIcon.style.cursor = 'pointer';

        // create actual note using user input from text area
        const noteText = document.createElement('div');
        noteText.classList.add('note-text');
        // get and store user input from text area
        const noteTextArea = document.getElementById('note-text-area');
        noteText.textContent = noteTextArea.value;  // assign user input to noteText

        // Append Elements together and then to Note List
        noteHeader.appendChild(noteTitle); // append title to header
        noteDiv.appendChild(noteHeader); // append header to div
        noteDiv.appendChild(garbageIcon); // append delete button
        noteDiv.appendChild(noteText); // append user input text element to note
        noteList.appendChild(noteDiv); // append note to notes-list div

        noteTextArea.value = ''; // Set input text area back to blank
        noteTextArea.focus();

        return;
    }

    // Function to delete Note off of the page
    function deleteNote(){

    }
});
