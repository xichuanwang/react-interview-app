import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { usePokemonApi } from './pokemon-api';

describe('usePokemonApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches data successfully', async () => {
    const mockData = { name: 'pikachu', url: '' };
    
    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    }));

    const { result } = renderHook(() => usePokemonApi('https://api.example.com/data'));
    
    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual({ name: 'pikachu', url: '' });
    expect(result.current.error).toBeUndefined();
  });

  it('handles fetch errors', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.reject(new Error('Network error'))
    ));

    const { result } = renderHook(() => usePokemonApi('https://api.example.com/data'));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toEqual(new Error('Network error'));
    expect(result.current.data).toEqual(
      { count: 0, next: null, previous: null, results: [] }
    );
  });
});