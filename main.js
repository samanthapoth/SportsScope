document.addEventListener('DOMContentLoaded', function() {
    const api = 'http://127.0.0.1:8000';
    fetchAndDisplayNotes();
    document.getElementById('noteForm').addEventListener('submit', handleNoteSubmit);
});

async function fetchAndDisplayNotes() {
    const api = 'http://127.0.0.1:8000';
    try {
        const response = await fetch(`${api}/api/todos`);
        if (!response.ok) throw new Error('Failed to fetch notes');
        const notes = await response.json();
        displayNotes(notes);
    } catch (error) {
        displayFeedback(`Error: ${error}`, 'error');
    }
}

function displayNotes(notes) {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note-item';
        noteElement.innerHTML = `
            <strong>${note.title}</strong>: ${note.description}
            <button onclick="editNote(${note.id})">Edit</button>
            <button onclick="deleteNote(${note.id})">Delete</button>
        `;
        notesList.appendChild(noteElement);
    });
}

async function handleNoteSubmit(e) {
    e.preventDefault();
    const api = 'http://127.0.0.1:8000';
    const noteId = document.getElementById('noteId').value;
    const title = document.getElementById('categoryName').value;
    const description = document.getElementById('categoryNote').value;

    const url = noteId ? `${api}/api/todos/${noteId}` : `${api}/api/todos`;
    const method = noteId ? 'PUT' : 'POST';
    const data = noteId ? { id: parseInt(noteId, 10), title, description } : { title, description };

    try {
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`Failed to ${method === 'PUT' ? 'update' : 'save'} note`);
        displayFeedback(`Note successfully ${method === 'PUT' ? 'updated' : 'saved'}!`, 'success');
        fetchAndDisplayNotes();
        resetForm();
    } catch (error) {
        displayFeedback(`Error: ${error.message}`, 'error');
    }
}

function resetForm() {
    document.getElementById('noteForm').reset();
    document.getElementById('noteId').value = '';
}

function displayFeedback(message, type) {
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.textContent = message;
    feedbackMessage.className = `feedback-message ${type}`;
    feedbackMessage.style.display = 'block';
    setTimeout(() => feedbackMessage.style.display = 'none', 3000);
}

async function editNote(noteId) {
    const api = 'http://127.0.0.1:8000';
    try {
        const response = await fetch(`${api}/api/todos/${noteId}`);
        if (!response.ok) throw new Error(`Failed to fetch note with ID ${noteId}`);
        
        const note = await response.json();
        
        // Notes for documents
        document.getElementById('categoryName').value = note.title;
        document.getElementById('categoryNote').value = note.description;
        
        // need to set noteId to a hidden input field so we know this is an edit operation
        document.getElementById('noteId').value = noteId;
        
        // Optionally, scroll to the form or highlight it to indicate it's in edit mode
        document.getElementById('noteForm').scrollIntoView();
        displayFeedback('You are editing a note. Update the fields and submit.', 'info');  // Ensure you have a way to display informational messages
        
    } catch (error) {
        console.error("Error fetching note details:", error);
        displayFeedback(`Error: ${error.message}`, 'error'); // Provide feedback to the user
    }
}



function deleteNote(noteId) {
    const api = 'http://127.0.0.1:8000';
    fetch(`${api}/api/todos/${noteId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) throw new Error('Failed to delete note');
        displayFeedback('Note successfully deleted!', 'success');
        fetchAndDisplayNotes();
    })
    .catch(error => {
        displayFeedback(`Error: ${error.message}`, 'error');
    });
}
async function fetchAndDisplayFiles() {
    const response = await fetch('/api/MainOpt/files');
    const data = await response.json();
    const listElement = document.getElementById('optimizationsList');
    data.files.forEach(file => {
        const link = document.createElement('a');
        link.href = `/MainOpt/${file}`;
        link.textContent = file;
        link.download = file;
        listElement.appendChild(link);
        listElement.appendChild(document.createElement('br'));
    });
}


    data.files.forEach(file => {
        const link = document.createElement('a');
        link.href = `/MainOpt/${file}`;
        link.download = file;
        link.textContent = `Download ${file}`;
        optimizationsList.appendChild(link);
        optimizationsList.appendChild(document.createElement('br')); // Add a line break for readability
    });


document.addEventListener('DOMContentLoaded', fetchAndDisplayMainOptFiles);



