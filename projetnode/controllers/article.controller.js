import mongoose from 'mongoose';
import Article from '../models/Article.model.js';
export const getArticles = async (req, res) => {
 try { const cat = await Article.find().populate('sujet').populate('jounaliste');
;

 res.status(200).json(cat);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const getArticleByID = async (req, res) => {
 try {
 const art = await Article.findById(req.params.id).populate('sujet').populate('jounaliste');
 res.status(200).json(art);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createArticle = async (req, res) => {
 const {
titre,contenu,prix,qtestock,couverture,sujet,jounaliste } = req.body;

 const newArticle = new Article({
titre:titre,contenu:contenu,prix:prix,qtestock:qtestock,couverture:couverture,sujet:sujet,jounaliste:jounaliste })
 try {
 await newArticle.save();
 res.status(201).json(newArticle );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateArticle= async (req, res) => {
 const { id } = req.params;
 const {
titre,contenu,prix,qtestock,couverture,sujet,journaliste } =
req.body; 
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Article avec un id: ${id}`);
 const art1 = {
titre:titre,contenu:contenu,prix:prix,qtestock:qtestock,couverture:couverture,sujet:sujet,jounaliste:journaliste, _id: id
};
 await Article.findByIdAndUpdate(id,art1);
 res.json(art1);
}
export const deleteArticle = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
d'article avec l'ID: ${id}`);
 await Article.findByIdAndDelete(id);
 res.json({ message: "Article supprimé avec succès." });
}