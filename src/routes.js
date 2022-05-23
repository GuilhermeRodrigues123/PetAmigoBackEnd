const express = require('express');
const routes = express.Router();

/*const PetValidator = require("./Validators/PetValidator");
const UsuarioValidator = require("./Validators/UsuarioValidator");*/

const UsuarioController = require("./controllers/UsuarioController");
const UsuarioValidator = require("./validators/Usuariovalidator");

const PetController = require("./controllers/PetController");
const PetValidator = require("./validators/PetValidator");

const FavoritarController = require("./controllers/FavoritarController");
const FavoritarValidator = require("./Validators/FavoritarValidator");

const testeUsers = [

    {
        usuario_id: 1,
        nome: "teste1",
        email: "teste1@email1.com",
    },

    {
        usuario_id: 2,
        nome: "teste2",
        email: "teste2@email2.com",
    },

    {
        usuario_id: 3,
        nome: "teste3",
        email: "teste3@email3.com",
    },

    {
        usuario_id: 4,
        nome: "teste4",
        email: "teste4@email4.com",
    },

    {
        usuario_id: 5,
        nome: "teste5",
        email: "teste5@email5.com",
    },
]
const testePets = [

    {
        pet_id: 1,
        nome: "pet1",
        porte: "gato"
    },

    {
        pet_id: 2,
        nome: "pet2",
        porte: "gato"
    },

    {
        pet_id: 3,
        nome: "pet3",
        porte: "gato"
    },

    {
        pet_id: 4,
        nome: "pet4",
        porte: "cachorro"
    },

    {
        pet_id: 5,
        nome: "pet5",
        porte: "cachorro"
    },
]

//Usuarios
routes.get("/usuarios/:usuario_id", UsuarioValidator.getById, UsuarioController.getById);
routes.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
routes.put("/usuarios/:usuario_id", UsuarioValidator.update, UsuarioController.update);
routes.delete("/usuarios/:usuario_id", UsuarioValidator.delete, UsuarioController.delete);

//Pets
routes.get("/pets/:pet_id", PetValidator.getById, PetController.getById);
routes.post("/pets/", PetValidator.create, PetController.create);
routes.put("/pets/:pet_id", PetValidator.update, PetController.update);
routes.delete("/pets/:pet_id", PetValidator.delete, PetController.delete);

//Favoritar
routes.get("/favoritos/:usuario_id", FavoritarController.getById);
routes.post("/favoritos", FavoritarController.create);
routes.delete("/favoritos/:usuario_id/:pet_id", FavoritarController.delete);


/*
routes.get('/users', (req, res) => { //acessar o usuario
    const query = req.query;
    console.log(req);
    res.status(200).json(testeUsers);
});

routes.post('/users', (req, res) => { //criar novo usuario
    const newUser = req.body; //receber novo usuário de algum lugar (corpo da requisição)

    testeUsers.push(newUser);
    res.status(200).json({ message: "criado com sucesso." });
});

routes.put('/users/:userId', (req, res) => { //criar novo usuario
    const { userId } = req.params;
    const newFields = req.body; //receber novo usuário de algum lugar (corpo da requisição)

    let selectedIndex;
    let selected = testeUsers.find((usuario, index) => {
        selectedIndex = index;
        return usuario.id === userId;
    });
    selected = { ...selected, ...newFields };

    testeUsers[selectedIndex] = selected;

    res.status(200).json({ message: "apagado com sucesso." })

});

routes.delete('/users/:userId', (req, res) => {
    const { userId } = req.params;

    return res.status(200).json(testeUsers);
});


routes.get('/pets', (req, res) => { //acessar o usuario
    const query = req.query;
    console.log(req);
    res.status(200).json(testePets);
});

routes.post('/Pets', (req, res) => { //criar novo usuario
    const newPet = req.body; //receber novo usuário de algum lugar (corpo da requisição)

    testePets.push(newPet);
    res.status(200).json({ message: "criado com sucesso." });
});

routes.put('/pets/:petId', (req, res) => { //criar novo usuario
    const { petId } = req.params;
    const newFields = req.body; //receber novo usuário de algum lugar (corpo da requisição)

    let selectedIndex;
    let selected = testePets.find((pet, index) => {
        selectedIndex = index;
        return pet.id === petId;
    });
    selected = { ...selected, ...newFields };

    testePets[selectedIndex] = selected;

    res.status(200).json({ message: "apagado com sucesso." })

});
*/
module.exports = routes;