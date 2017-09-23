const db = require("../");
const Sequelize = db.Sequelize;

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Campus;
