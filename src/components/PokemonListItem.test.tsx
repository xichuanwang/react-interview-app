import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; // Import from vitest
import '@testing-library/jest-dom';
import PokemonListItem from './PokemonListItem';


describe('PokemonListItem', () => {
  it('renders with provided string', () => {
    render(<PokemonListItem name="pikachu" />);
    const inputElement = screen.getByText('pikachu');
  
    expect(inputElement).toBeInTheDocument();
  });
});