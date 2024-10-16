import { render, screen } from '@testing-library/react';
import PostListBody from './PostListBody';
import { Post } from '../../types';
import { describe, expect, it, vi } from 'vitest';

const mockPostList: Post[] = [
  {
    id: '1',
    date: '2024-10-15',
    description: 'Post 1 description',
    categories: ['1', '2']
  },
  {
    id: '2',
    date: '2024-10-16',
    description: 'Post 2 description',
    categories: ['2']
  }
];

vi.mock('../post/Post', () => ({
  default: ({ date, description, categoryIdList, selectedCategory }: any) => (
    <div data-testid="post-item">
      <span>{date}</span>
      <span>{description}</span>
      <span>{categoryIdList.join(', ')}</span>
      <span>{selectedCategory || ''}</span>
    </div>
  )
}));

describe('PostListBody Component', () => {
  it('should render a list of posts', () => {
    render(<PostListBody postList={mockPostList} selectedCategory="1" />);

    const postItems = screen.getAllByTestId('post-item');
    expect(postItems).toHaveLength(2);

    expect(postItems[0]).toHaveTextContent('2024-10-15');
    expect(postItems[0]).toHaveTextContent('Post 1 description');
    expect(postItems[0]).toHaveTextContent('1, 2');
    expect(postItems[0]).toHaveTextContent('1');

    expect(postItems[1]).toHaveTextContent('2024-10-16');
    expect(postItems[1]).toHaveTextContent('Post 2 description');
    expect(postItems[1]).toHaveTextContent('2');
    expect(postItems[1]).toHaveTextContent('1');
  });

  it('should render without a selectedCategory', () => {
    render(<PostListBody postList={mockPostList} />);

    const postItems = screen.getAllByTestId('post-item');
    expect(postItems).toHaveLength(2);

    expect(
      screen.getAllByTestId('post-item')[0].querySelector('span:last-child')
    ).toBeEmptyDOMElement();
    expect(
      screen.getAllByTestId('post-item')[1].querySelector('span:last-child')
    ).toBeEmptyDOMElement();
  });
});
