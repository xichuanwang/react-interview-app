import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest'; // Import from vitest
import '@testing-library/jest-dom';
import GenericError from './GenericError';


describe('GenericError', () => {
  it('renders a generic error component with defaults', () => {
    render(<GenericError />)

    const element = screen.queryByText('An error occurred while fetching the latest pokemon.');
    const button = screen.queryByText('Retry again');

    expect(element).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });

  it('renders a generic error component with retry callback sent', () => {
    const mockCallback = vi.fn();

    render(<GenericError retryCallback={mockCallback} retryButtonMessage='Try loading the pokemons again'/>)
    const retryButton = screen.getByText('Try loading the pokemons again');

    fireEvent.click(retryButton);

    expect(mockCallback).toHaveBeenCalledOnce();
  });
})