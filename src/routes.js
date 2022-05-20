const express = require('express');
const routes = express.Router();


const testeUsers = [

    { 
        usuario_id: 1,
        name: "teste1",
        email: "teste1@email1.com",
    },

    { 
        usuario_id: 2,
        name: "teste2",
        email: "teste2@email2.com",
    },

    { 
        usuario_id: 3,
        name: "teste3",
        email: "teste3@email3.com",
    },

    { 
        usuario_id: 4,
        name: "teste4",
        email: "teste4@email4.com",
    },

    { 
        usuario_id: 5,
        name: "teste5",
        email: "teste5@email5.com",
    },
]

routes.get('/users', (req,res) => { //acessar o usuario
    const query = req.query;
    console.log(req);
    res.status(200).json(testeUsers);
});

routes.post('/users', (req,res) => { //criar novo usuario
    const newUser = req.body; //receber novo usuário de algum lugar (corpo da requisição)

    testeUsers.push(newUser);
    res.status(200).json({ message: "criado com sucesso." });
});

routes.put('/users/:userId', (req,res) => { //criar novo usuario
    const { userId } = req.params;
    const newFields = req.body; //receber novo usuário de algum lugar (corpo da requisição)
    
    let selectedIndex;
    let selected = testeUsers.find( (usuario, index) => {
        selectedIndex = index;
        return usuario.id === userId; 
    });
    selected = { ...selected, ...newFields };

    testeUsers[selectedIndex] = selected;

    res.status(200).json({ message: "apagado com sucesso." })

});

/*routes.delete('/users/:userId', (req,res) => { //criar novo usuario
    const userId  = Usuario.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.send(err)
        res.json({ message: 'Apagado com sucesso!' })
    });
    

    res.status(200).json({ message: "criado com sucesso." });

});*/


module.exports = routes;