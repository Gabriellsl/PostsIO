import Post from '../Post';

function PostListBody() {
  return (
    <div className="px-4 md:overflow-auto h-full">
      <Post
        date="Thursday, May 23rd 2024"
        description="Cooking delicious and nutritious meals on weeknights can often feel like a daunting task. However, with a few simple strategies, it’s possible to whip up satisfying dinners in no time. One key is to plan ahead and keep a stock of versatile ingredients like pasta, canned tomatoes, and frozen vegetables. These staples can be quickly transformed into a variety of dishes, from hearty pasta bakes to stir-fries."
        categories={['Cooking']}
      />
      <Post
        date="Thursday, May 23rd 2024"
        description="Cooking delicious and nutritious meals on weeknights can often feel like a daunting task. However, with a few simple strategies, it’s possible to whip up satisfying dinners in no time. One key is to plan ahead and keep a stock of versatile ingredients like pasta, canned tomatoes, and frozen vegetables. These staples can be quickly transformed into a variety of dishes, from hearty pasta bakes to stir-fries."
        categories={['Cooking']}
      />
    </div>
  );
}

export default PostListBody;
