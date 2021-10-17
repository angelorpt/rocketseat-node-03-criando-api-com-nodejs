import { Category } from "../models/Category";
import {
  ICAtegoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRespository";

class PostgresCategoriesRepository implements ICAtegoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
