const Proyek = require("../models/Proyek");

// Ambil semua proyek
const getAllProyek = async (req, res) => {
  try {
    const proyek = await Proyek.find();
    res.json(proyek);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tambah proyek baru
const createProyek = async (req, res) => {
  const { nama, lokasi } = req.body;

  if (!nama || !lokasi) {
    return res.status(400).json({ message: "Nama dan lokasi harus diisi" });
  }

  try {
    const proyekBaru = new Proyek({ nama, lokasi });
    await proyekBaru.save();
    res.status(201).json(proyekBaru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProyek, createProyek };
