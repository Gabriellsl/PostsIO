import { useContext, useEffect, useState } from 'react';
import CategoryButton from '../CategoryButton';
import { Category } from '../../types';
import CategoryFilterSelector from '../CategoryFilterSelector';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryContext } from '../../contexts/CategortyContext';
import Loading from '../Loading';
import { ParamsContext } from '../../contexts/ParamsContext';

interface NavigationProps {
  children: React.ReactNode;
}

function Navigation({ children }: NavigationProps) {
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const categoryContext = useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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
  }, [paramsContext.categoryId]);

  const handleNavigateToCategory = (categoryId: string) => {
    navigate(`/category/${categoryId}/posts`);
    setShowMenuItems(false);
    setSelectedCategory(categoryId);
  };

  return (
    <div className="h-screen md:flex overflow-hidden">
      <div>
        <nav className="bg-primary md:w-80 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center sm:justify-start md:justify-center text-primary-foreground text-sm">
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="md:hidden relative p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={handleSwitchMenuStatus}
                >
                  {!showMenuItems ? (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      data-slot="icon"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
              <span className="ml-4">Posts</span>
            </div>
          </div>
        </nav>

        <div
          className={`${showMenuItems ? 'max-h-fit' : 'max-h-0'} md:max-h-screen	 md:w-80 md:h-screen overflow-hidden transition-all ease-in-out delay-200 border-b-2 mb-2 md:border-r border-accent`}
          id="mobile-menu"
        >
          <div className="space-y-1 pt-6 px-2">
            <CategoryFilterSelector />
          </div>
          <div className="space-y-1 px-2 pb-3 pt-12 sm:px-3">
            {categories?.map((category: Category) => {
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
