import { AxiosInstance } from 'axios';
import { Category, Post } from '../types';
import { UpdateCategoryFavoriteSchema } from '../schema/UpdateCategorySchema';

export default class CategoryRepo {
  private apiClient: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.apiClient = axios;
  }

  async getCategories(): Promise<Category[]> {
    return this.apiClient.get('/categories');
  }

  async getCategoryPosts(categoryId: string): Promise<Post[]> {
    return this.apiClient.get(`/categories/${categoryId}/posts`);
  }

  async updateCategoryFavorite(
    categoryId: string,
    data: UpdateCategoryFavoriteSchema
  ): Promise<Category> {
    return await this.apiClient.put(`/categories/${categoryId}`, data);
  }
}
