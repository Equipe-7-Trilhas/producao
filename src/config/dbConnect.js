import mongoose from "mongoose";

async function conectaNaDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECT_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
}

export default conectaNaDatabase;
