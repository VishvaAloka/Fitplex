// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://root:1234@cluster0.do1rynm.mongodb.net/root?retryWrites=true&w=majority&appName=Cluster0",
  {}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes for Users
app.get("/api/users", (req, res) => {
  User.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.find({ _id: id })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.post("/api/users", (req, res) => {
  const newUser = new User(req.body);
  console.log(newUser);
  newUser
    .save()
    .then((item) => {
      console.log(item);
      res.status(201).json({ message: "Item added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((item) => {
      console.log(item);
      res
        .status(203)
        .json({ message: "Item Fetched Successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((item) => {
      console.log(item);
      res
        .status(203)
        .json({ message: "Item Fetched Successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Products
app.get("/api/products", (req, res) => {
  Product.find()
    .then((item) => {
      console.log(item);
      res
        .status(201)
        .json({ message: "Products Fetched Successfully!", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.find({ _id: id })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.post("/api/products", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((item) => {
      console.log(item);
      res.status(201).json({ message: "Item added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndUpdate(id, req.body, { new: true })
    .then((item) => {
      console.log(item);
      res
        .status(203)
        .json({ message: "Item Fetched Successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then((item) => {
      res.status(203).json({ message: "Deleted Successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.post("/api/login", async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name: name });

    if (user) {
      // Directly compare the passwords
      if (user.password === password) {
        console.log("Password is correct");
        // Further logic here if password is correct
        res.status(200).json({ message: "Password is correct" });
      } else {
        console.log("Password is incorrect");
        // Handle incorrect password
        res.status(400).json({ message: "Password is incorrect" });
      }
    } else {
      console.log("User not found");
      // Handle user not found
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error finding user or checking password:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {

    fname: { type: String },
    lname: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

// Add routes for CRUD operations for users and products here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
