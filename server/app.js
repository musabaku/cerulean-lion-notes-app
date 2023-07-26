import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import notesRoutes from "./routes/notes.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

mongoose
	.connect(process.env.MONGODB_CONNECT_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database connected!"))
	.catch((err) => console.log(err));

app.get("/", (req, res) => {
	res.send("Cerulean Lions Sticky Notes app!");
});

app.use("/api/", notesRoutes);

app.listen(PORT, () => {
	console.log(`Server Started at ${PORT}`);
});
