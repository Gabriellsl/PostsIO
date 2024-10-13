import FavoriteButton from './FavoriteButton';

interface CategoryButton {
  title: string;
  activated?: boolean;
}

function CategoryButton({ title, activated }: CategoryButton) {
  return (
    <a
      href="#"
      className={`flex w-fit block rounded-md text-sm font-semibold ${activated ? 'bg-transparent text-primary border border-primary' : 'bg-primary'} pl-6 py-2 pr-4 text-base font-medium text-white items-center`}
      aria-current="page"
    >
      <label>{title}</label>
      <FavoriteButton isFavorite={false} />
    </a>
  );
}

export default CategoryButton;
