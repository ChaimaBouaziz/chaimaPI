import mongoose from 'mongoose';

import Journaliste from '../models/Journaliste.model.js';

export const getJournalistes = async (req, res) => { 
    try {
        const cat = await Journaliste.find();
        console.log(cat);   
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getJournalisteByID = async (req, res) => { 
    try {
        const cat = await Journaliste.findById(req.params.id);
        
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createJournaliste = async (req, res) => {
    const { nomJournaliste, email, numtel} = req.body;

    const newJournaliste = new Journaliste({ nomJournaliste:nomJournaliste, email:email, numtel:numtel })

    try {
        await newJournaliste.save();

        res.status(201).json(newJournaliste );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateJournaliste= async (req, res) => {
    const { id } = req.params;
    const { nomJournaliste, email, numtel} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Journaliste avec un id: ${id}`);

    const jr1 = { nomJournaliste:nomJournaliste, email:email, numtel:numtel, _id: id };

    await Journaliste.findByIdAndUpdate(id, jr1);

    res.json(jr1);
}

export const deleteJournaliste = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Journaliste avec l'ID: ${id}`);

    await Journaliste.findByIdAndDelete(id);

    res.json({ message: "Journaliste supprimé avec succès." });
}
