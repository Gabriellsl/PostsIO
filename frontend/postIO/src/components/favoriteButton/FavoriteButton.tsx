import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as ActiveStarIcon } from '@heroicons/react/24/solid';

interface FavoriteButtonProps {
  isFavorite?: boolean;
  onClick: (isFavorite: boolean) => void;
}

function FavoriteButton({ isFavorite, onClick }: FavoriteButtonProps) {
  return (
    <span data-testid="favorite-button" className={`w-4 ml-2`} onClick={() => onClick(!isFavorite)}>
      {isFavorite ? (
        <ActiveStarIcon data-testid="active-star-icon" />
      ) : (
        <StarIcon data-testid="outline-star-icon" />
      )}
    </span>
  );
}

export default FavoriteButton;
