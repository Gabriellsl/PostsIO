import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryFilter } from '../../types';
import CategoryFilterSelector from './CategoryFilterSelector';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('CategoryFilterSelector', () => {
  let selectedCategoryFilter: CategoryFilter;
  const setSelectedCategoryFilter = vi.fn();

  beforeEach(() => {
    selectedCategoryFilter = CategoryFilter.ALL;
    render(
      <CategoryFilterSelector
        selectedCategoryFilter={selectedCategoryFilter}
        setSelectedCategoryFilter={setSelectedCategoryFilter}
      />
    );
  });

  it('should render the radio buttons for all categories and favorite categories', () => {
    expect(screen.getByText('All categories')).toBeInTheDocument();
    expect(screen.getByText('Favorite categories')).toBeInTheDocument();
  });
});
