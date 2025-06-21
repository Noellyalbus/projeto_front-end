import { useState } from "react";
import ProductCard from "../components/ProdutoCard";

const ProductListing = ({ cols = [12], data = [], numProducts = 0 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const breakpoints = ["", "md", "lg", "xl", "2xl"];

  const colClasses = cols
    .map((col, index) =>
      breakpoints[index] ? `${breakpoints[index]}:col-span-${col}` : `col-span-${col}`
    )
    .join(" ");

  const productsToDisplay = Array.isArray(data)
    ? numProducts > 0
      ? data.slice(0, numProducts)
      : data
    : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productsToDisplay.map((product, index) => (
        <div
          key={product.id}
          className={`${colClasses} transition-transform`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            transform:
              hoveredIndex === index
                ? "translateY(-0.5rem) scale(1.05)"
                : "translateY(0) scale(1)",
            transition: "transform 0.3s ease",
          }}
        >
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
