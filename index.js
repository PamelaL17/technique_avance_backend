// Creation d'un serveur comme xampp
const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const serveur = http.createServer((req, res)=>{
    if (res.method == "GET" && req.url == "/") {
        res.end("Accueil");
    } else {
        res.end("Patate");
    }
});

serveur.listen(process.env.PORT, ()=> {
    console.log(`le serveur est demarre sur le port ${process.env.PORT}`);
});

