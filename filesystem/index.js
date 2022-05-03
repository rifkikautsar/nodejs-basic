// TODO: tampilkan teks pada notes.txt pada console.
const fs = require("fs");
const { resolve } = require("path");
const readCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca file");
    return;
  }
  console.log(data);
};

fs.readFile(resolve(__dirname, "note.txt"), "UTF-8", readCallback);
