import express from "express";

const app = express();
const PORT = 3000; // Numéro de port sur lequel le serveur écoute

app.get("/", (req, res) => {
  res.send("Serveur en ligne !");
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
