const express = require("express");
const cors = require("cors");

const app = express();

//middlwares

app.use(express.json()); //req.body
app.use(cors());

//ROUTES//

app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log("Server is Running on port 5000");
});
