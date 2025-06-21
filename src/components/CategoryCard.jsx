import { Link } from "react-router-dom";

const CategoryCard = ({ Icon, label, link = "#", index, hoverIndex }) => {
  const isHovered = hoverIndex === index;

  return (
    <Link to={link} title={label}>
      <div
        className="flex flex-col items-center justify-center w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
        style={{
          transform: isHovered ? "translateY(-0.5rem) scale(1.05)" : "translateY(0) scale(1)",
        }}
      >
        {/* Ícone redondo */}
        <div className="w-[7rem] h-[7rem] rounded-full bg-white flex items-center justify-center shadow-md mb-2 transition-colors duration-300">
          <Icon
            size={64}
            className={`transition-colors duration-300 ${isHovered ? "text-primary" : "text-gray-600"}`}
          />
        </div>

        {/* Texto da categoria */}
        <p className={`text-sm font-semibold transition-colors duration-300 ${isHovered ? "text-primary" : "text-gray-700"}`}>
          {label}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
