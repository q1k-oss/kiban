import Image from 'next/image';

import { AspectRatio } from 'ethereal-ui';

export default () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="space-y-2">
      <p className="text-sm font-medium">1:1 (Square)</p>
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=500"
          alt="Colorful abstract art"
          fill
          className="object-cover"
        />
      </AspectRatio>
    </div>
    
    <div className="space-y-2">
      <p className="text-sm font-medium">16:9 (Widescreen)</p>
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=500"
          alt="Mountain landscape"
          fill
          className="object-cover"
        />
      </AspectRatio>
    </div>
    
    <div className="space-y-2">
      <p className="text-sm font-medium">4:3 (Standard)</p>
      <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500"
          alt="Forest scene"
          fill
          className="object-cover"
        />
      </AspectRatio>
    </div>
  </div>
) 