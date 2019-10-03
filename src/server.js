const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3333;
require("dotenv").config();

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(require("./routes"));

app.listen(PORT, _ =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
