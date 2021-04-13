const express = require("express");

const app = express();

const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const contactsRoute = require("./routes/contacts");

app.get("/", (req, res) => res.json({ msg: "This is a msg" }));

//Define routes
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/contacts", contactsRoute);

const PORT = 3380 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is runnin on port ${PORT}.....`));
