const getDB = require('../utilsDB/database').getDB;


class Books {
    constructor(ISBN, bookTitle, overdueFee, publisher, datePublished) {
        this.ISBN = ISBN;
        this.bookTitle = bookTitle;
        this.overdueFee = `$${overdueFee}`;
        this.publisher = publisher;
        this.datePublished = datePublished;
    }

    save() {
        const db = getDB();
        db.collection('cityLibraryCollection')
            .insertOne(this)
    }

    static findAll() {
        const db = getDB();
        return db.collection('cityLibraryCollection')
            .find()
            .toArray();
    }

    static findBookByISBN(isbn) {
        const db = getDB();
        return db.collection('cityLibraryCollection')
            .find({"ISBN": `${isbn}`})
            .toArray()
    }

    static deleteBook(isbn){
        const db = getDB();
        return db.collection('cityLibraryCollection')
        .deleteOne({"ISBN":`${isbn}`})
    }

}

module.exports = Books;