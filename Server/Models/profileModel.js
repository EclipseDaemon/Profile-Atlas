const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  interests: {
    type: [String],
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
