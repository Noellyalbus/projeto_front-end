import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

const images = [
  {
    custom: true,
  },
  ...Array.from({ length: 8 }, (_, i) => ({
    itemImageSrc: `/home-slide-${i + 1}.jpeg`,
    alt: `Slide ${i + 1}`,
  })),
];

const itemTemplate = (item) => {
  if (item.custom) {
    return (
      <section className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[681px] bg-light-gray-3">

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-20 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0">
          {/* Texto promocional */}
          <div className="w-full lg:w-[520px] flex flex-col gap-6 text-center lg:text-left z-10">
            <span className="text-warning text-sm font-bold">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[64px] font-extrabold text-dark-gray leading-tight tracking-wide">
              Queima de estoque Nike 🔥
            </h1>
            <p className="text-sm sm:text-base text-dark-gray-2 leading-relaxed">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                className="w-full sm:w-[220px] h-11 rounded-none font-bold text-light-gray-3 bg-primary"
                label="Ver Ofertas"
              />
            </div>
          </div>

          {/* Imagens decorativas */}
          <div className="relative w-full max-w-[500px] lg:max-w-[700px] aspect-[4/3]">
            <img
              className="absolute w-20 sm:w-28 top-0 right-0 z-0"
              alt="Ornament"
              src="/assets/Ornament 11.png"
            />
            <img
              className="absolute top-1/2 left-1/2 w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 z-0"
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
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[681px] object-cover"
    />
  );
};

const HomeCarousel = () => {
  return (
    <section className="w-full relative">
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
          indicators: {
            className:
              'absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20 ',
          },
        }}
      />
    </section>
  );
};

export default HomeCarousel;
