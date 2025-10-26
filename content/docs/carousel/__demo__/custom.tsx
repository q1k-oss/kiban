'use client'

import { Heart, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from 'ethereal-ui';

export default function CarouselCustomDemo() {
  const products = [
    {
      id: 1,
      title: "Ethereal Lamp",
      price: "$89.99",
      image: "https://via.placeholder.com/300x200/f5f5f5/333?text=Lamp",
      badge: "New"
    },
    {
      id: 2,
      title: "Designer Chair",
      price: "$249.99",
      image: "https://via.placeholder.com/300x200/f5f5f5/333?text=Chair",
      badge: "Sale"
    },
    {
      id: 3,
      title: "Ceramic Vase",
      price: "$59.99",
      image: "https://via.placeholder.com/300x200/f5f5f5/333?text=Vase"
    },
    {
      id: 4,
      title: "Wall Art Frame",
      price: "$129.99",
      image: "https://via.placeholder.com/300x200/f5f5f5/333?text=Art"
    },
    {
      id: 5,
      title: "Modern Desk",
      price: "$399.99",
      image: "https://via.placeholder.com/300x200/f5f5f5/333?text=Desk",
      badge: "Popular"
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Featured Products</h3>
          <div className="flex gap-2 relative mt-4">
            <CarouselPrevious 
              variant="outline" 
              size="icon" 
              className="static h-8 w-8"
            />
            <CarouselNext 
              variant="outline" 
              size="icon"
              className="static h-8 w-8"
            />
          </div>
        </div>
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card>
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="font-bold">{product.price}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button>
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
} 