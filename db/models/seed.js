const db = require("../../");
const Sequelize = db.Sequelize;
const Campus = require("./Campus");
const Student = require("./Student");

module.exports = () => {
  return Promise.all([
    Campus.create({
      name: "Luna",
      image:
        "http://www.starshipsodyssey.com/wp-content/uploads/2017/03/superluna-14n_0.jpg"
    }),
    Campus.create({
      name: "Terra",
      image: "http://www.castfvg.it/sistsola/terra/nasa/terra_005.jpg"
    }),
    Campus.create({
      name: "Titan",
      image:
        "https://www.universetoday.com/wp-content/uploads/2016/04/titan_large.jpg"
    }),
    Campus.create({
      name: "Mars",
      image: "http://solarviews.com/raw/mars/marswithclouds.jpg"
    }),
    Campus.create({
      name: "Placeholder Test"
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
