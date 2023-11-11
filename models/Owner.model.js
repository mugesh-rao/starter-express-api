const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  token: String,
  mobileNumber: {
    type: String,
    unique: true, 
  },
  isVerified: Boolean,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  verificationCode: String,
  address: String,
  aadharNumber: String,
  ownedMachines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Machine' }],
});

module.exports = mongoose.model('Owners', farmerSchema);