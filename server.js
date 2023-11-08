const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getCars,
  createCar,
  getCar,
  deleteCar,
  patchCar,
  putCar,
} = require("./controllers/myControllers");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));
// GET a single blog
app.get("/api/cars/:id", getCar);
// DELETE a blog
app.delete("/api/cars/:id", deleteCar);
// Update blog using PATCH
app.patch("/api/cars/:id", patchCar);
// Update blog using PUT
app.put("/api/cars/:id", putCar);
// Add a new blog
app.post("/api/cars", createCar);
// GET all blogs
app.get("/api/cars", getCars);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});