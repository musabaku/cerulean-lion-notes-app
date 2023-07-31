import Note from "../models/note.js";
import express from "express";

const router = express.Router();

// Get all notes
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

// Get a note by ID
export const getNoteById = router.get("/notes/:id", (req, res) => {
	const id = req.params.id;

	Note.findById(id)
		.then((note) => {
			if (!note) {
				return res.status(404).json({ message: "Note not found" });
			}
			res.status(200).json(note);
		})
		.catch((err) => {
			console.error("Error getting notes:", err);
			return res.status(500).json({ message: "Internal Server Error" });
		});
});

// Create a new note
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
});

// TODO: Add PUT route to update a note

// Delete a note
export const deleteNote = router.delete("/notes/:id", async (req, res) => {
	const { id } = req.params;

	Note.findByIdAndDelete(id)
		.then((note) => {
			if (!note) {
				return res.status(404).json({ message: "Note not found" });
			}
			res.status(200).json({
				message: `Note title: '${note.title}' deleted successfully`,
			});
		})
		.catch((err) => {
			console.error("Error deleting note:", err);
			return res.status(500).json({ message: "Internal Server Error" });
		});
});
