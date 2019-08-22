const express = require("express");
var app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

var user_instance = require("../Model/user");
var cv_instence = require("../Model/cvtemp");
var token;

// connection with mongodb
mongoose.connect("mongodb://localhost:27017/resume");
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

exports.adduser = function(req, res) {
  var usermodel = new user_instance({
    f_name: req.body.firstname,
    l_name: req.body.lastname,
    email: req.body.email,
    user_name: req.body.username,
    address: req.body.address,
    phone: req.body.phone,
    password: req.body.password,
    con_password: req.body.repass
  });
  console.log(req.body);
  user_instance.count({ email: req.body.email }, function(err, count) {
    if (count == 0) {
      usermodel.save(function(err) {
        if (err) return res.json(err);
        else return res.json({ message: "User Added Successfully" });
        return res.json({
          success: true,
          type: "head",
          form: req.body
        });
        console.log("New user Added Succesfully");
        //return  res.redirect('/testview');
        // saved!
      });
    } else {
      return res
        .status(200)
        .json((message = "Account Already Exists With This Email Address"));
    }
  });
};

exports.login = function(req, res) {
  var em = req.body.email;
  var pass = req.body.password;

  user_instance.findOne(
    // query
    { email: em, password: pass },

    //{Emp_name: true,Emp_cnic:true,Emp_type:true},

    // callback function
    (err, user) => {
      if (err) return res.status(500).send(err);
      if (user == null)
        return res.status(200).json((message = "No Article With this id"));
      else return res.status(200).json(user);
    }
  );
};

exports.cvdata = function(req, res) {
  var cvmodel = new cv_instence({
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    email: req.body.email,
    jobtitle: req.body.jtitle,
    imgpath: req.file.path,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
    postcode: req.body.pcode,
    //drivinglicenses: req.body.driving,
    nationality: req.body.nationality,
    //placeofbirth: req.body.pob,
    dob: req.body.dob,
    employeehistory: req.body.editor1,
    education: req.body.editor2,
    Internship: req.body.editor3,
    extraactivity: req.body.editor4,
    refernce: req.body.editor5,
    course: req.body.editor6,
    links: req.body.editor7,
    skill: req.body.editor8,
    languages: req.body.editor9,
    hobbies: req.body.editor10
    //summary: req.body.summary
  });
  //cv_instence.count({email:req.body.email}, function (err, count){
  //if(count==0){
  cvmodel.save(function(err) {
    if (err) return res.json(err);
    //return redirect('/findcvdata');
    else console.log(req.body);
    return res.json({ message: "User Added Successfully" });
    return res.json({
      success: true,
      type: "head",
      form: req.body
    });
    console.log("New user Added Succesfully");
    //return  res.redirect('/testview');
    // saved!
  });
  //}
  //else {
  //  return res.status(200).json(message='Account Already Exists With This Email Address');
  //}
  //});
};

exports.findcvdata = function(req, res) {
  cv_instence.find((err, cvdata) => {
    if (err) {
      res.status(500).send(err);
    } else
      res.render("data", {
        title: "CV DATA",
        CVdata: cvdata
      });
  });
};

// token verification
exports.tokenverification = (req, res, next) => {
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, "sikandar", function(err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message:
            "Failed to authenticate token. This security violation will be reported to admin."
        });
      } else {
        console.log("pass");
        next();
        req.decoded = decoded;
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
};
