const express = require("express");
const path = require("path");
const app = express();

//Configutações
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));

// Importação de Rotas
const perfilUsuario = require("./src/routers/perfil-usuario");
const cadastroUsuario = require("./src/routers/cadastro-usuario");
const home = require('./src/routers/home');
const produto = require('./src/routers/produto');
const login = require('./src/routers/login');
const recuperarSenha = require('./src/routers/recuperarSenha');
const sobre = require('./src/routers/sobre');
const carrinho = require('./src/routers/carrinho');

// token
const {
    CreateAcessToken,
    IsValidAcessToken
} = require('./src/middlewares/token')

// Rotas
app.use("/", cadastroUsuario);
app.use("/", perfilUsuario);
app.use('/', home);
app.use('/', produto);
app.use('/', login);
app.use('/', recuperarSenha);
app.use('/', sobre);
app.use('/', carrinho);

// dev
app.get('/dev/login', (req,res) => {
    res.sendFile(__dirname + "/src/views/login.dev.html")
})

app.get('/dev/cadastro', (req,res) => {
    res.sendFile(__dirname + "/src/views/cadastro.dev.html")
})

app.listen(3000, () => console.log(`Servidor rodando na porta ${3000}`));
