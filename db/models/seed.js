const db = require("../../");
const Sequelize = db.Sequelize;
const Campus = require("./Campus");
const Student = require("./Student");

module.exports = () => {
  return Promise.all([
    Campus.create({
      name: "Luna"
    }),
    Campus.create({
      name: "Terra"
    }),
    Campus.create({
      name: "Titan"
    }),
    Campus.create({
      name: "Mars"
    })
  ]).then(([Luna, Terra, Titan, Mars]) => {
    Promise.all([
      Student.create({
        name: "AJ Frank",
        campusId: Luna.id
      }),
      Student.create({
        name: "Ariel Frank",
        campusId: Luna.id
      }),
      Student.create({
        name: "Jeremy Frank",
        campusId: Terra.id
      }),
      Student.create({
        name: "Malia Holland",
        campusId: Terra.id
      }),
      Student.create({
        name: "Justin Yang",
        campusId: Titan.id
      }),
      Student.create({
        name: "Uni Yang",
        campusId: Mars.id
      })
    ]);
  });
};
