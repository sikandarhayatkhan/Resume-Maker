var express = require("express");
var router = express.Router();
const Controller = require("../Controller/main");
var upload = require("../upload");
var tokenverify = require("../TokenVerify");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/template", function(req, res, next) {
  res.render("template", { title: "Express" });
});

router.get("/resumeexample", function(req, res, next) {
  res.render("resumeexample", { title: "Express" });
});

router.get("/createtemplate", function(req, res, next) {
  res.render("createtemplate", { title: "Express" });
});

router.get("/temp1", function(req, res, next) {
  res.render("temp1", { title: "Express" });
});

router.get("/temp2", function(req, res, next) {
  res.render("temp2", { title: "Express" });
});

router.get("/temp3", function(req, res, next) {
  res.render("temp3", { title: "Express" });
});

router.get("/temp4", function(req, res, next) {
  res.render("temp4", { title: "Express" });
});

router.get("/loginpage", function(req, res) {
  res.render("login", { title: "Express" });
});


router.post("/adduser", Controller.adduser);
router.post("/login", Controller.login);

router.post("/cvdata", upload.single("imgpath"), Controller.cvdata);

router.get("/findcvdata", Controller.findcvdata);

module.exports = router;
