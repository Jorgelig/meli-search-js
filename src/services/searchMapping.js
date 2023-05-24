const getLargeThumbnail = (thumbnail) => thumbnail &&
  thumbnail.includes("-I")
  ? thumbnail.replace("-I", "-O")
  : thumbnail;

const getDescription = (text) => {
  const cleanedText = text
    .trim()
    .replace(/\n\s*\n/g, '\n\n');
  return cleanedText;
};

const getConditionText = (condition) => {
  const texts = {
    'new': 'Nuevo'
  };

  return texts[condition] || '';
}

const getProductItemData = (data) => {
  const results = data.results.map((product) => {

    const {
      id, title, thumbnail,
      condition,
      currency_id: currencyId,
      original_price: originalPrice,
      price,
      shipping,
      buying_mode: buyingModel,
      sold_quantity: soldQuantity,
      amount, description,
      logistic_type: logisticType,
      variations_data: variationsData,
    } = product;

    const largeThumbnail = getLargeThumbnail(thumbnail);
    const formattedPrice = `$ ${price.toLocaleString()}`;

    return {
      id,
      title, thumbnail, largeThumbnail,
      condition, currencyId, originalPrice,
      price, formattedPrice, shipping, buyingModel,
      soldQuantity, amount, description,
      logisticType, variationsData
    };
  })

  return results;
};

const getCategoriesData = (data) => {
  const { filters } = data;
  const categories = new Set();

  filters.forEach(root => {
    root.values.forEach(value => {
      if (value.name) {
        categories.add(value.name);
      }
      if (value.path_from_root) {
        value.path_from_root.forEach(category => {
          if (category.name) {
            categories.add(category.name);
          }
        });
      }
    });
  });

  const uniqueCategories = Array.from(categories);

  return uniqueCategories;
};



export const getMeliProductItem = (data) => {
  const results = getProductItemData(data);
  const categories = getCategoriesData(data);
  const result = {
    results,
    categories
  };
  return result;
};

export const getMeliProductDetail = (data) => {
  console.log('DATA', data);
  const {
    searchTermData,
    searchTermData: { 
      id: idProduct, title, 
      price, 
      thumbnail, condition, pictures,
      sold_quantity: soldQuantity },
    searchDescriptionData: { plain_text }
  } = data;
  const largeThumbnail = getLargeThumbnail(thumbnail);
  const conditionText = getConditionText(condition);
  const description = getDescription(plain_text);
  const formattedPrice = `$ ${price.toLocaleString()}`


  return {
    idProduct,
    soldQuantity,
    title,
    price,
    formattedPrice,
    thumbnail,
    largeThumbnail,
    condition,
    conditionText,
    plain_text,
    description,
    pictures,
  };
};