import { getMeliProductDetail, getMeliProductItem } from "@/services/searchMapping";

const apiProvider = ({ baseUrl }) => {
  const get = async ({ path }) => {
    const response = await fetch(`${baseUrl}${path}`);
    const data = await response.json();

    return data;
  };

  const getItemDetail = async (id) => {
    const detailUrl = `/api/items/${id}`;
    const data = await get({ path: detailUrl });
    const detail = getMeliProductDetail(data);
    console.log('DETAIL', detail);

    return detail;
  };

  const searchTerm = async (term) => {
    const searchTermUrl = `/api/search?q=${term}&limit=4`;
    const response = await get({ path: searchTermUrl });
    const data = getMeliProductItem(response.data);

    return data;
  };

  return {
    getItemDetail,
    searchTerm
  };
};

export default apiProvider;
