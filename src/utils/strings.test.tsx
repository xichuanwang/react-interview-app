import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { pluralizeWord } from '../utils/strings';

describe('string utils', () => {
  describe('pluralizeWord', () => {
    it('returns singular form when count is 1', () => {
      expect(pluralizeWord(1, 'cat')).toBe('cat');
      expect(pluralizeWord(1, 'dog')).toBe('dog');
    });

    it('returns plural form when count is not 1', () => {
      expect(pluralizeWord(0, 'cat')).toBe('cats');
      expect(pluralizeWord(2, 'dog')).toBe('dogs');
      expect(pluralizeWord(5, 'bird')).toBe('birds');
    });
  });
});