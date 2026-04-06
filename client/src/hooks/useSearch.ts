// client/src/hooks/useSearch.ts
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};