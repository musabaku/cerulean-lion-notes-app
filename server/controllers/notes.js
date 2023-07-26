import Note from "../models/note.js";
import express from "express";

const router = express.Router();

export const getNotes = router.get("/notes", (req, res) => {
	Note.find({})
		.then((notes) => {
			res.status(200).json(notes);
		})
		.catch((err) => {
			console.error("Error getting notes:", err);
			return res.status(500).json({ message: "Internal Server Error" });
		});
});

// TODO: Add POST route to create a new note
// TODO: Add PUT route to update a note
// TODO: Add DELETE route to delete a note
