import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: "First Name is required",
    trim: true,
  },
  lastname: {
    type: String,
    required: "Last Name is required",
    trim: true,
  },
  email: {
    type: String,
    required: "Email is required",
    trim: true,
    unique: "A contact with this email already exists",
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
});

export default mongoose.model("Contact", ContactSchema);
