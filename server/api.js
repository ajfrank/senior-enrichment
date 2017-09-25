"use strict";
const api = require("express").Router();
const db = require("../db");
const Campus = require("../db/models/Campus");
const Student = require("../db/models/Student");

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get("/campuses", (req, res, next) => {
  Campus.findAll({ order: ["id"] }).then(result => {
    res.send(result);
  });
});

api.get("/campus/:id", (req, res, next) => {
  Campus.findById(req.params.id).then(result => {
    res.send(result);
  });
});

api.post("/campus/:name", (req, res, next) => {
  Campus.create({
    name: req.params.name,
    image: req.body.params.image
  })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error(err);
    });
});

api.delete("/campus/:id", (req, res, next) => {
  Campus.destroy({
    where: {
      id: parseInt(req.params.id)
    }
  })
    .then(result => {
      res.status(204).end();
    })
    .catch(next);
});

api.get("/students", (req, res, next) => {
  Student.findAll({
    include: [{ model: Campus }],
    order: ["id"]
  }).then(result => {
    res.send(result);
  });
});

api.get("/student/:id", (req, res, next) => {
  Student.findById(req.params.id).then(result => {
    res.send(result);
  });
});

api.post("/student", (req, res, next) => {
  Student.create({
    name: req.body.params.name,
    email: req.body.params.email,
    campusId: req.body.params.campusId * 1
  })
    .then(student => {
      return Student.findOne({
        where: { id: student.id },
        include: [{ model: Campus }]
      });
    })
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
    });
});

api.delete("/student/:id", (req, res, next) => {
  Student.destroy({
    where: {
      id: parseInt(req.params.id)
    }
  }).then(result => {
    res.send(`Student was deleted`);
  });
});

module.exports = api;
