const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/trade", require("./routes/trade"));
app.use("/api/admin", require("./routes/admin"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running"));