const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes")


const port = 3042;

app.use(cors());
app.use(express.json());

app.use("/",userRoutes)

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
