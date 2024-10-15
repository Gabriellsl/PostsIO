import { useParams } from 'react-router-dom';
import PostList from '../components/PostList';
import { useCallback, useContext, useEffect, useState } from 'react';
import { CategoryService } from '../service';
import { Post } from '../types';
import PostListHeader from '../components/PostList/PostListHeader';
import PostListBody from '../components/PostList/PostListBody';
import { CategoryContext } from '../contexts/CategortyContext';

function Category() {
  const [postList, setPostList] = useState<Post[]>([]);
  const { categoryId } = useParams();
  const categoryContext = useContext(CategoryContext);

  if (!categoryContext) {
    throw new Error('useContext must be used inside a CategoryProvider');
  }

  const { categories, loading } = categoryContext;

  useEffect(() => {
    if (!categoryId) return;
    CategoryService.getCategoryPosts(categoryId)
      .then((response: any) => {
        setPostList(response.data);
      })
      .catch((err) => console.error(err));
  }, [categoryId]);

  const handleGetCategoryName = useCallback(() => {
    if (categories.length === 0 || loading) return '';

    return categories.find((category) => category.id === categoryId)?.name;
  }, [categoryId, categories]);

  return (
    <PostList>
      <PostListHeader
        selectedCategory={handleGetCategoryName()}
        postsInCategory={postList.length}
      />
      <PostListBody postList={postList} selectedCategory={categoryId} />
    </PostList>
  );
}

export default Category;
