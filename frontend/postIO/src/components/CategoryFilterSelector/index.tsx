import { useState } from 'react';
import { CategoryFilter } from '../../types';

function CategoryFilterSelector() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(CategoryFilter.ALL);

  return (
    <div className="text-foreground flex">
      <span className="flex items-center text-xs">
        <input
          type="radio"
          name="category"
          value="allCategories"
          className={`mr-2`}
          checked={selectedCategory === CategoryFilter.ALL}
          onChange={() => setSelectedCategory(CategoryFilter.ALL)}
        />
        All categories
      </span>

      <span className="flex items-center text-xs">
        <input
          type="radio"
          name="category"
          value="favoriteCategories"
          className=" ml-4 mr-2"
          checked={selectedCategory === CategoryFilter.FAVORITE}
          onChange={() => setSelectedCategory(CategoryFilter.FAVORITE)}
        />
        Favorite categories
      </span>
    </div>
  );
}

export default CategoryFilterSelector;
