import CategoryButton from '../CategoryButton';
import FavoriteButton from '../FavoriteButton';

interface PostProps {
  date: string;
  description: string;
  categories: string[];
}
function Post({ date, description, categories }: PostProps) {
  return (
    <div className="px-4 py-8 flex flex-col border-b">
      <label className="text-primary text-sm font-semibold">{date}</label>
      <span className="pt-4 text-sm text-foreground-secondary">{description}</span>
      <div className="pt-4">
        {categories.map((categoryName) => {
          return <CategoryButton title={categoryName}></CategoryButton>;
        })}
      </div>
    </div>
  );
}

export default Post;
