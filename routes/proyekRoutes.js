const express = require("express");
const router = express.Router();
const { getAllProyek, createProyek } = require("../controllers/proyekController");

router.get("/", getAllProyek);       // GET /api/proyek
router.post("/", createProyek);      // POST /api/proyek

module.exports = router;
