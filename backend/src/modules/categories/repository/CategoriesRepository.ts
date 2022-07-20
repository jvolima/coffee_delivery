import { prisma } from "../../../prisma";
import { ICategoriesRepository } from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  async create(name: string): Promise<void> {
    await prisma.category.create({
      data: {
        name
      }
    });
  }
}