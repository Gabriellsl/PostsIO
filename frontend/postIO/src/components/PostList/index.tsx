import PostListBody from './PostListBody';
import PostListHeader from './PostListHeader';

function PostList() {
  return (
    <div className="mt-16 md:mx-6 mx-4 mb-4 border rounded border-accent">
      <PostListHeader />
      <PostListBody />
    </div>
  );
}

export default PostList;