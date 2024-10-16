import { CategoryFilter } from '../../types';
import RadioButton from '../radioButton/RadioButton';

interface CategoryFilterSelectorProps {
  selectedCategoryFilter: CategoryFilter;
  setSelectedCategoryFilter: (categoryFilter: CategoryFilter) => void;
}

function CategoryFilterSelector({
  selectedCategoryFilter,
  setSelectedCategoryFilter
}: CategoryFilterSelectorProps) {
  const handleSelectCategoryFilter = (selectedCategoryFilter: string) => {
    setSelectedCategoryFilter(selectedCategoryFilter as CategoryFilter);
  };

  return (
    <div className="text-foreground flex">
      <RadioButton
        value={CategoryFilter.ALL}
        checked={selectedCategoryFilter === CategoryFilter.ALL}
        onChange={handleSelectCategoryFilter}
        label="All categories"
      />
      <RadioButton
        value={CategoryFilter.FAVORITE}
        checked={selectedCategoryFilter === CategoryFilter.FAVORITE}
        onChange={handleSelectCategoryFilter}
        classNames="ml-4"
        label="Favorite categories"
      />
    </div>
  );
}

export default CategoryFilterSelector;
