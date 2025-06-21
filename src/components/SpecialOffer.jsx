import { useState } from "react";
import { Link } from "react-router-dom";

const SpecialOfferCard = ({ data }) => {
  const { image, title, subtitle, description, link, label } = data;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={` grid grid-cols-1 md:grid-cols-2 gap-6 items-center transition-transform duration-300 ${
        hovered ? "scale-[1.05] -translate-y-2" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagem com fundo circular decorativo */}
      <div className="relative flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="relative z-10 max-w-[90%] md:max-w-[80%]"
        />
        <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-b from-[#d7cfef] to-transparent z-0"></div>
      </div>

      {/* Texto da oferta especial */}
      <div className="px-4">
        <span className="text-primary font-bold text-lg md:text-xl block mb-2">
          {title}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
          {subtitle}
        </h2>
        <p className="text-gray-700 text-lg mb-5 leading-relaxed">
          {description}
        </p>
        <Link to={link} className="btn-primary w-[200px] px-5 py-2 font-semibold">
          {label}
        </Link>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
