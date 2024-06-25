import Usuario from "../models/usuario.js";

class UsuarioController {
    static async listarUsuarios(req, res) {
        try {
            const listaUsuarios = await Usuario.find({});
            res.status(200).json(listaUsuarios);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar usuários", error: error.message });
        }
    }

    static async listarUsuarioPorId(req, res) {
        try {
            const id = req.params.id;
            const usuarioEncontrado = await Usuario.findById(id);
            if (usuarioEncontrado) {
                res.status(200).json(usuarioEncontrado);
            } else {
                res.status(404).json({ message: "Usuário não encontrado" });
            }
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição do usuário`, error: erro.message });
        }
    }

    static async cadastrarUsuario(req, res) {
        try {
            const novoUsuario = new Usuario(req.body);
            await novoUsuario.save();
            res.status(201).json({ message: "Usuário criado com sucesso", usuario: novoUsuario });
        } catch (erro) {
            res.status(400).json({ message: `Falha ao cadastrar usuário`, error: erro.message });
        }
    }

    static async atualizarUsuario(req, res) {
        try {
            const id = req.params.id;
            const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
            if (usuarioAtualizado) {
                res.status(200).json({ message: "Usuário atualizado com sucesso", usuario: usuarioAtualizado });
            } else {
                res.status(404).json({ message: "Usuário não encontrado" });
            }
        } catch (erro) {
            res.status(400).json({ message: `Falha na atualização do usuário`, error: erro.message });
        }
    }

    static async excluirUsuario(req, res) {
        try {
            const id = req.params.id;
            const usuarioExcluido = await Usuario.findByIdAndDelete(id);
            if (usuarioExcluido) {
                res.status(200).json({ message: "Usuário excluído com sucesso" });
            } else {
                res.status(404).json({ message: "Usuário não encontrado" });
            }
        } catch (erro) {
            res.status(500).json({ message: `Falha na exclusão do usuário`, error: erro.message });
        }
    }
}

export default UsuarioController;
