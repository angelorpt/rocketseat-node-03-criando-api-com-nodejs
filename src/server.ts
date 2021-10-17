import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(categoriesRoutes);

app.listen(3000, () => console.log("API Running!"));
