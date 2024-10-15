import { useParams } from 'react-router-dom';
import PostList from '../components/PostList';
import { useEffect, useState } from 'react';
import { CategoryService } from '../service';
import { Post } from '../types';
import PostListHeader from '../components/PostList/PostListHeader';
import PostListBody from '../components/PostList/PostListBody';

function Category() {
  const [postList, setPostList] = useState<Post[]>([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) return;
    CategoryService.getCategoryPosts(categoryId)
      .then((response: any) => {
        setPostList(response.data);
      })
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <PostList>
      <PostListHeader selectedCategory={categoryId} postsInCategory={postList.length} />
      <PostListBody postList={postList} />
    </PostList>
  );
}

export default Category;
