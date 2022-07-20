export interface ICategoriesRepository {
  create(name: string): Promise<void>;
}