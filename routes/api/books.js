const router = require("express").Router()
const booksController = require("../../controllers/booksControllers")




router.route("/")
    .post(booksController.create)
    .get(booksController.get)
    



router.route("/:id")
    .delete(booksController.getOne)
    
    



module.exports = router