import { Specification } from "../models/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRespository,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRespository {
  private specications: Specification[];

  constructor() {
    this.specications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specications.push(specification);
  }

  findByName(name: string): Specification {
    return this.specications.find((s) => s.name === name);
  }
}

export { SpecificationRepository };
