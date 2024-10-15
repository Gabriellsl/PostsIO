import { useContext, useEffect, useState } from 'react';
import CategoryButton from '../CategoryButton';
import { Category, CategoryFilter } from '../../types';
import CategoryFilterSelector from '../CategoryFilterSelector';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryContext } from '../../contexts/CategortyContext';
import Loading from '../Loading';
import { ParamsContext } from '../../contexts/ParamsContext';
import Nav from '../Nav';

interface NavigationProps {
  children: React.ReactNode;
}

function Navigation({ children }: NavigationProps) {
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const categoryContext = useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<CategoryFilter>(
    CategoryFilter.ALL
  );
  const navigate = useNavigate();
  const paramsContext = useContext(ParamsContext);

  if (!categoryContext) {
    throw new Error('useContext must be used inside a CategoryProvider');
  }

  useEffect(() => {
    if (!categoryContext) return;
    setCategories(categoryContext.categories);
  }, [categoryContext]);

  const handleSwitchMenuStatus = () => {
    setShowMenuItems(!showMenuItems);
  };

  useEffect(() => {
    if (!paramsContext.categoryId) return;
    setSelectedCategory(paramsContext.categoryId);
  }, [paramsContext]);

  const handleNavigateToCategory = (categoryId: string) => {
    navigate(`/category/${categoryId}/posts`);
    setShowMenuItems(false);
    setSelectedCategory(categoryId);
  };

  return (
    <div className="h-screen md:flex overflow-hidden">
      <div>
        <Nav handleSwitchMenuStatus={handleSwitchMenuStatus} showMenuItems={showMenuItems} />

        <div
          className={`${showMenuItems ? 'max-h-fit' : 'max-h-0'} md:max-h-screen	 md:w-80 md:h-screen overflow-hidden transition-all ease-in-out delay-200 border-b-2 mb-2 md:border-r border-accent`}
          id="mobile-menu"
        >
          <div className="space-y-1 pt-6 px-2">
            <CategoryFilterSelector
              selectedCategoryFilter={selectedCategoryFilter}
              setSelectedCategoryFilter={setSelectedCategoryFilter}
            />
          </div>
          <div className="space-y-1 px-2 pb-3 pt-12 sm:px-3">
            {categories
              ?.filter((category: Category) => {
                if (selectedCategoryFilter === CategoryFilter.ALL) {
                  return true;
                } else if (selectedCategoryFilter === CategoryFilter.FAVORITE) {
                  return category.favorite;
                }
                return false;
              })
              .map((category: Category) => {
                return (
                  <CategoryButton
                    key={category.id}
                    id={category.id}
                    title={category.name}
                    isFavorite={category.favorite}
                    activated={category.id === selectedCategory}
                    onClick={handleNavigateToCategory}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div
        id="contentContainer"
        className="pt-16 h-calcNav w-screen md:h-screen xs:w-screen overflow-auto"
      >
        {categoryContext.loading && <Loading />}
        {!categoryContext.loading && children}
      </div>
    </div>
  );
}
export default Navigation;
