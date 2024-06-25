import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/usuarios", UsuarioController.listarUsuarios); 
router.get("/usuarios/:id", UsuarioController.listarUsuarioPorId);
router.post("/usuarios", UsuarioController.cadastrarUsuario);
router.put("/usuarios/:id", UsuarioController.atualizarUsuario);
router.delete("/usuarios/:id", UsuarioController.excluirUsuario);

export default router;
