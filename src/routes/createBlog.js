// requête création user
const {Blog} = require("../db/sequelize");
// import models User de sequelize

module.exports = (app) => {
    // app instance d'espress à laquelle la route sera rattachée
    app.post('/blogs', (req, res) => {
        Blog.create(req.body)
        // création nouvel user avec les informations dans le corps de la requête
        .then(blogs => {
            // Si la création de l'utilisateur réussit, cette fonction de rappel est exécutée avec l'utilisateur nouvellement créé ou les utilisateurs créés (selon la définition du modèle).
            const message = 'Blog créé';
            res.json({message, data: blogs});
        })
    })
}
// export de la requête afin de l'utiliser dans le point d'entrée
