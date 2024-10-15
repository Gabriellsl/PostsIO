import { useCallback, useContext } from 'react';
import CategoryButton from '../CategoryButton';
import { CategoryContext } from '../../contexts/CategortyContext';

interface PostItemProps {
  date: string;
  description: string;
  categoryIdList: string[];
  selectedCategory?: string;
}

function PostItem({ date, description, categoryIdList, selectedCategory }: PostItemProps) {
  const categoryContext = useContext(CategoryContext);

  if (!categoryContext) {
    throw new Error('useContext must be used inside a CategoryProvider');
  }

  const { categories, loading } = categoryContext;

  const handleGetCategoryName = useCallback(
    (categoryId: string) => {
      if (categories.length === 0 || loading) return { categoryName: 'Error', isFavorite: false };

      const category = categories.find((category) => category.id === categoryId);
      if (category) {
        return { categoryName: category.name, isFavorite: category.favorite };
      }

      return { categoryName: 'Error', isFavorite: false };
    },
    [categories, loading]
  );

  return (
    <div className="px-4 py-8 flex flex-col border-b">
      <label className="text-primary text-sm font-semibold">{date}</label>
      <span className="pt-4 text-sm text-foreground-secondary">{description}</span>
      <div className="pt-4 flex flex-wrap gap-2">
        {!loading &&
          categoryIdList?.map((categoryId) => {
            const { categoryName, isFavorite } = handleGetCategoryName(categoryId);
            return (
              <CategoryButton
                key={categoryId}
                id={categoryId}
                title={categoryName}
                activated={categoryId === selectedCategory}
                isFavorite={isFavorite}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PostItem;
