import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';
import { afterEach, describe, expect, it, vi } from 'vitest';

describe('RadioButton', () => {
  const onChangeMock = vi.fn();

  afterEach(() => {
    onChangeMock.mockClear();
  });

  it('should render with the correct label', () => {
    render(
      <RadioButton value="testValue" checked={false} onChange={onChangeMock} label="Test Label" />
    );

    const radioButton = screen.getByTestId('Test Label');
    expect(radioButton).toBeInTheDocument();
  });

  it('should check when the checked prop is true', () => {
    render(
      <RadioButton value="testValue" checked={true} onChange={onChangeMock} label="Test Label" />
    );

    const radioButton = screen.getByTestId('Test Label');
    expect(radioButton).toBeChecked();
  });

  it('should uncheck when the checked prop is false', () => {
    render(
      <RadioButton value="testValue" checked={false} onChange={onChangeMock} label="Test Label" />
    );

    const radioButton = screen.getByTestId('Test Label');
    expect(radioButton).not.toBeChecked();
  });

  it('should call onChange when the radio button is clicked', () => {
    render(
      <RadioButton value="testValue" checked={false} onChange={onChangeMock} label="Test Label" />
    );

    const radioButton = screen.getByTestId('Test Label');
    fireEvent.click(radioButton);

    expect(onChangeMock).toHaveBeenCalledWith('testValue');
  });
});
