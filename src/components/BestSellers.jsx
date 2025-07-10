import { Link } from "react-router-dom";

const collections = [
  {
    image: "./collection-1.png",
    link: "/produtos/camisa",
    badge: "30% OFF",
  },
  {
    image: "./collection-2.png",
    link: "/produtos/tenis",
    badge: "30% OFF",
  },
  {
    image: "./collection-3.png",
    link: "/produtos/headphone",
    badge: "30% OFF",
  },
];

const BestSellers = () => {
  return (
    <section className="w-full">
      <div className="max-w-[75rem] mx-auto p-3">
        {/* Cards */}
        <div className="flex flex-col items-center justify-center gap-6 xl:flex-row">
          {collections.map(({ image, link, badge }, index) => (
            <Link
              to={link}
              key={index}
              className="relative w-[405px] h-[251px] rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-[#E7FF86] text-gray-800 text-xs font-bold py-1 px-3 rounded-2xl z-10">
                {badge}
              </span>

              {/* Imagem da coleção */}
              <img
                src={image}
                alt={`Coleção ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Botão na lateral esquerda */}
              <button className="btn-secondary absolute px-5 py-2 bottom-4 left-4 w-[153px] font-bold leading-6 tracking-[0.75px]">
                Comprar
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
