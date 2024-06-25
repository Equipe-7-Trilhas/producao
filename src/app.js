import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Função para iniciar o aplicativo
async function startApp() {
    const app = express();
    
    // Conectando ao banco de dados
    const conexao = await conectaNaDatabase();

    conexao.on("error", (erro) => {
        console.error("Erro de conexão", erro);
    });

    conexao.once("open", () => {
        console.log("Conexão com o banco feita com sucesso");
    });

    app.use(express.json());
    routes(app);

    return app;
}

export default startApp;
