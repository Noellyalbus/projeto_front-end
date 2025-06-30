import { useState } from "react";
import Button from "../components/Button/Button";
import ProductOptions from "./ProductOptions";

const BuyBox = ({ product, general }) => {
  const [added, setAdded] = useState(false);

  const formatPriceParts = (value) => {
    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    const match = formatted.match(/^(\D+)\s?(\d+)(,\d{2})$/);
    return {
      symbol: match?.[1] || "",
      integer: match?.[2] || "",
      cents: match?.[3] || "",
    };
  };

  const original = formatPriceParts(product.price);
  const discount = product.price2 ? formatPriceParts(product.price2) : null;

  const {
    sizes: productSizes = [],
    colors: productColors = [],
  } = product;

  const {
    sizes: defaultSizes = [],
    colors: defaultColors = [],
  } = general;

  const sizes = productSizes.length ? productSizes : defaultSizes;
  const colors = productColors.length ? productColors : defaultColors;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="p-0 xl:pl-3 w-full flex flex-col gap-4">
      <h1 className="text-2xl lg:text-4xl font-bold">{product.name}</h1>

      <div className="text-sm text-gray-500">
        {product.category?.name} | {product.brand?.name} |{" "}
        <span className="font-medium">REF:</span> {product.code || "000000"}
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`pi ${
                i < Math.round(product.rating || 4.5)
                  ? "pi-star-fill"
                  : "pi-star"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          ({product.reviews || 0} avaliações)
        </span>
      </div>

      <div className="text-xl font-bold text-primary">
        {discount ? (
          <>
            <span>{discount.symbol}</span>
            <span className="text-3xl">{discount.integer}</span>
            <span>{discount.cents}</span>
            <span className="ml-2 text-gray-400 line-through">
              {original.integer}
              {original.cents}
            </span>
          </>
        ) : (
          <>
            <span>{original.symbol}</span>
            <span className="text-3xl">{original.integer}</span>
            <span>{original.cents}</span>
          </>
        )}
      </div>

      <div>
        <p className="font-bold text-gray-700 mb-1">Descrição do produto</p>
        <p className="text-sm text-gray-800">{product.description}</p>
      </div>

      {/* Opções de tamanho e cor */}
      <ProductOptions sizes={sizes} shape="square" radius="8px" type="text" />
      <ProductOptions colors={colors} shape="circle" type="color" />

      <Button onClick={handleAddToCart} className="btn-tertiary gap-2">
        <i className="pi pi-shopping-cart text-sm" />
        COMPRAR
      </Button>


      {added && (
        <div className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded mt-2 text-center text-sm">
          Produto adicionado ao carrinho!
        </div>
      )}
    </div>
  );
};

export default BuyBox;
