const isAdmin = process.env.IS_ADMIN === 'true';
const port = 3000;

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}

const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(3000, () => console.log(`Server is running on port 3000.http://localhost:${port}`));