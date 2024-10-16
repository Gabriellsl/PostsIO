import { useContext } from 'react';
import { CategoryService } from '../../service';
import FavoriteButton from '../favoriteButton/FavoriteButton';
import { CategoryContext } from '../../contexts/CategortyContext';

interface CategoryButtonProps {
  id: string;
  title: string;
  activated?: boolean;
  isFavorite?: boolean;
  onClick?: (categoryId: string) => void;
}

function CategoryButton({ id, title, activated, isFavorite, onClick }: CategoryButtonProps) {
  const categoryContext = useContext(CategoryContext);

  const handleFavoriteCategory = (isFavorite: boolean) => {
    CategoryService.updateCategoryFavorite(id, { isFavorite })
      .then(() => {
        if (categoryContext) categoryContext.updateCategories();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <a
      className={`flex w-fit block rounded-md text-sm font-semibold ${activated ? 'bg-transparent text-primary border border-primary' : 'bg-primary text-primary-foreground'} pl-6 py-2 pr-4 text-base font-medium items-center cursor-pointer`}
      aria-current="page"
      onClick={() => {
        onClick && onClick(id);
      }}
    >
      <label className="cursor-pointer">{title}</label>
      <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteCategory} />
    </a>
  );
}

export default CategoryButton;
