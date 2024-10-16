interface PostListHeaderProps {
  postsInCategory?: number;
  selectedCategory?: string;
}

function PostListHeader({ postsInCategory, selectedCategory }: PostListHeaderProps) {
  return (
    <div className="text-sm text-foreground-secondary font-semibold	py-5 px-9 border-b border-accent">
      Found {postsInCategory ? postsInCategory : '0'} posts of "
      {selectedCategory ? selectedCategory : 'Loading...'}"
    </div>
  );
}

export default PostListHeader;
