const express = require("express"); 
const session = require("express-session"); 
const bodyParser = require("body-parser"); 
 
const app = express(); 
 
// Middleware 
app.use(bodyParser.urlencoded({ extended: true })); 
 
// Configuration des sessions 
app.use( 
  session({ 
    secret: "monSecretSession", 
    resave: false, 
    saveUninitialized: false, 
  }) 
); 
 
// Page d'accueil 
app.get("/", (req, res) => { 
  if (req.session.user) { 
    res.send(` 
      <h1>Bienvenue ${req.session.user}</h1> 
      <a href="/dashboard">Dashboard</a><br> 
      <a href="/logout">Déconnexion</a> 
    `); 
  } else { 
    res.send(` 
      <h1>Accueil</h1> 
      <a href="/login">Connexion</a> 
    `); 
  } 
}); 
 
// Formulaire de connexion 
app.get("/login", (req, res) => { 
  res.send(` 
    <form method="POST" action="/login"> 
      <input type="text" name="username" placeholder="Nom utilisateur" /> 
      <input type="password" name="password" placeholder="Mot de passe" /> 
      <button type="submit">Connexion</button> 
    </form> 
  `); 
}); 
 
// Traitement de connexion 
app.post("/login", (req, res) => { 
  const { username, password } = req.body; 
 
  // Vérification simple 
  if (username === "admin" && password === "1234") { 
 
    // Création de la session 
    req.session.user = username; 
 
    res.redirect("/dashboard"); 
  } else { 
    res.send("Identifiants incorrects"); 
  } 
}); 
 
// Route protégée 
app.get("/dashboard", (req, res) => { 
 
  // Vérification de session 
  if (req.session.user) { 
    res.send(` 
      <h1>Dashboard sécurisé</h1> 
      <p>Utilisateur connecté : ${req.session.user}</p> 
      <a href="/logout">Déconnexion</a> 
    `); 
  } else { 
    res.redirect("/login"); 
  } 
}); 
 
// Déconnexion 
app.get("/logout", (req, res) => { 
  req.session.destroy(() => { 
    res.send("Déconnecté avec succès"); 
  }); 
}); 
 
// Lancement du serveur 
app.listen(3000, () => { 
  console.log("Serveur démarré sur http://localhost:3000"); 
});