const db = require("../");
const Sequelize = db.Sequelize;

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "http://75025.de/comics/0000.png"
  }
});

module.exports = Campus;
