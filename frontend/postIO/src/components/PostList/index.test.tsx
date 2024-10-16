import { render, screen } from '@testing-library/react';
import PostList from '.';
import { describe, expect, it } from 'vitest';

describe('PostList', () => {
  it('should render the PostList component with children', () => {
    render(
      <PostList>
        <div data-testid="post-item">Post Item</div>
      </PostList>
    );

    const postItem = screen.getByTestId('post-item');
    expect(postItem).toBeInTheDocument();
    expect(postItem).toHaveTextContent('Post Item');
  });
});
