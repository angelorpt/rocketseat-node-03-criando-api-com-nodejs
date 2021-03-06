import { ICAtegoriesRepository } from "../repositories/ICategoriesRespository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICAtegoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists!`);
    }

    this.categoriesRepository.create({ name, description });
  }
}

export default CreateCategoryService;
