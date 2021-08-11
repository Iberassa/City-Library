//Navigation
const homeButton = document.querySelector('#homButton');
const aboutUsButton =document.querySelector('#aboutUsButton');
const virtualTourButton = document.querySelector('#virtualTourButton');
const listBookButton = document.querySelector('#booksButton');
const searchButton = document.querySelector('#searchButton');
const searchBar = document.querySelector('#searchBar');


//Display
const homeDiv = document.querySelector('.home');
//About us
const aboutUsDiv =document.querySelector('.aboutUs');
//Virtual tour
const virtualTourDiv = document.querySelector('.virtualTour');
//Display books
const listOfBooksDiv =document.querySelector('.listOfBooks');
//Add new book
const addNewBookDiv = document.querySelector('.addNewBook');


//Add Book
const bookTitle = document.querySelector('#bookTitle');
const isbn = document.querySelector('#isbn');
const publisher = document.querySelector('#publisher');
const fee = document.querySelector('#fee');
const datePublished = document.querySelector('#datePublished');


//Buttons 
const saveBookButton = document.querySelector('#saveBookButton');
const resetButton = document.querySelector('#resetButton');




homeButton.addEventListener("click",loadHomaPage);

function loadHomaPage(){
    console.log(homeDiv.style.display);
    if(homeDiv.style.display == "block"){
        return
    }else {
        homeDiv.style.display ="block";
        aboutUsDiv.style.display="none";
        virtualTourDiv.style.display="none";
        addNewBookDiv.style.display ="none";
        listOfBooksDiv.style.display="none";
    }
}


aboutUsButton.addEventListener('click',loadAboutUsPage);

function loadAboutUsPage(){
    if(aboutUsDiv.style.display=="block"){
        return
    }else{
        aboutUsDiv.style.display="block";
        homeDiv.style.display ="none";
        virtualTourDiv.style.display="none";
        addNewBookDiv.style.display ="none";
        listOfBooksDiv.style.display="none";
    }
}

virtualTourButton.addEventListener('click',loadVirtualtour);

function loadVirtualtour(){
    if(virtualTourDiv.style.display=="block"){
        return;
    }else{
        virtualTourDiv.style.display="block";
        homeDiv.style.display ="none";
        aboutUsDiv.style.display="none";
        addNewBookDiv.style.display ="none";
        listOfBooksDiv.style.display="none";
    }
}

listBookButton.addEventListener('click',loadBooksPage);

function loadBooksPage(){
    if(listOfBooksDiv.style.display=="block"){
        return;
    }else{
        fetchBooks();
        listOfBooksDiv.style.display="block"
        virtualTourDiv.style.display="none";
        homeDiv.style.display ="none";
        aboutUsDiv.style.display="none";
        addNewBookDiv.style.display ="none";
    }
}

function fetchBooks(){
    
}