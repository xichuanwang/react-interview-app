import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest'; // Import from vitest
import '@testing-library/jest-dom';
import SearchInput from './SearchInput';


describe('SearchInput', () => {

  describe('placeholder', () => {
    it('renders the search input with default placeholder text', () => {
      render(<SearchInput onChange={() => {}} />);
      const inputElement = screen.getByPlaceholderText('Search...');
      
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute('placeholder', 'Search...');
    });
  
    it('renders the search input with custom placeholder text', () => {
      render(<SearchInput placeholder="search air reading" onChange={() => {}} />);
      const inputElement = screen.getByPlaceholderText('search air reading');
      
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute('placeholder', 'search air reading');
    });
  });

  describe('onChange event', () => {
    it('calls the onChange handler when the input value changes', () => {
      const handleChange = vi.fn();
      render(<SearchInput onChange={handleChange} />);
      const inputElement = screen.getByPlaceholderText('Search...');

      fireEvent.change(inputElement, { target: { value: 'Pikachu' } });

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
});