import express from "express";
import * as NotesController from "../controllers/notes.js";

const router = express.Router();

router.get("/notes", NotesController.getNotes);
router.get("/notes/:id", NotesController.getNoteById);
router.post("/notes", NotesController.createNote);
router.delete("/notes/:id", NotesController.deleteNote);

// TODO: Add a route to update a note

export default router;
