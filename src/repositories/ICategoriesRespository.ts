import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICAtegoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create(createCategoryDTO: ICreateCategoryDTO): void;
}

export { ICAtegoriesRepository, ICreateCategoryDTO };
