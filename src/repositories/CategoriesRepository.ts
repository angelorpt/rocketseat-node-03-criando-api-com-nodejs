import { Category } from "../models/Category";
import {
  ICAtegoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRespository";

// DTO - Data Transfer Object

class CategoriesRepository implements ICAtegoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  findByName(name: string): Category {
    const category = this.categories.find((c) => c.name === name);
    return category;
  }

  list(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}

export { CategoriesRepository };
