import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryContext } from '../../contexts/CategortyContext';
import { MemoryRouter } from 'react-router-dom';
import PostItem from './Post';
import { beforeAll, describe, expect, it, vi } from 'vitest';

const mockCategories = [
  { id: '1', name: 'Category 1', favorite: false },
  { id: '2', name: 'Category 2', favorite: true }
];

const mockCategoryContext = {
  categories: mockCategories,
  loading: false,
  updateCategories: () => Promise.resolve()
};

const navigateMock = vi.fn();
const updateCategories = vi.fn();

describe('PostItem', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async () => {
      const actual = await vi.importActual('react-router-dom');
      return {
        ...actual,
        useNavigate: () => navigateMock
      };
    });
  });

  it('should render post item with categories and navigates on category button click', () => {
    render(
      <MemoryRouter>
        <CategoryContext.Provider value={mockCategoryContext}>
          <PostItem
            date="2024-10-16"
            description="This is a post description."
            categoryIdList={['1', '2']}
            selectedCategory="1"
          />
        </CategoryContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('post-date')).toBeInTheDocument();
    expect(screen.getByTestId('post-description')).toBeInTheDocument();

    expect(screen.getByTestId(`post-category-1`)).toBeInTheDocument();
    expect(screen.getByTestId(`post-category-2`)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId(`post-category-1`));

    expect(navigateMock).toHaveBeenCalledWith('/category/1/posts');
  });

  it('should display loading state correctly', () => {
    render(
      <MemoryRouter>
        <CategoryContext.Provider value={{ categories: [], loading: true, updateCategories }}>
          <PostItem
            date="2024-10-16"
            description="This is a post description."
            categoryIdList={['1', '2']}
            selectedCategory="1"
          />
        </CategoryContext.Provider>
      </MemoryRouter>
    );

    expect(screen.queryByText('Category 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Category 2')).not.toBeInTheDocument();
  });

  it('should return the correct category name when category is found (Category 1)', () => {
    render(
      <MemoryRouter>
        <CategoryContext.Provider value={mockCategoryContext}>
          <PostItem date="2024-10-16" description="Test Post" categoryIdList={['1']} />
        </CategoryContext.Provider>
      </MemoryRouter>
    );

    const categoryButton = screen.getByText('Category 1');
    expect(categoryButton).toBeInTheDocument();
  });

  it('should return "Error" when category is not found', () => {
    render(
      <MemoryRouter>
        <CategoryContext.Provider value={mockCategoryContext}>
          <PostItem date="2024-10-16" description="Test Post" categoryIdList={['999']} />
        </CategoryContext.Provider>
      </MemoryRouter>
    );

    const categoryButton = screen.getByText('Error');
    expect(categoryButton).toBeInTheDocument();
  });
});
