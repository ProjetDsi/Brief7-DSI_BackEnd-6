# BRIEF 7

Marie-Claire Kasai
Anne-Sophie Vandingenen
David Regnier
Faouzilha Hafsi
Romain Cilia


Explique comment tu a developpé les end point de ton api en expliquant avec un exemple

## Développement des endpoints de l’API rest du projet DSI

Le développement d'un point de terminaison d'une API REST peut être divisé en plusieurs étapes. Voici les étapes typiques du développement d'un point de terminaison d'API REST :

- Analyse des besoins : Comprenez les exigences fonctionnelles et non fonctionnelles de l'API REST, y compris les objectifs commerciaux, les cas d'utilisation, les entités de données, les opérations attendues, les formats de données, etc.
Conception de l'API : Concevez la structure de l'API REST en identifiant les ressources principales, les relations entre les ressources et les opérations CRUD (Create, Read, Update, Delete) à prendre en charge. Déterminez également les conventions d'URI, les méthodes HTTP appropriées (GET, POST, PUT, DELETE, etc.), les formats de données (JSON, XML, etc.) et les paramètres requis.
- Mise en place de l'environnement de développement : Configurez votre environnement de développement avec les outils et les frameworks nécessaires pour créer l'API REST. Node Js avec Express.
- Implémentation des fonctionnalités : Écrivez le code pour mettre en œuvre chaque opération de l'API REST en utilisant les fonctionnalités fournies par le framework choisi. Cela peut inclure la définition de modèles de données, de contrôleurs, de routes, de validations de données, d'opérations de persistance, etc.
- Gestion des erreurs et des exceptions : Gérez les erreurs et les exceptions qui peuvent survenir lors de l'exécution des opérations de l'API REST. Fournissez des réponses d'erreur appropriées avec les codes de statut HTTP correspondants, ainsi que des messages d'erreur descriptifs pour aider les développeurs consommateurs de l'API à comprendre les problèmes.
- Documentation de l'API : Créez une documentation détaillée de l'API REST pour aider les développeurs à comprendre comment utiliser l'API, y compris les endpoints disponibles, les paramètres acceptés, les exemples de requêtes et de réponses, les codes de statut HTTP, etc. Vous pouvez utiliser des outils comme Swagger ou OpenAPI pour générer automatiquement la documentation de l'API..
_ Sécurité de l'API : Mettez en place des mécanismes de sécurité pour protéger l'API contre les attaques telles que l'injection SQL, le Cross-Site Scripting (XSS), les attaques par force brute, etc. Cela peut inclure l'authentification et l'autorisation des utilisateurs, l'utilisation de tokens d'accès, la mise en œuvre de CORS (Cross-Origin Resource Sharing), etc.
- Déploiement de l'API : Déployez l'API sur un serveur ou une infrastructure appropriée, en tenant compte des considérations de mise à l'échelle et de disponibilité. Assurez-vous que l'API est accessible et fonctionnelle pour les consommateurs.



## Mise en place d’une api rest

Dans le fichier app.js:

    const express = require('express');
    Cette ligne importe le module Express Elle permet d'utiliser les fonctionnalités fournies par Express dans notre application.

    const bodyParser = require('body-parser');
    Cette ligne importe le module body-parser, qui est utilisé pour analyser le corps des requêtes HTTP et récupérer les données au format JSON ou URL-encoded. Cela nous permettra de traiter les données envoyées par les clients de l'API.
    
    const sequelize = require('./src/db/sequelize');
    Cette ligne importe le module sequelize, qui est une bibliothèque ORM (Object-Relational Mapping) pour Node.js. Elle est utilisée pour interagir avec une base de données relationnelle, probablement configurée dans le fichier sequelize.js situé dans le dossier src/db.
    
    const app = express();
    Cette ligne crée une instance de l'application Express, qui représente notre serveur web. Nous utiliserons cette instance pour configurer les routes de notre API et démarrer le serveur.
    
    const port = 3000 ;
    Cette ligne définit le port sur lequel le serveur écoutera les requêtes entrantes. Dans cet exemple, le serveur sera accessible via http://localhost:3000.
    
    app.use(bodyParser.json());
    analyse le corps de la requête et transforme les données JSON en un objet JavaScript utilisable
    
    require('./src/routes/findAll')(app);
    require('./src/routes/findUser')(app);
    require('./src/routes/createUser')(app);
    require('./src/routes/deleteUser')(app);
    require('./src/routes/updateUser')(app);
    require('./src/routes/login')(app);
    importation des fichiers de routes à partir du repertoire routes.L'objet app est passé en argument pour configurer cette route. On premet au fichier de route d’intéragir avec l’objet app d’express qui configure les routes. Ce qui signifie définir les endpoints (points d'extrémité) de l'API et spécifier les actions qui doivent être effectuées lorsque ces endpoints sont atteints.
    Les routes déterminent comment les différentes requêtes HTTP (GET, POST, PUT, DELETE, etc.) seront traitées par l'API. Elles permettent de spécifier les URL auxquelles les clients de l'API peuvent accéder et les actions qui doivent être exécutées en réponse à ces requêtes.






## Côté connexion tester et consommer l’api rest exemple de requêtes (marie-claire, anne-sophie):

Endpoints avant mise en place de l’authentification et sécurisation:

Get sur 1 seul identifiant sur l’api avant mise en place de l’authentification et sécurisation


Get sur l’api avant mise en place de l’authentification et sécurisation d’un user non existant


Put sur l’api avant mise en place de l’authentification et sécurisation








Post sur l’api avant mise en place de l’authentification et sécurisation


Création de doublons impossible grâce à la mise en place de l’unicité

Delete sur l’api avant mise en place de l’authentification et sécurisation














après ajout de l’authentification et de la sécurisation

post pour obtenir le token













Get général avec username, password, et utilisation du token


Get unique avec username, password, et utilisation du token






















Post  pour ajouter un username et password dans la liste des utilisateurs (token nécessaire pour accomplir cette action)



Put pour modifier la liste des utilisateurs : message d’erreur d’unicité non respectée








Put pour modifier la liste des utilisateurs action nécessitant de renseigner un avec token


Delete pour supprimer un utilisateur de la liste des utilisateurs action nécessitant de renseigner un avec token















mise en place de la sécurisation SSL
















se connecter avec l’username yui et password yui afin d’obtenir le token + SSL


get token + SSL



put token +  SSL



Delete token + SSL

















erreur 

