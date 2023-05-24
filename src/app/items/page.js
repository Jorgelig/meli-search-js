import { Metadata } from 'next';
import SearchResults from "@/components/organism/SearchResults";
import InternalLayout from "@/layouts/internalLayout";


export const generateMetadata = async({searchParams}) =>{

  return  {
    title: `Buscando el termino ${searchParams.search}`,
    description: 'Página de busqueda de productos en Meracado Libre',
  };
};

const SearchPage = () => {
  
  return (
    <InternalLayout>
        <SearchResults />
    </InternalLayout>
  );
};

export default SearchPage;

