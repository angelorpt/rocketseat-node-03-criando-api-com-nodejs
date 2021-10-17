import { Router } from "express";
import { Category } from "../models/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.get("/", (req, res) => {
  return res.status(200).json(categories);
});

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category = new Category();
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return res.status(201).json(category);
});

export { categoriesRoutes };
