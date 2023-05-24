"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

import apiProvider from "@/services";
import useSearchContext from "@/hooks/useSearchContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Params } from "@/services/constants";

const TopNavBar = () => {
  const api = apiProvider({ baseUrl: process.env.NEXT_PUBLIC_HOST });
  const router = useRouter();
  const {
    term, setTerm,
    setSearchCategories,
    searchResponse, setSearchResponse,
    onSearchReset
  } = useSearchContext();
  const [termInput, setTermInput] = useState('');
  const pathname = usePathname();
  const hasRedirect = !pathname.startsWith('/items');

  const handleSearch = async () => {
    setTerm(termInput);
    const response = await api.searchTerm(termInput);

    setSearchResponse(response.results);
    setSearchCategories(response.categories);
    if (termInput) {
      if (hasRedirect) {
        router.push(`/items?${Params.SearchQuery}=${termInput}`);
      } else {
        router.replace(`/items?${Params.SearchQuery}=${termInput}`);
      }
    }
  };

  const onReset = () => {
    setTermInput('');
    onSearchReset();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  useEffect(() => {
    console.log('load');
    setTermInput(term);
    if (!searchResponse || searchResponse.length == 0) {
      handleSearch();
    }
  }, []);

  return (
    <div
      className="flex items-center justify-center w-full bg-yellow-default h-16 px-36">
      <div
        className="flex items-center space-x-24 w-full">
        <Link href="/" onClick={onReset}>
          <Image
            src='/assets/images/Logo_ML.png'
            width={53}
            height={36}
            alt="Logo MELI"
          />
        </Link>
        <div className="flex-1 w-auto">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text" placeholder="Buscar..."
                className="input input-bordered w-full px-4 py-2 rounded-md"
                onChange={(e) => setTermInput(e.target.value)}
                onKeyUpCapture={handleKeyPress}
                value={termInput}
              />
              <button
                className="btn bg-gray-lighting hover:bg-gray-lighting border-gray-lighting hover:border-gray-lighting btn-square h-10"
                onClick={handleSearch}
                disabled={!termInput}
              >
                <Image
                  src="/assets/images/ic_Search.png"
                  width={18}
                  height={18}
                  alt="Search"
                />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TopNavBar;