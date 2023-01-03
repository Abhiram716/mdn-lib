var express = require("express");
var router = express.Router();

// Require our controllers.
var bookController = require("../controllers/bookController");
var authorController = require("../controllers/authorController");
var genreController = require("../controllers/genreController");
var bookInstanceController = require("../controllers/bookinstanceController");

router.get("/", bookController.books);
router.get("/books", bookController.books);

// GET request for list of all Authors.
router.get("/authors", authorController.authorList);

// GET request for list of all Genre.
router.get("/genres", genreController.genreList);

// GET request for list of all BookInstance.
router.get("/book-instances", bookInstanceController.bookInstance);

module.exports = router;
