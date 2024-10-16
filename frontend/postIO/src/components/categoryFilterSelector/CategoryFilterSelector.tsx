import { useState } from 'react';
import { CategoryFilter } from '../../types';

interface CategoryFilterSelectorProps {
  selectedCategoryFilter: CategoryFilter;
  setSelectedCategoryFilter: (categoryFilter: CategoryFilter) => void;
}

function CategoryFilterSelector({
  selectedCategoryFilter,
  setSelectedCategoryFilter
}: CategoryFilterSelectorProps) {
  return (
    <div className="text-foreground flex">
      <span className="flex items-center text-xs">
        <input
          type="radio"
          name="category"
          value="allCategories"
          className={`mr-2`}
          checked={selectedCategoryFilter === CategoryFilter.ALL}
          onChange={() => setSelectedCategoryFilter(CategoryFilter.ALL)}
        />
        All categories
      </span>

      <span className="flex items-center text-xs">
        <input
          type="radio"
          name="category"
          value="favoriteCategories"
          className=" ml-4 mr-2"
          checked={selectedCategoryFilter === CategoryFilter.FAVORITE}
          onChange={() => setSelectedCategoryFilter(CategoryFilter.FAVORITE)}
        />
        Favorite categories
      </span>
    </div>
  );
}

export default CategoryFilterSelector;
