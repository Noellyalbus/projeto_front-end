import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

const images = [
  {
    custom: true, // marca o slide promocional
  },
  ...Array.from({ length: 8 }, (_, i) => ({
    itemImageSrc: `/home-slide-${i + 1}.jpeg`,
    alt: `Slide ${i + 1}`,
  })),
];

const itemTemplate = (item) => {
  if (item.custom) {
    return (
      <section className="w-full h-[681px] bg-light-gray-3 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1303px] h-full flex flex-row items-start justify-between px-[100px] pt-[40px]">
          {/* Texto promocional */}
          <div className="w-[516px] flex flex-col gap-y-10 z-10">
            <span className="text-warning text-sm font-bold">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-[64px] font-extrabold text-dark-gray leading-tight tracking-wide">
              Queima de estoque Nike 🔥
            </h1>
            <p className="text-base text-dark-gray-2 leading-relaxed">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <Button
              className="w-[220px] h-12 rounded-none font-bold text-light-gray-3 bg-primary bg-no-repeat"
              label="Ver Ofertas"
            />
          </div>

          {/* Imagens decorativas */}
          <div className="relative w-[885px] h-[700px]">
            <img
              className="absolute w-[140px] h-[140px] top-0 right-0 z-0"
              alt="Ornament"
              src="/assets/Ornament 11.png"
            />
            <img
              className="absolute w-full h-full top-[-89px] right-[-100px] object-contain z-0"
              alt="White Nike Sneakers"
              src="/White-Sneakers-PNG-Clipart 1.png"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <img
      src={item.itemImageSrc}
      alt={item.alt}
      className="w-full h-[681px] object-cover"
      style={{ maxHeight: '681px' }}
    />
  );
};

const HomeCarousel = () => {
  return (
    <section className="w-full h-[681px] relative">
      <Galleria
        value={images}
        style={{ width: '100%' }}
        showThumbnails={false}
        showIndicators
        circular
        autoPlay
        transitionInterval={3000}
        item={itemTemplate}
        pt={{
          indicators:{
            className: 'absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20 '
          }
        }}
      />
    </section>
  );
};

export default HomeCarousel;
