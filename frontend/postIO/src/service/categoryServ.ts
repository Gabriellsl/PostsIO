import { CategoryRepository } from '../repository';
import { UpdateCategoryFavoriteSchema } from '../schema/UpdateCategorySchema';
import { Category, Post } from '../types';

export default class CategoryServ {
  async getCategories(): Promise<Category[]> {
    return CategoryRepository.getCategories();
  }

  async getCategoryPosts(categoryId: string): Promise<Post[]> {
    return CategoryRepository.getCategoryPosts(categoryId);
  }

  async updateCategoryFavorite(
    categoryId: string,
    data: UpdateCategoryFavoriteSchema
  ): Promise<Category> {
    return CategoryRepository.updateCategoryFavorite(categoryId, data);
  }
}
