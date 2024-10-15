import { useContext, useEffect } from 'react';
import { CategoryContext } from '../contexts/CategortyContext';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const categoryContext = useContext(CategoryContext);
  const navigate = useNavigate();

  if (!categoryContext) {
    throw new Error('useContext must be used inside a CategoryProvider');
  }

  useEffect(() => {
    if (!categoryContext.loading && categoryContext.categories.length > 0) {
      navigate(`/category/${categoryContext.categories[0].id}/posts`);
    }
  }, []);

  return (
    <div className="w-full flex justify-center text-primary flex-col items-center">
      <h1 className="text-lg">Welcome,</h1>
      <span className="text-md text-foreground"> Select a Category to start!</span>
    </div>
  );
}

export default Homepage;
