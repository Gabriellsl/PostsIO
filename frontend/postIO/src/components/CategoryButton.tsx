import FavoriteButton from './FavoriteButton';

interface CategoryButtonProps {
  id: string;
  title: string;
  activated?: boolean;
  isFavorite?: boolean;
  onClick?: (categoryId: string) => void;
}

function CategoryButton({ id, title, activated, isFavorite, onClick }: CategoryButtonProps) {
  return (
    <a
      className={`flex w-fit block rounded-md text-sm font-semibold ${activated ? 'bg-transparent text-primary border border-primary' : 'bg-primary text-primary-foreground'} pl-6 py-2 pr-4 text-base font-medium items-center cursor-pointer`}
      aria-current="page"
      onClick={() => {
        onClick && onClick(id);
      }}
    >
      <label className="cursor-pointer">{title}</label>
      <FavoriteButton isFavorite={isFavorite} />
    </a>
  );
}

export default CategoryButton;
