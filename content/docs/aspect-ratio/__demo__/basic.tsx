import Image from 'next/image';

import { AspectRatio } from 'ethereal-ui';

export default () => (
  <div className="max-w-[400px]">
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1080"
        alt="Mountain landscape with lakes and forests"
        fill
        className="object-cover"
      />
    </AspectRatio>
  </div>
) 