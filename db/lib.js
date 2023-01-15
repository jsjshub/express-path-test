var conn = require("../db/config");

var Memberselect = async (data) => {
  return new Promise((resolve) => {
    conn.query(
      "SELECT * FROM MEMBER WHERE user=?",
      data,
      function (error, results, fields) {
        resolve(results[0]);
      }
    );
  });
};

module.exports = {
  Memberselect,
};
