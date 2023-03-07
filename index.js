const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 5050;

require("dotenv").config();


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, console.log(`Server started on localhost:${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });