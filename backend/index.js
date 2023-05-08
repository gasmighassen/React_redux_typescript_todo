// Import necessary modules
import express from "express";
import mongoose from "mongoose";
import winston from "winston";

// Create a new Express application
const app = express();

// Set up middleware to parse JSON request bodies
app.use(express.json());

// Connect to the MongoDB database
mongoose
  .connect(
    "mongodb+srv://gasmighassen:23671567@cluster0.9jqyziq.mongodb.net/test"
  )
  .then(() => console.log("MongoDB connected!"))
  .catch((error) => console.log(error));

// Define a Mongoose schema for the todo item
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// Create a Mongoose model for the todo item
const Todo = mongoose.model("Todo", todoSchema);

// Define a route to create a new todo item
app.post("/todos", async (req, res) => {
  const { text } = req.body;

  try {
    const newtodo = new Todo({ text });
    await newtodo.save();
    res.send({ data: newtodo });
  } catch (error) {
    res.status(500).json({ error: "Can not add to list" });
  }
});

// Define a route to get all todo items
app.get("/todos", async (req, res) => {
  try {
    let result = await Todo.find();
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Can not get todo list" });
  }
});

// Define a route to update a todo item
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  try {
    const todo = await Todo.findOneAndUpdate(
      { id },
      { text, completed },
      { new: true }
    );
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Can not update" });
  }
});

// Define a route to delete a todo item
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findOneAndDelete({ _id: id });
    res.send({ message: "Todo item deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Can not delete" });
  }
});

// Start the server
app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
