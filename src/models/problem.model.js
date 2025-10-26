import { model, Schema } from "mongoose";

const problemSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "Hard"],
    required: [true, "Difficulty cannot be empty"],
    default: "easy",
  },
  testCases: [
    {
      input: { type: String, required: true },
    },
    {
      output: {
        type: String,
        required: true,
      },
    },
  ],
  editorial: {
    type: String,
  },
});

export default Problem = model("Problem", problemSchema);
