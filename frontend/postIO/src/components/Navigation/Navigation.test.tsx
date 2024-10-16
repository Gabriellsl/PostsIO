// src/components/Navigation.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { CategoryContext } from '../../contexts/CategortyContext';
import { ParamsContext } from '../../contexts/ParamsContext';
import { describe, it, expect, vi, beforeAll } from 'vitest';

const mockCategories = [
  { id: '1', name: 'Category 1', favorite: false },
  { id: '2', name: 'Category 2', favorite: true }
];

const mockCategoryContext = {
  categories: mockCategories,
  loading: false,
  updateCategories: () => Promise.resolve()
};

const mockParamsContext = {
  categoryId: undefined
};

const setViewport = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height
  });
  window.dispatchEvent(new Event('resize'));
};

const navigateMock = vi.fn();

describe('Navigation', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async () => {
      const actual = await vi.importActual('react-router-dom');
      return {
        ...actual,
        useNavigate: () => navigateMock
      };
    });
  });

  it('renders correctly and displays categories', () => {
    render(
      <MemoryRouter>
        <CategoryContext.Provider value={mockCategoryContext}>
          <ParamsContext.Provider value={mockParamsContext}>
            <Navigation>
              <div>Content</div>
            </Navigation>
          </ParamsContext.Provider>
        </CategoryContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/category 1/i)).toBeInTheDocument();
    expect(screen.getByText(/category 2/i)).toBeInTheDocument();
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('toggles menu items visibility on button click', () => {
    render(
      <MemoryRouter>
        <CategoryContext.Provider value={mockCategoryContext}>
          <ParamsContext.Provider value={mockParamsContext}>
            <Navigation>
              <div>Content</div>
            </Navigation>
          </ParamsContext.Provider>
        </CategoryContext.Provider>
      </MemoryRouter>
    );

    setViewport(375, 667);

    expect(screen.getByTestId('mobile-nav')).toHaveClass('max-h-0');

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('mobile-nav')).toHaveClass('max-h-fit');
  });

  it('navigates to the selected category on button click', () => {
    render(
      <MemoryRouter>
        <CategoryContext.Provider value={mockCategoryContext}>
          <ParamsContext.Provider value={mockParamsContext}>
            <Navigation>
              <div>Content</div>
            </Navigation>
          </ParamsContext.Provider>
        </CategoryContext.Provider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/category 1/i));

    expect(navigateMock).toHaveBeenCalledWith('/category/1/posts');
  });
});
