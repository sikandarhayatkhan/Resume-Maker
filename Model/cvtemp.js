const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CvSchema = new Schema({
  fname: { type: String, max: 100 },
  lname: { type: String, max: 100 },
  phone: { type: String, max: 100 },
  email: { type: String, max: 100 },
  jobtitle: { type: String, max: 100 },
  imgPath: { type: String, max: 100 },
  country: { type: String, max: 100 },
  city: { type: String, max: 100 },
  address: { type: String, max: 100 },
  postcode: { type: String, max: 100 },
  //drivinglicenses:{type:String,max:100},
  nationality: { type: String, max: 100 },
  //placeofbirth:{type:String,max:100},
  dob: { type: String, max: 100 },
  employeehistory: { type: String, max: 100 },
  education: { type: String, max: 100 },
  Internship: { type: String, max: 100 },
  extraacitivity: { type: String, max: 100 },
  refernce: { type: String, max: 100 },
  course: { type: String, max: 100 },
  links: { type: String, max: 100 },
  skill: { type: String, max: 100 },
  languages: { type: String, max: 100 },
  hobbies: { type: String, max: 100 }
  //summary:{type:String,max:200}

  //personal_info:{type:String,max:100},
  //experience:{type:String,max:100},
});

module.exports = mongoose.model("Cvtemp", CvSchema);
