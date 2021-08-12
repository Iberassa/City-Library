// const { url } = require("inspector");
// const { post } = require("../Server/routes");

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
const listOfBooksHeader=listOfBooksDiv.innerHTML
//Add new book
const addNewBookDiv = document.querySelector('.addNewBook');


//Add Book
const bookTitle = document.querySelector('#bookTitle');
const isbn = document.querySelector('#isbn');
const publisher = document.querySelector('#publisher');
const fee = document.querySelector('#fee');
const datePublished = document.querySelector('#datePublished');

//Add book directing button
const addBookButton = document.querySelector('#addBookButton');

//Add book buttons 
const saveBookButton = document.querySelector('#saveBookButton');
const resetButton = document.querySelector('#resetButton');




homeButton.addEventListener("click",loadHomaPage);

function loadHomaPage(){
    if(homeDiv.style.display == "block"){
        return
    }else {
        homeDiv.style.display ="block";
        aboutUsDiv.style.display="none";
        virtualTourDiv.style.display="none";
        addNewBookDiv.style.display ="none";
        listOfBooksDiv.style.display="none";
        addBookButton.style.display="none";
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
        addBookButton.style.display="none";
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
        addBookButton.style.display="none";
    }
}

listBookButton.addEventListener('click',loadBooksPage);

function loadBooksPage(){
    if(listOfBooksDiv.style.display=="block"){
        return;
    }else{
        listOfBooksDiv.style.display="block"
        addBookButton.style.display="block";
        virtualTourDiv.style.display="none";
        homeDiv.style.display ="none";
        aboutUsDiv.style.display="none";
        addNewBookDiv.style.display ="none";
        displayBooks();
    }
}

let count = 1;
function displayBooks(){
    listOfBooksDiv.innerHTML=listOfBooksHeader+`<div class="bookTable"><table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ISBN</th>
        <th scope="col">Book Title</th>
        <th scope="col">Overdue Fee</th>
        <th scope="col">Publisher</th>
        <th scope="col">Date Published</th>
      </tr>
    </thead>
</table>
    </div>`
    const table = document.querySelector('table');
    fetchBooks();
    async function fetchBooks(){
        const url = "http://localhost:3000/citylibrary/api/book";

        const book = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
              },
        })
        const result = await book.json()
        for (let i=0;i<result.length;i++){
           table.innerHTML+= `<tbody>
    <tr>
      <th scope="row">${count}</th>
      <td>${result[i].ISBN}</td>
      <td>${result[i].bookTitle}</td>
      <td>${result[i].overdueFee}</td>
      <td>${result[i].publisher}</td>
      <td>${result[i].datePublished}</td>
    </tr>
    </tbody>`
    count++;
        }
        count = 1;
    }
}

addBookButton.addEventListener('click',addBookFormDisplay);

function addBookFormDisplay(){
    if(addNewBookDiv.style.display=="block"){
        return;
    }else{
        addNewBookDiv.style.display ="block";
        listOfBooksDiv.style.display="none"
        virtualTourDiv.style.display="none";
        homeDiv.style.display ="none";
        aboutUsDiv.style.display="none";
        addBookButton.style.display="none";
    }
}


resetButton.addEventListener('click',removeData)


function removeData(){
    isbn.value='';
    bookTitle.value='';
    fee.value='';
    publisher.value='';
    datePublished.value='' 
}



saveBookButton.addEventListener('click',addBookToDB);


async function addBookToDB(){
    const bookValue = {
        ISBN: isbn.value ,
        bookTitle: bookTitle.value ,
        overdueFee: fee.value ,
        publisher: publisher.value ,
        datePublished: datePublished.value  
    }
    console.log(bookValue)
    const url = "http://localhost:3000/citylibrary/api/book"
    const add = await fetch(url,{
        method:"POST",
        headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(bookValue)
    })
    const result = await add.json();
    console.log(result.Status);
    alert(result.Status);
}
