const express = require("express");
<<<<<<< HEAD
const contacts = require("../contollers/contact.controller");
=======
const contact = require("../controllers/contact.controller");
>>>>>>> 9751b18f1bdf01a0d5880897a794c50c38e10d0c

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
<<<<<<< HEAD
    .post(contacts.create)
    .delete(contacts.deleteAll);
=======
    .post(contact.create)
    .delete(contact.deleteAll);
>>>>>>> 9751b18f1bdf01a0d5880897a794c50c38e10d0c

router.route("/favorite")
    .get(contacts.findAllFavorite);

<<<<<<< HEAD
router.route("/id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);
=======
router.route("/:id")
    .get(contacts.findOne)
    .put(contact.update)
    .delete(contact.delete);
>>>>>>> 9751b18f1bdf01a0d5880897a794c50c38e10d0c

module.exports = router;