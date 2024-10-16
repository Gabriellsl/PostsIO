import { Post } from '../../types';
import PostItem from '../post';

interface PostListBodyProps {
  postList: Post[];
  selectedCategory?: string;
}

function PostListBody({ postList, selectedCategory }: PostListBodyProps) {
  return (
    <div className="px-4 md:overflow-auto h-full">
      {postList.map((post: Post) => (
        <PostItem
          key={post.id}
          date={post.date}
          description={post.description}
          categoryIdList={post.categories}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
}

export default PostListBody;
