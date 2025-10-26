import { ScrollArea } from 'ethereal-ui';

// Sample image data
const images = [
  {
    id: 1,
    name: "Image 1",
    url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&h=350&fit=crop",
  },
  {
    id: 2,
    name: "Image 2",
    url: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&h=350&fit=crop",
  },
  {
    id: 3,
    name: "Image 3",
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=350&fit=crop",
  },
  {
    id: 4,
    name: "Image 4",
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=350&fit=crop",
  },
  {
    id: 5,
    name: "Image 5",
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=350&fit=crop",
  },
  {
    id: 6,
    name: "Image 6",
    url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=350&fit=crop",
  },
];

export default () => (
  <div className="space-y-2">
    <p className="text-sm text-muted-foreground">
      Scroll horizontally to view all images
    </p>
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {images.map((image) => (
          <figure key={image.id} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={image.url}
                alt={image.name}
                className="h-32 w-48 object-cover transition-all hover:scale-105"
              />
            </div>
            <figcaption className="pt-2 text-xs text-center">
              {image.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </ScrollArea>
  </div>
) 