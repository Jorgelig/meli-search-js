"use client";

import useSearchContext from "@/hooks/useSearchContext";
import SearchItem from "@/components/molecule/SearchItem";
import { useEffect, useState } from "react";

const SearchResults = () => {
  const { searchResponse } = useSearchContext();

  return (<div className="bg-white-default divide-y">
    {
      searchResponse.map((product) => {
        return (<SearchItem key={product.id} product={product} />)
      })
    }

  </div>)
};

export default SearchResults;