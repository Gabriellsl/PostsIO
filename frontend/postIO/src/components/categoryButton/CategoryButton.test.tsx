import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryContext } from '../../contexts/CategortyContext';
import { describe, expect, it, vi } from 'vitest';
import CategoryButton from './CategoryButton';

interface CategoryButtonProps {
  id: string;
  title: string;
  activated?: boolean;
  isFavorite?: boolean;
  onClick?: (categoryId: string) => void;
}

describe('CategoryButton', () => {
  const mockUpdateCategories = vi.fn();

  const categoryContextValue = {
    categories: [],
    loading: false,
    updateCategories: mockUpdateCategories
  };

  const renderCategoryButton = (props: CategoryButtonProps) => {
    return render(
      <CategoryContext.Provider value={categoryContextValue}>
        <CategoryButton {...props} />
      </CategoryContext.Provider>
    );
  };

  it('should render the category button with title', () => {
    renderCategoryButton({ id: '1', title: 'Category 1' });

    expect(screen.getByText('Category 1')).toBeInTheDocument();
  });

  it('should apply active class when activated is true', () => {
    renderCategoryButton({ id: '1', title: 'Category 1', activated: true });

    const button = screen.getByTestId('post-category-1');
    expect(button).toHaveClass('bg-transparent text-primary border border-primary');
  });

  it('should apply inactive class when activated is false', () => {
    renderCategoryButton({ id: '1', title: 'Category 1', activated: false });

    const button = screen.getByTestId('post-category-1');
    expect(button).toHaveClass('bg-primary text-primary-foreground');
  });

  it('calls onClick when the button is clicked', () => {
    const handleClick = vi.fn();
    renderCategoryButton({ id: '1', title: 'Category 1', onClick: handleClick });

    fireEvent.click(screen.getByTestId('post-category-1'));
    expect(handleClick).toHaveBeenCalledWith('1');
  });
});
