import { render, screen } from '@testing-library/react';
import PostListHeader from './PostListHeader';
import { describe, expect, it } from 'vitest';

describe('PostListHeader', () => {
  it('should display the correct number of posts and selected category', () => {
    render(<PostListHeader postsInCategory={5} selectedCategory="Technology" />);

    expect(screen.getByText(/Found 5 posts of "Technology"/i)).toBeInTheDocument();
  });

  it('should display "0 posts" when postsInCategory is not provided', () => {
    render(<PostListHeader selectedCategory="Technology" />);

    expect(screen.getByText(/Found 0 posts of "Technology"/i)).toBeInTheDocument();
  });

  it('should display "Loading..." when selectedCategory is not provided', () => {
    render(<PostListHeader postsInCategory={3} />);

    expect(screen.getByText(/Found 3 posts of "Loading..."/i)).toBeInTheDocument();
  });

  it('should display "0 posts" and "Loading..." when neither postsInCategory nor selectedCategory are provided', () => {
    render(<PostListHeader />);

    expect(screen.getByText(/Found 0 posts of "Loading..."/i)).toBeInTheDocument();
  });
});
