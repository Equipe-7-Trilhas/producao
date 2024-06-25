import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import usuarioRoutes from "./usuarioRoutes.js";
import organizacaoRoutes from "./organizacaoRoutes.js";

// Resolver __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = (app) => {
    // Servir arquivos estáticos
    app.use(express.static(path.join(__dirname, '../../public')));

    // Servir index.html ao acessar a raiz
    app.route("/").get((req, res) => {
        res.sendFile(path.join(__dirname, '../../public', 'index.html'));
    });

    app.use(express.json());
    app.use(usuarioRoutes);
    app.use(organizacaoRoutes);
};

export default routes;
