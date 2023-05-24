"use client";
import { createContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";
import { Params } from "@/services/constants";


export const SearchContext = createContext({});
export default function SearchProvider({ children }) {
  const router = useRouter();
  const searchTerm = useSearchParams();

  const [term, setTerm] = useState('');
  const [searchCategories, setSearchCategories] = useState([]);
  const [searchResponse, setSearchResponse] = useState([]);
  const [searchTermParam, ] = useState(searchTerm.get(Params.SearchQuery) || '')

  const onSearchReset = () => {
    setSearchResponse([]);
    setTerm('');
  };

  useEffect(() => {
    setTerm(searchTermParam);
  }, [searchTermParam]);

  return <SearchContext.Provider value={{
    term, setTerm,
    searchCategories, setSearchCategories,
    searchResponse, setSearchResponse,
    onSearchReset,
  }}>
    {children}
  </SearchContext.Provider>
}