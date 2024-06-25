import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import startApp from "./src/app.js";

const PORT = process.env.PORT || 3000;

// Resolver __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const app = await startApp();

    // Servir arquivos estáticos
    app.use(express.static(path.join(__dirname, 'public')));

    // Servir index.html para qualquer rota não reconhecida
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    app.listen(PORT, () => {
        console.log(`Servidor escutando na porta ${PORT}`);
    });
}

main();
