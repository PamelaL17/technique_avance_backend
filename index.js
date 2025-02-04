// Importations des librairies
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const serveur = express();
dotenv.config();

// Permettre l'acces au dossier public
const dossierPublic = path.join(__dirname, "public");
serveur.use(express.static(dossierPublic));

function authentifier(req, res, next) {
    console.log("Authentification en cours...");
    next();
}

// Routes
/**
 * Route servant à recuperer tous les films de la base de données
 */
serveur.get("/films", authentifier, (req, res)=> {
    return res.json({ msg: "ok" });
});

/**
 * 
 */
serveur.get("/films/:id", (req, res)=> {
    return res.json({ msg: "ok" });
});

/**
 * 
 */
serveur.post("/films", (req, res)=> {
    return res.json({ msg: "ok" });
});

/**
 * Route servant à mettre à zero la base de données
 */
serveur.post("/films/initialiser", authentifier, (req, res)=> {
    return res.json({ msg: "Initialisation completer" });
});

/**
 * 
 */
serveur.put("/films/:id", (req, res)=> {
    return res.json({ msg: "ok" });
});

/**
 * 
 */
serveur.delete("/films/:id", (req, res)=> {
    return res.json({ msg: "ok" });
});

// Ressources 404
serveur.use((req, res)=> {
    res.statusCode = 404;
    return res.status(404).json({ msg: "Ressource non trouver" });
});


serveur.listen(process.env.PORT, ()=> {
    console.log(`le serveur est demarre sur le port ${process.env.PORT}`);
});

