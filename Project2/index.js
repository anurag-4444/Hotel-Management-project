console.log('This is index.js');

// Constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
};

function Display(){

};

// Add methods to display prototype
Display.prototype.add = function(book){
    console.log('Adding to UI');
    let myNotes = localStorage.getItem('myNotes');
    if (myNotes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(myNotes);
    }
    notesObj.push(book)
    localStorage.setItem('myNotes', JSON.stringify(notesObj))
    console.log('oh yeah')


    let html = "";
    notesObj.forEach(function (element) {
        html += `<tr>
                    <td>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.type}</td>
                    
                </tr>`;
                 

    });
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = html;                  
};

// Implement the clear function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function(book){
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else{
        return true;
    }
}

// Implement the delete book function
function deleteBook(index) {
      console.log("I am deleting", index);

    // let myNotes = localStorage.getItem("myNotes");
    // if (myNotes == null) {
    //     notesObj = [];
    // } else {
    //     notesObj = JSON.parse(myNotes);
    // }

    // notesObj.splice(index, 1);
    // localStorage.setItem("myNotes", JSON.stringify(notesObj));
    
}

// Implement function whether book added or not
Display.prototype.show = function(type, displayMessage){
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    setTimeout(function() {
        message.innerHTML = ''
    }, 2000);
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault()
    let myNotes = localStorage.getItem('myNotes');
    if (myNotes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(myNotes);
    }
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
        console.log(type);
    }
    if (programming.checked) {
        type = programming.value;
        console.log(type);
    }
    if (cooking.checked) {
        type = cooking.value;
        console.log(type);
    }
    console.log('You have submitted library form');
    
    let book = new Book(name, author, type)
    
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been suceessfully added');
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }
}
