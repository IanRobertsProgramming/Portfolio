import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
    trim: true,
  },
  email: {
    type: String,
    required: "Email is required",
    trim: true,
    unique: "A contact with this email already exists",
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  hashed_password: {
    type: String,
    required: "Password is required",
  },
  salt: String,
});

UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    //this.salt = this.makeSalt();
    this.hashed_password = password;
    //this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });
UserSchema.path("hashed_password").validate(function (v) {
  if (this._password && this._password.length < 6) {
    this.invalidate("password", "Password must be at least 6 characters.");
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required");
  }
}, null);

export default mongoose.model("User", UserSchema);
