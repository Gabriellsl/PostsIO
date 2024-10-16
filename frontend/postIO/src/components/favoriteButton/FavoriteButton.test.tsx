import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteButton from './FavoriteButton';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline';
import { StarIcon as ActiveStarIcon } from '@heroicons/react/24/solid';
import { describe, expect, it, vi } from 'vitest';

describe('FavoriteButton', () => {
  it('should render the filled star icon when isFavorite is true', () => {
    render(<FavoriteButton isFavorite={true} onClick={() => {}} />);

    const activeStarIcon = screen.getByTestId('active-star-icon');
    expect(activeStarIcon).toBeInTheDocument();
  });

  it('should render the outline star icon when isFavorite is false', () => {
    render(<FavoriteButton isFavorite={false} onClick={() => {}} />);

    const outlineStarIcon = screen.getByTestId('outline-star-icon');
    expect(outlineStarIcon).toBeInTheDocument();
  });

  it('should call onClick with the opposite value of isFavorite when clicked', () => {
    const handleClick = vi.fn();
    render(<FavoriteButton isFavorite={true} onClick={handleClick} />);

    const favoriteButton = screen.getByTestId('favorite-button');

    fireEvent.click(favoriteButton);

    expect(handleClick).toHaveBeenCalledWith(false);
  });

  it('should call onClick with true when isFavorite is false and the button is clicked', () => {
    const handleClick = vi.fn();
    render(<FavoriteButton isFavorite={false} onClick={handleClick} />);

    const favoriteButton = screen.getByTestId('favorite-button');

    fireEvent.click(favoriteButton);

    expect(handleClick).toHaveBeenCalledWith(true);
  });
});
