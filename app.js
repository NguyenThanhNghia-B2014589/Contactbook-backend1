const express = require ("express");
const cors = require ("cors");
const contactsRouter = require("./app/routes/contact.route");

const app = express();
const contactsRouter = require("./app/routes/contact.route");

app.use("/api/contacts", contactsRouter);
app.use(cors());
app.unsubscribe(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application."});
});

module.exports = app;