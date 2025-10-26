'use client'

import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'ethereal-ui';

export default function CarouselAutoplayDemo() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Set up autoplay
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const images = [
    "https://via.placeholder.com/600x400/3498db/ffffff?text=Image+1",
    "https://via.placeholder.com/600x400/e74c3c/ffffff?text=Image+2",
    "https://via.placeholder.com/600x400/2ecc71/ffffff?text=Image+3",
    "https://via.placeholder.com/600x400/f39c12/ffffff?text=Image+4",
    "https://via.placeholder.com/600x400/9b59b6/ffffff?text=Image+5",
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img 
                  src={src} 
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full rounded-md object-cover aspect-video"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between p-2">
          <CarouselPrevious />
          <span className="text-sm text-muted-foreground">
            {current} / {count}
          </span>
          <CarouselNext />
        </div>
        <p className="text-sm text-center text-muted-foreground mt-2">
          This carousel auto-advances every 3 seconds
        </p>
      </Carousel>
    </div>
  );
} 