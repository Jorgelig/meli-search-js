import Image from "next/image";

const ProductDetail = ({ product }) => {

  return (
    <div className="p-32px">
      <div className="grid grid-cols-10 gap-4 p-36px">
        <div className="col-span-6">
          <div className="">
            <Image
              src={product.largeThumbnail}
              width={680}
              height={680}
              alt={product.title}
              className="w-full"
            />
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-3">
          <div className="">
            <p className="text-14px">
              {product.conditionText} - Vendidos: {product.soldQuantity}
            </p>
            <h1 className="text-24px font-bold mt-4">{product.title}</h1>
            <h2 className="text-46px mt-8">{product.formattedPrice}</h2>
            <button className="w-full bg-blue-default text-white-default py-2 px-4 mt-4 rounded">
              Comprar
            </button>
          </div>

        </div>
        <div className="col-span-10">
          <h2 className="text-28px mt-32px">Descripción del producto</h2>
          <p className="col-span-7 mt-4 text-justify text-16px">{product.description}</p>
        </div>
      </div>
    </div>

  );
};

export default ProductDetail;
