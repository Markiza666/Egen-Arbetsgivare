import { createContext } from 'react';

/**
 * Defines the shape of our search data and functions.
 */
export interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

/**
 * Creates the Context object. 
 * Initialized as undefined to help us catch errors if we forget the Provider.
 */
export const SearchContext = createContext<SearchContextType | undefined>(undefined);
