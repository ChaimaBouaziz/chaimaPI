import express from 'express';
const router = express.Router();
import { getJournalistes, getJournalisteByID, createJournaliste, updateJournaliste, deleteJournaliste } from '../controllers/journaliste.controller.js';

/**
 * @route   GET /api/journalistes
 * @desc    Get All jounalistes
 * @access  Public
 */
router.get('/', getJournalistes);

/**
 * @route   POST /api/journalistes
 * @desc    Ajouter un jounaliste
 * @access  Public
 */
router.post('/', createJournaliste);

/**
 * @route   GET /api/journalistes/:id
 * @desc    Renvoyer un jounaliste
 * @access  Public
 */
router.get('/:id', getJournalisteByID);

/**
 * @route   PUT /api/journalistes/:id
 * @desc    Modifier un jounaliste
 * @access  Public
 */
router.put('/:id', updateJournaliste);

/**
 * @route  DELETE /api/journalistes/:id
 * @desc    Supprimer un jounaliste
 * @access  Public
 */
router.delete('/:id', deleteJournaliste);

export default router;
