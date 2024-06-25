import "dotenv/config";
import express from "express";
import path from "path";
import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
