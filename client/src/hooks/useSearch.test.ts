import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useSearch } from './useSearch';

describe('useSearch Hook', () => {
  it('skall kasta ett fel om den används utanför SearchProvider', () => {
    // Vi döljer console.error tillfälligt för att inte skräpa ner i terminalen
    // eftersom React kommer logga felet när vi medvetet kastar det.
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => renderHook(() => useSearch())).toThrow(
      'useSearch must be used within a SearchProvider'
    );

    consoleSpy.mockRestore();
  });
});