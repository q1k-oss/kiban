'use client'

import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from 'ethereal-ui';

export default function CarouselPaginationDemo() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = [
    {
      title: "Beautiful Landscapes",
      description: "Explore stunning natural scenes from around the world",
      color: "bg-blue-100"
    },
    {
      title: "Urban Architecture",
      description: "Discover fascinating buildings and city designs",
      color: "bg-amber-100"
    },
    {
      title: "Wildlife Photography",
      description: "Get up close with amazing animals in their habitats",
      color: "bg-green-100"
    },
    {
      title: "Abstract Art",
      description: "Experience visual creativity in its purest form",
      color: "bg-purple-100"
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className={`p-6 aspect-video flex flex-col items-center justify-center rounded-md ${slide.color}`}>
                <h3 className="text-xl font-medium">{slide.title}</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  {slide.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselIndicators 
            count={count} 
            current={current} 
            onClick={(index) => api?.scrollTo(index)}
          />
        </div>
        <div className="flex justify-between mt-2">
          <CarouselPrevious className="relative" />
          <CarouselNext className="relative" />
        </div>
      </Carousel>
    </div>
  );
} 