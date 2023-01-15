var express = require("express");
var router = express.Router();
var lib = require("../db/lib");

/* GET home page. */
router.get("/", async function (req, res, next) {
  var data = ["test"];
  var result = await lib.Memberselect(data);
  console.log(result.user);
});

module.exports = router;
