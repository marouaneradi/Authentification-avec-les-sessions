# Authentification avec les Sessions

Ce projet est un exemple simple d'application **Node.js** utilisant **Express** et **express‑session** pour gérer l'authentification via des sessions côté serveur.

---

## 🚀 Démarrage rapide

### Prérequis
- **Node.js** (v14 ou supérieur)
- **npm** (fourni avec Node)

### Installation
```bash
# Clone du dépôt depuis GitHub
git clone https://github.com/marouaneradi/Authentification-avec-les-sessions.git
cd "Authentification avec les sessions"

# Installer les dépendances
npm install
```

### Lancement du serveur
```bash
npm start   # ou: node app.js
```
Le serveur écoute sur **http://localhost:3000**.

---

## 📋 Fonctionnalités
- **Page d’accueil** qui affiche un lien de connexion ou le tableau de bord selon l’état de la session.
- **Formulaire de connexion** simple (nom d'utilisateur : `admin`, mot de passe : `1234`).
- **Gestion de session** avec `express-session` ; le secret de session est `monSecretSession`.
- **Tableau de bord protégé** accessible uniquement après authentification.
- **Déconnexion** qui détruit la session serveur.

---

## 🛠️ Structure du projet
```
├─ app.js          # Point d'entrée de l'application
├─ package.json    # Déclarations des dépendances
└─ node_modules/   # Dépendances installées
```

---

## 🔧 Configuration
Le fichier `app.js` contient les paramètres suivants :
- `secret` : secret de session (modifiable pour plus de sécurité).
- `resave` et `saveUninitialized` : réglés sur `false` pour éviter les sessions inutiles.

---

## 📚 Utilisation
1. Ouvrez votre navigateur et rendez‑vous sur **http://localhost:3000**.
2. Cliquez sur **Connexion**, saisissez `admin` / `1234`.
3. Vous serez redirigé·e vers le **Dashboard** où votre nom d'utilisateur apparaît.
4. Cliquez sur **Déconnexion** pour terminer la session.

---

## 🧪 Tests
Ce projet est destiné à l’apprentissage ; aucun test automatisé n’est fourni. Vous pouvez néanmoins vérifier le bon fonctionnement en suivant les étapes d’utilisation ci‑dessus.

---

## 📜 Licence
Ce code est fourni à titre d’exemple et est placé dans le domaine public. Vous êtes libre de le modifier, le distribuer ou l’utiliser dans vos projets.

---

## 🙋‍♂️ Contact
Pour toute question ou suggestion, ouvrez une *issue* sur le dépôt GitHub ou contactez le mainteneur.
