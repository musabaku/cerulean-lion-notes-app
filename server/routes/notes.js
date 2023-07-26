import express from "express";
import * as NotesController from "../controllers/notes.js";

const router = express.Router();

// TODO: Add a route to get all notes
router.get("/notes", NotesController.getNotes);

// TODO: Add a route to create a new note
// TODO: Add a route to update a note
// TODO: Add a route to delete a note

export default router;
