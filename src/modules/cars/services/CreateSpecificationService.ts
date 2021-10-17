import { ISpecificationRespository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRespository) {}

  execute({ name, description }: IRequest): void {
    const specification = this.specificationRepository.findByName(name);
    if (specification) {
      throw new Error(`Specification ${name} already exists`);
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
