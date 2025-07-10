import { useState, useEffect } from 'react';

const images = [
  {
    src: './tenis-nike.png',
    alt: 'Tênis Nike',
    title: 'Queima de estoque Nike 🔥',
    description: 'Sinta o conforto da nova linha Nike Air.',
    bgcolor: '#D9D9D9',
  },
  {
    src: './tenis-kswis.png',
    alt: 'Tênis K-Swiss',
    title: 'Durabilidade Máxima',
    description: 'O clássico da K-Swiss em nova edição.',
    bgcolor: '#D9D9D9',
  },
  {
    src: './tenis-adidas.png',
    alt: 'Tênis Adidas',
    title: 'Energia nos Seus Passos',
    description: 'Tecnologia Boost para mais performance.',
    bgcolor: '#D9D9D9',
  },
  {
    src: './tenis-puma.png',
    alt: 'Tênis Puma',
    title: 'Design Moderno',
    description: 'Puma Fusion: onde estilo encontra potência.',
    bgcolor: '#D9D9D9',
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeImage = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      changeImage(nextIndex);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const setImage = (index) => {
    if (index !== currentIndex) changeImage(index);
  };

  const current = images[currentIndex];

  return (
    <div className="w-full bg-light-gray-3 pt-8 pb-8 xl:pt-12 px-4">
      <div className="relative max-w-[75rem] mx-auto flex flex-col items-center">
        
        {/* Container de imagem + texto */}
        <div className="flex flex-col-reverse xl:flex-col items-center w-full relative">

          {/* Texto promocional */}
          <div className="w-full xl:absolute xl:left-8 xl:top-6 z-10 max-w-sm text-center xl:text-left mt-4 xl:mt-0">
            {/* Texto promocional */}
            <span className='text-warning font-bold text-sm xl:text-base'>
              Melhores ofertas personalizadas
            </span>
            <h2 className="text-2xl xl:text-6xl font-bold mt-1">{current.title}</h2>
            <p className="text-base xl:text-lg text-dark-gray-2 mt-1 font-medium">{current.description}</p>
            <div className="flex justify-center xl:justify-start">
              <button className="btn-primary mt-3 w-[220px]">
                Ver coleção
              </button>
            </div>

          </div>

          {/* Imagem principal */}
          <div className="relative w-full h-[18rem] sm:h-[22rem] xl:h-[26rem] flex items-center justify-center overflow-hidden gap-8 xl:gap-x-12">
            <img
              src={current.src}
              alt={current.alt}
              className={`absolute transition-opacity right-12 lg:right-40 duration-300 pl-6 sm:pl-10 xl:pl-50 max-h-full transform -rotate-[18deg] z-10 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            />
            
            {/* Imagem ornament */}
            <img
              src="/projeto_front-end/assets/ornament -11.png"
              alt="Ornamento"
              className="absolute top-5 right-5 w-[140px] sm:w-[140px] xl:w-[140px] z-0"
            />
          </div>
        </div>

        {/* Indicadores */}
        <div className="mt-6 flex gap-2 xl:gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setImage(idx)}
              className={`w-4 h-4 xl:w-5 xl:h-5 rounded-full border-2 transition-all ${
                idx === currentIndex
                  ? 'bg-pink-600 border-pink-600'
                  : 'bg-transparent border-gray-400'
              }`}
              aria-label={`Selecionar imagem ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
