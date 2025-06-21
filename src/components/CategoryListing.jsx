import { useState } from "react";
import { Sneaker, TShirt, Pants, BaseballCap, Headphones } from "@phosphor-icons/react";
import CategoryCard from "./CategoryCard";

const CategoryListing = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const categories = [
    { Icon: TShirt, label: "Camisetas" },
    { Icon: Pants, label: "Calças" },
    { Icon: BaseballCap, label: "Bonés" },
    { Icon: Headphones, label: "Acessórios" },
    { Icon: Sneaker, label: "Tênis", link: "/produtos/categoria/tenis" }, // único com link real
  ];

  return (
    <section className="w-full py-10">
      <div className="max-w-75rem mx-auto p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-center ">
        {categories.map((category, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <CategoryCard
              {...category}
              index={index}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryListing;
