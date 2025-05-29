const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const proyekRoutes = require("./routes/proyekRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // supaya bisa baca req.body

app.use("/api/proyek", proyekRoutes); // semua route proyek di sini

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
