
import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import journalisteRouter from "./routes/journaliste.route.js"
import sujetRouter from "./routes/sujet.route.js";
import articleRouter from "./routes/article.route.js"; 
import userRouter from "./routes/user.route.js"
import clientRouter from "./routes/client.route.js";
import commandeRouter from "./routes/commande.route.js";
import lignecommandeRouter from "./routes/lignecommande.route.js"; 
import paymentRouter from "./routes/payment.route.js"

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {console.log("Connexion à la base de données réussie");
   }).catch(err => {
    console.log('Impossible de se connecter à la base de données', err);
    process.exit();
   });

app.use('/api/journalistes', journalisteRouter);
app.use('/api/sujets', sujetRouter);
app.use('/api/articles', articleRouter);
app.get("/",(req,res)=>{
res.send("Bibliothèque");
});

app.use('/api/users', clientRouter);
app.use('/api/commandes', commandeRouter);
app.use('/api/lignescommandes', lignecommandeRouter); 
app.use('/api/payment', paymentRouter);
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`); });
