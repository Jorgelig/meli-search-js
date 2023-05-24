import { Metadata } from 'next';

import ProductDetail from "@/components/organism/ProductDetail";
import InternalLayout from "@/layouts/internalLayout";
import apiProvider from "@/services";

const api = apiProvider({ baseUrl: process.env.HOST });

const getProduct = async ({ id }) => {
  const product = await api.getItemDetail(id);
  return product;
};

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const product = await getProduct({ id });

  return {
    title: `${product.title}`,
    description: `${product.description}`,
  };
};

const getJsonLd = ({ product }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',    
    title: product.title,
    image: product.largeThumbnail,
    description: product.description,
  };
};

const DetailPage = async ({ params }) => {
  const { id } = params;
  const product = await getProduct({ id });
  const jsonLd = getJsonLd({ product });

  return (
    <InternalLayout>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <div className="flex items-center">
        <ProductDetail product={product} />
      </div>
    </InternalLayout>

  );
};

export default DetailPage;