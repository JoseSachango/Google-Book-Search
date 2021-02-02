const router = require("express").Router();
const pantryRoutes = require("./books");

// pantry routes
router.use("/books", pantryRoutes);



module.exports = router;
