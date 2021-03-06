const wordController = require("../controllers/word.controller");
const wordError = require("../middlewares/errors/word.error.js");

const router = require("express").Router();

router.get("/all", wordController.getAllWords);
router.get("/id", wordController.getWordsById);
router.use(wordError.errorHandler);

module.exports = router;

/*
each component with CRUD will be in seperate route file.
each route will use each controller and error handler.
*/
