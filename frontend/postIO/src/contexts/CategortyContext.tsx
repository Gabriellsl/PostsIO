import { createContext, useState, useEffect, ReactNode } from 'react';
import { Category } from '../types';
import { CategoryService } from '../service';

export interface CategoryContextType {
  categories: Category[];
  loading: boolean;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
  children: ReactNode;
}

const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CategoryService.getCategories()
      .then((response: any) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, loading }}>{children}</CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
