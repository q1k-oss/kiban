import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'ethereal-ui';

export default function CarouselBasicDemo() {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6 bg-muted rounded-md">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 py-2">
        <CarouselPrevious className="relative static lg:absolute" />
        <CarouselNext className="relative static lg:absolute" />
      </div>
    </Carousel>
  );
} 