import { createContext, useState, useEffect, ReactNode } from 'react';
import { Category } from '../types';
import { CategoryService } from '../service';

export interface CategoryContextType {
  categories: Category[];
  loading: boolean;
  updateCategories: () => Promise<void>;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
  children: ReactNode;
}

const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    CategoryService.getCategories()
      .then((response: any) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const updateCategories = async () => {
    try {
      await fetchCategories();
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, loading, updateCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
