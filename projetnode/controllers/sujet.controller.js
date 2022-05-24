import mongoose from 'mongoose';
import Sujet from '../models/Sujet.model.js';
export const getSujets = async (req, res) => {
try {
const cat = await Sujet.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getSujetByID = async (req, res) => {
try {
const spec = await Sujet.findById(req.params.id);
res.status(200).json(spec);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createSujet = async (req, res) => {
const { nomsujet } = req.body;
const newSujet = new Sujet({ nomsujet:nomsujet })
try {
await newSujet.save();
res.status(201).json(newSujet );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateSujet= async (req, res) => {
const { id } = req.params;
const { nomsujet } = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de sujet avec un id: ${id}`);
const sj1 = { nomsujet:nomsujet, _id: id };
await Sujet.findByIdAndUpdate(id, sj1);
res.json(sj1);
}
export const deleteSujet = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de sujet avec l'ID: ${id}`);
await Sujet.findByIdAndDelete(id);
res.json({ message: "sujet supprimée avec succès." });
}