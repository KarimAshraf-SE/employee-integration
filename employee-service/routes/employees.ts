var express = require("express");
var router = express.Router();

var employees = [
  {
    id: 1,
    firstName: "Lionel",
    lastName: "Messi",
    age: 34,
    email: "messi@psg.com",
    hiringDate: "January 1, 2015",
  },
  {
    id: 2,
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 35,
    email: "ronaldo@nasr.com",
    hiringDate: "February 2, 2016",
  },
  {
    id: 3,
    firstName: "Neymar",
    lastName: "Santos",
    age: 26,
    email: "neymar@psg.com",
    hiringDate: "March 3, 2017",
  },
  {
    id: 4,
    firstName: "Kylian",
    lastName: "Mbappe",
    age: 23,
    email: "mbappe@psg.com",
    hiringDate: "April 4, 2018",
  },
];

/* GET users listing. */
router.get("/", (req, res) => {
  res.json(employees);
});

router.post("/", (req, res) => {
  const employee = req.body;
  employees.push(employee);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const foundemployee = employees.find((employee) => employee.id == id);
  res.send(foundemployee);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  employees = employees.filter((employee) => employee.id != id);
  res.json(employees);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const employee = req.body
  employees = employees.filter((employee) => employee.id != id);
  employees.push(employee)
});

module.exports = router;
