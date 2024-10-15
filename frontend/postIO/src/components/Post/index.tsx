import CategoryButton from '../CategoryButton';
import FavoriteButton from '../FavoriteButton';

interface PostItemProps {
  date: string;
  description: string;
  categories: string[];
}

function PostItem({ date, description, categories }: PostItemProps) {
  return (
    <div className="px-4 py-8 flex flex-col border-b">
      <label className="text-primary text-sm font-semibold">{date}</label>
      <span className="pt-4 text-sm text-foreground-secondary">{description}</span>
      <div className="pt-4 flex flex-wrap gap-2">
        {categories.map((categoryName) => {
          return <CategoryButton title={categoryName}></CategoryButton>;
        })}
      </div>
    </div>
  );
}

export default PostItem;
