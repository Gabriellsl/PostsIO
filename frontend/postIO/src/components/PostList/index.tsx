import { ReactNode } from 'react';

interface PostListProps {
  children: ReactNode;
}

function PostList({ children }: PostListProps) {
  return <div className="md:mx-6 mx-4 mb-4 border rounded border-accent">{children}</div>;
}

export default PostList;
