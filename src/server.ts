import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3000, () => console.log("API Running!"));
