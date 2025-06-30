/* ProductSlider.jsx ------------------------------------------------------- */
import { useState, useEffect, useRef } from "react";

export default function ProductSlider({ product, bgcolors = [] }) {
  /* ---------------------------------------------------------------------- */
  const photos =
    Array.isArray(product?.photos) && product.photos.length
      ? product.photos
      : [{ image: product.image, bgcolor: bgcolors[0] || "#f4f4f4" }];

  const [idx, setIdx] = useState(0);
  const idxRef   = useRef(0);
  const timerRef = useRef(null);
  /* ---------------------------------------------------------------------- */

  /* autoplay -------------------------------------------------------------- */
  useEffect(() => {
    if (photos.length < 2) return;
    timerRef.current = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % photos.length;
      setIdx(idxRef.current);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [photos.length]);

  /* helpers --------------------------------------------------------------- */
  const goTo = (i) =>
    (idxRef.current = i) === i && setIdx(i); // mantém ref e estado em sync
  const prev = () => goTo((idxRef.current - 1 + photos.length) % photos.length);
  const next = () => goTo((idxRef.current + 1) % photos.length);

  /* ---------------------------------------------------------------------- */
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      {/* -------- SLIDE PRINCIPAL -------- */}
      <div
        className="relative rounded-xl overflow-hidden flex items-center justify-center h-full"
        style={{ backgroundColor: photos[idx].bgcolor }}
      >
        <img
          key={idx}
          src={photos[idx].image}
          alt={product.name}
          className="max-h-full w-auto p-5 object-contain opacity-0 animate-fade-slide"
        />

        {photos.length > 1 && (
          <>
            {/* ← seta */}
            <button
              onClick={prev}
              className="group absolute left-4 top-1/2 -translate-y-1/2 z-10"
              aria-label="Imagem anterior"
            >
              <i className="pi pi-chevron-left text-3xl text-pink-700 transition-transform group-hover:-translate-x-1" />
            </button>
            {/* → seta */}
            <button
              onClick={next}
              className="group absolute right-4 top-1/2 -translate-y-1/2 z-10"
              aria-label="Próxima imagem"
            >
              <i className="pi pi-chevron-right text-3xl text-pink-700 transition-transform group-hover:translate-x-1" />
            </button>
          </>
        )}
      </div>

      {/* -------- MINIATURAS -------- */}
      {photos.length > 1 && (
        <div className="flex items-center gap-4">
          {photos.map(({ image, bgcolor }, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`basis-[18%] rounded-[4px] border-2 transition
                          ${i === idx ? "border-pink-700" : "border-transparent"}`}
              style={{ backgroundColor: bgcolor }}
            >
              {/* padding interno garante que a imagem não “encoste” na borda */}
              <img src={image} alt=""
                  className="w-full h-[80px] object-contain p-3" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


