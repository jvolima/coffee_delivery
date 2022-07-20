import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repository/ICategoriesRepository";

@injectable()
export class CreateCategoryUseCase {
  constructor (
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(name: string) {
    await this.categoriesRepository.create(name);
  }
}