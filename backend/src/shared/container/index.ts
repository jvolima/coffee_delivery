import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/categories/repository/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/categories/repository/ICategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);