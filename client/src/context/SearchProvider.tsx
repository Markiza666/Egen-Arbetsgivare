// client/src/context/SearchProvider.tsx
import React, { useState, type ReactNode } from 'react';
import { SearchContext } from './SearchContext';

/**
 * The Provider component that wraps the app.
 * It manages the actual state of the search query.
 */
export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};
