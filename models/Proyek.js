const mongoose = require("mongoose");

const proyek = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    lokasi: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("Proyek", proyek);
