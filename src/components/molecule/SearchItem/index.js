import Image from "next/image";
import Link from "next/link";

const SearchItem = ({ product }) => {
  const {
    id,
    title, thumbnail, largeThumbnail,
    condition, currencyId, originalPrice,
    price, formattedPrice, shipping, buyingModel,
    soldQuantity, amount, description,
    logisticType, variationsData
  } = product;

  return (
    <div className="flex items-center">
      <Link href={`/items/${id}`} title={id}>
        <div className="flex">
          <Image
            className="h-180px w-180px max-w-[180px] m-16px"
            width={180}
            height={180}
            src={largeThumbnail}
            alt={title}
            title={title}
          />
          <div className="ml-16px pt-16px max-w-[600px]">
            <h4 className="font mb-32px text-[24px]">{formattedPrice}</h4>
            <span className="text-[18px]">{title}</span>
          </div>
          <div className="ml-4 pt-16px">
            {currencyId}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
