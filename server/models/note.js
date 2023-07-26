import { model, Schema } from "mongoose";

const noteSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},

	content: {
		type: String,
		required: true,
	},
});

export default model("Note", noteSchema);
