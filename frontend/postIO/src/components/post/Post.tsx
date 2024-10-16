import { useCallback, useContext } from 'react';
import CategoryButton from '../categoryButton/CategoryButton';
import { CategoryContext } from '../../contexts/CategortyContext';
import { useNavigate } from 'react-router-dom';

interface PostItemProps {
  date: string;
  description: string;
  categoryIdList: string[];
  selectedCategory?: string;
}

function PostItem({ date, description, categoryIdList, selectedCategory }: PostItemProps) {
  const categoryContext = useContext(CategoryContext);
  const navigate = useNavigate();
  const handleNavigateToCategory = (categoryId: string) => {
    navigate(`/category/${categoryId}/posts`);
  };

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
      <label data-testid="post-date" className="text-primary text-sm font-semibold">
        {date}
      </label>
      <span data-testid="post-description" className="pt-4 text-sm text-foreground-secondary">
        {description}
      </span>
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
                onClick={handleNavigateToCategory}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PostItem;
