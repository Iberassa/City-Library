const Books = require('../models/books')

exports.getAllBooks = (req, res) => {
    Books.findAll()
        .then(books => {
            res.send(books);
        })
        .catch(err => console.log(err));
}

exports.getOneBook = (req, res) => {
    Books.findBookByISBN(req.params.isbn)
        .then(book => {
            res.json(book)
        })
        .catch(err => console.log(err))
}

exports.insertBook = (req, res) => {
    const book = new Books(req.body.ISBN, req.body.bookTitle, req.body.overdueFee, req.body.publisher, req.body.datePublished);
    book.save();
    res.json({ Status: "Data inserted" });
}

exports.deleteBook = (req, res) => {
    Books.deleteBook(req.params.isbn)
        .then(result => {
            if (result.deletedCount = 0) {
                res.json({ status: "Success", message: "Book is not available in database!!" })
            } else if (result.deletedCount = 1) {
                res.json({ status: "Success", message: "Book is deleted." })
            }
        })
        .catch(err => console.log(err));
}

exports.updateBook = (req, res) => {
    Books.deleteBook(req.params.isbn)
    const book = new Books(req.params.isbn, req.body.bookTitle, req.body.overdueFee, req.body.publisher, req.body.datePublished);
    book.save()
    res.json({ status: "Success", message: "Book updated Successfully" })
}

