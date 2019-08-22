const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  f_name: { type: String, max: 100 },
  l_name: { type: String, max: 100 },
  email: { type: String, max: 100 },
  user_name: { type: String, max: 100 },
  address: { type: String, max: 100 },
  phone: { type: String, max: 100 },
  password: { type: String, max: 100 },
  con_password: { type: String, max: 100 }
});

module.exports = mongoose.model("User", UserSchema);
