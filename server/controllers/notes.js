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
export const createNote = router.post("/notes", (req, res) => {
	const { title, content } = req.body;
	const note = new Note({ title, content });

	note.save({})
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			console.error("Error creating note:", err);
			return res.status(500).json({ message: "Internal Server Error" });
		});
})
// TODO: Add PUT route to update a note
// TODO: Add DELETE route to delete a note
