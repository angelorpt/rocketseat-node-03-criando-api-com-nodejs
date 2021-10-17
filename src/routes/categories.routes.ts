import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../models/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.get("/", (req, res) => {
  return res.status(200).json(categories);
});

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category: Category = {
    id: uuidv4(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(category);

  return res.status(201).send();
});

export { categoriesRoutes };
