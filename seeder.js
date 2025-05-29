// seeder.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Proyek = require("./models/Proyek");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

const seedData = [
  { nama: "Pembangunan Jembatan A", lokasi: "Jakarta Barat" },
  { nama: "Renovasi Taman Kota", lokasi: "Bandung" },
  { nama: "Perluasan Drainase", lokasi: "Surabaya" },
];

const importData = async () => {
  try {
    await connectDB();
    await Proyek.deleteMany(); // bersihkan dulu
    const created = await Proyek.insertMany(seedData);
    console.log("✅ Data berhasil ditambahkan:", created.length);
    process.exit();
  } catch (error) {
    console.error("❌ Gagal import data:", error);
    process.exit(1);
  }
};

importData();
