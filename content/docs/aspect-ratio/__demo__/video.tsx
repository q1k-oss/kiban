import { AspectRatio } from 'ethereal-ui';

export default () => (
  <div className="max-w-[600px]">
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      ></iframe>
    </AspectRatio>
    <p className="text-sm text-muted-foreground mt-2">
      Video content maintains its aspect ratio across different screen sizes, preventing layout shifts.
    </p>
  </div>
) 