const router = require("express").Router();
let Customer = require("../models/Customer");

//localhost:8070/Customer/add

http: router.route("/add").post((req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const phone = Number(req.body.phone);
  const city = req.body.city;
  const address = req.body.address;

  const newCustomer = newCustomer({
    fname,
    lname,
    email,
    phone,
    city,
    address,
  });

  newCustomer
    .save()
    .then(() => {
      req.json("Customer Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/Customer

http: router.route("/").get((req, res) => {
  Customer.find()
    .then((customers) => {
      res.json(customers);
    })
    .catch((err) => {
      console.log(err);
    });
});

http; //localhost:8070/Customer/update/5fsadfsad54asdfsad

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { fname, lname, email, phone, city, address } = req.body;

  const updateCustomer = {
    fname,
    lname,
    email,
    phone,
    city,
    address,
  };

  const update = await Customer.findByIdandUpdate(userId, updateCustomer)
    .then(() => {
      res.status(200).send({ status: "User updated", user: update });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
});

http; //localhost:8070/Customer/delete/5fsadfsad54asdfsad

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Customer.findByIdandDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((errr) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

router.route("/get/:id").delete(async (req, res) => {
  let userId = req.params.id;

  const Customer = await Customer.findByID(userId)
    .then(() => {
      res.status(200).send({ status: "User fetched", user: user });
    })
    .catch((errr) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

module.exports = router;
