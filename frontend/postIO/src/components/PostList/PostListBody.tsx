import { Post } from '../../types';
import PostItem from '../Post';

interface PostListBodyProps {
  postList: Post[];
}

function PostListBody({ postList }: PostListBodyProps) {
  return (
    <div className="px-4 md:overflow-auto h-full">
      {postList.map((post: Post) => (
        <PostItem date={post.date} description={post.description} categories={post.categories} />
      ))}
    </div>
  );
}

export default PostListBody;
