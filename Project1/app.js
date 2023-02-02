console.log('Welcome to notes app. This is app.js');

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    if(addTxt.textLength == 0){
        alert('Please write something in text box first')
    }
    else{
        let addTxt = document.getElementById('addTxt');
        let addTitle = document.getElementById('addTitle');
        let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title: addTitle.value,
        text: addTxt.value
    };
    notesObj.push(myobj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
}
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                 <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text"> ${element.text}</p>
                            <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`;

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<b> Nothing to show! Use "Add a Note" section above to notes.</b>`;
    }
};

// Function to delete a note
function deleteNote(index) {
    //   console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputVal = search.value.toLowerCase()
    let notesCard = document.getElementsByClassName('noteCard');
    Array.from(notesCard).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();
        if(cardtxt.includes(inputVal)){
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 