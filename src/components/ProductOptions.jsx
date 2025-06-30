import { useState } from "react";

/**
 * @param {number[]} sizes  –lista de tamanhos (ex.: [38, 39, 40])
 * @param {string[]} colors –lista de cores (hex ou qualquer cor CSS)
 * @param {"text"|"color"} type –define se o seletor é de texto ou cor
 * @param {"circle"|"square"} shape –formato do “botão” de cor
 * @param {string} radius –borda quando shape = "square"  (ex.: "8px")
 * @param {string} className –classes extra para o bloco de cores
 */
export default function ProductOptions({
  sizes = [],
  colors = [],
  type,
  shape = "circle",
  radius = "8px",
  className = "mb-2",
}) {
  /* estados -------------------------------------------------------- */
  const [selectedSize, setSelectedSize] = useState(
    sizes.length ? sizes[0] : null
  );
  const [selectedColor, setSelectedColor] = useState(
    colors.length ? colors[0] : null
  );

  /* helpers -------------------------------------------------------- */
  const isColor = type === "color";
  const title =
    sizes.length > 0 ? "Tamanho" : colors.length > 0 ? "Cor" : "";

  /* render --------------------------------------------------------- */
  return (
    <div className="flex flex-col gap-4">
      {sizes.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-dark-gray-2 mb-2">{title}</p>

          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => {
              const active = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-11 h-11 flex items-center justify-center rounded-[15%] border text-sm font-medium transition
                    ${
                      active
                        ? "bg-primary border-pink-600 text-white"
                        : "bg-white border-gray-300 text-gray-600 hover:border-pink-500"
                    }`}
                  aria-pressed={active}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {colors.length > 0 && (
        <div className={`${className}`}>
          <p className="text-sm font-semibold text-dark-gray-2 mb-2">{title}</p>

          <div className="flex flex-wrap items-center gap-3">
            {colors.map((color) => {
              const active = selectedColor === color;
              return (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    borderRadius: shape === "square" ? radius : "9999px",
                  }}
                  className={`relative w-10 h-10 flex items-center justify-center border-2 transition
                    ${
                      active
                        ? "border-pink-600"
                        : "border-transparent hover:border-pink-500"
                    }`}
                  aria-pressed={active}
                >
                  {/* círculo / quadrado interno */}
                  <span
                    className="block w-full h-full"
                    style={{
                      backgroundColor: isColor ? color : "transparent",
                      borderRadius: shape === "square" ? radius : "9999px",
                      lineHeight: "2.25rem",
                      fontWeight: 600,
                      color: !isColor ? "#4B5563" : "transparent",
                    }}
                  >
                    {!isColor ? color : null}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
