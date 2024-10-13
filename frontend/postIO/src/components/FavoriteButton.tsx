import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as ActiveStarIcon } from '@heroicons/react/24/solid';

interface FavoriteButtonProps {
  isFavorite?: boolean;
}

function FavoriteButton({ isFavorite }: FavoriteButtonProps) {
  return <span className={`w-4 ml-2`}>{isFavorite ? <ActiveStarIcon /> : <StarIcon />}</span>;
}

export default FavoriteButton;
