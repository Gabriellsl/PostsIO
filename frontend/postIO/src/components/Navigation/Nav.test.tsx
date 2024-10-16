// src/components/Nav.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from './Nav';
import { describe, it, expect, vi } from 'vitest';

const mockHandleSwitchMenuStatus = vi.fn();

describe('Nav Component', () => {
  it('should render the nav with "Posts" text', () => {
    render(<Nav handleSwitchMenuStatus={mockHandleSwitchMenuStatus} showMenuItems={false} />);

    expect(screen.getByText(/Posts/i)).toBeInTheDocument();
  });

  it('should show the "menu" icon when showMenuItems is false', () => {
    render(<Nav handleSwitchMenuStatus={mockHandleSwitchMenuStatus} showMenuItems={false} />);

    const menuIcon = screen.getByTestId('menu-icon');
    expect(menuIcon).toBeInTheDocument();
  });

  it('should show the "close" icon when showMenuItems is true', () => {
    render(<Nav handleSwitchMenuStatus={mockHandleSwitchMenuStatus} showMenuItems={true} />);

    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeInTheDocument();
  });

  it('should call handleSwitchMenuStatus with the correct value when the button is clicked', () => {
    render(<Nav handleSwitchMenuStatus={mockHandleSwitchMenuStatus} showMenuItems={false} />);

    const button = screen.getByTestId('nav-button');

    fireEvent.click(button);

    expect(mockHandleSwitchMenuStatus).toHaveBeenCalledWith(true);
  });
});
