import express from 'express';
const router = express.Router();
import { getSujets, getSujetByID, createSujet,
updateSujet, deleteSujet } from
'../controllers/sujet.controller.js';
/**
* @route GET /api/sujets
* @desc Get All sujets
* @access Public
*/
router.get('/', getSujets);
/**
* @route POST /api/sujets
* @desc Ajouter un sujet
* @access Public
*/
router.post('/', createSujet);
/**
* @route GET /api/sujets/:id
* @desc Renvoyer un sujet
* @access Public
*/
router.get('/:id', getSujetByID);
/**
* @route PUT /api/sujets/:id
* @desc Modifier un sujet
* @access Public
*/
router.put('/:id', updateSujet);
/**
* @route DELETE /api/sujets/:id
* @desc Supprimer une sujet
* @access Public
*/
router.delete('/:id', deleteSujet);
export default router;
