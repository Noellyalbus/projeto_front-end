import { Link } from "react-router-dom";

const ProductCard = ({ id, badge, name, image, category, price, price2 }) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
      {/* Badge de desconto */}
      {badge && (
        <div className="absolute top-3 left-3 bg-[#e7ff86] text-xs font-bold py-1 px-2 rounded-full z-10 text-gray-700">
          {badge}
        </div>
      )}

      {/* Link para o produto */}
      <Link to={`/produto/${id}`} className="block" title={name}>
        {/* Imagem com fundo branco, centralizada e rotacionada */}
        <div className="flex justify-center items-center h-48 xl:h-64 p-5 bg-white">
          <img
            src={image}
            alt={name}
            className="max-h-full object-contain"
            style={{ transform: "rotate(-20deg)" }}
          />
        </div>

        {/* Informações do produto */}
        <div className="bg-(--white-background) p-4 pb-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-1">
            {category?.name || category}
          </h3>
          <h2 className="text-lg font-medium text-gray-800 truncate mb-2">
            {name}
          </h2>

          {/* Preço com ou sem desconto */}
          <div className="text-base xl:text-lg font-bold text-gray-700">
            {price2 ? (
              <>
                <span className="line-through text-gray-400 mr-2">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(price))}
                </span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(price2))}
                </span>
              </>
            ) : (
              <span>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(price))}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
