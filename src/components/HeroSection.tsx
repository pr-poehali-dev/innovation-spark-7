import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/f42d77f5-b1ad-4b89-8df7-25144823b20e/files/40e58f23-cba7-4280-bd46-e99663ad25e9.jpg',
  'https://cdn.poehali.dev/projects/f42d77f5-b1ad-4b89-8df7-25144823b20e/files/e8887754-1b37-4258-b93b-1d26fd8e2179.jpg',
  'https://cdn.poehali.dev/projects/f42d77f5-b1ad-4b89-8df7-25144823b20e/files/222a07f4-10f6-46ae-bbfe-2e9a5a0be11c.jpg',
  'https://cdn.poehali.dev/projects/f42d77f5-b1ad-4b89-8df7-25144823b20e/files/f57d31cc-a207-40f7-880d-c8b7a62cc13c.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative overflow-hidden shadow-2xl md:h-20 md:w-64">
                <p className="text-lg font-semibold tracking-[0.3em] text-white/60 uppercase">
                  Производство с 2005 года
                </p>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-6">
                <h1 className="text-4xl font-light text-white md:text-5xl lg:text-6xl leading-tight">
                  Двери, которые<br />говорят о вкусе
                </h1>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Собственное производство межкомнатных дверей
                </p>
                <p className="text-base text-white/60 max-w-md leading-relaxed">
                  Создаём двери под ваш интерьер — от классики до современного минимализма. Гарантия 5 лет на каждое изделие.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="#catalog"
                    className="inline-block bg-white text-black px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-white/90 transition-colors"
                  >
                    Смотреть каталог
                  </a>
                  <a
                    href="#contact"
                    className="inline-block border border-white/60 text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:border-white hover:bg-white/10 transition-colors"
                  >
                    Получить консультацию
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}