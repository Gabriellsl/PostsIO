import axiosClient from '../axiosInstance';
import CategoryRepo from './categoryRepo';

const apiClient = axiosClient();

const CategoryRepository = new CategoryRepo(apiClient);

export { CategoryRepository };
