const db = require("../");
const Sequelize = db.Sequelize;

const Student = db.define("student", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Student;
