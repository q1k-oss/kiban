import Image from 'next/image';
import { HtmlRendererConfig } from '../type';
import React from 'react';
import { cn } from '@happect/ethereal-ui';

const ImageRenderer: React.FC<{
  src: string;
  alt: string;
  config?: HtmlRendererConfig['images'];
}> = ({ src, alt, config }) => {
  const [error, setError] = React.useState<boolean>(false);


  const handleError = (): void => {
    if (config?.onImageError) {
      setError(true);
    }
  };

  const imgSrc: string =
    error && config?.onImageError ? config.onImageError(src) : src;


  const isExternalUrl = (url: string): boolean => {
    try {
      return url.startsWith('http://') || url.startsWith('https://');
    } catch {
      return false;
    }
  };
  const isExternal = isExternalUrl(imgSrc);

  const image = config?.fill ? (
    <div className="relative w-full h-64">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={cn(config?.className)}
        priority={config?.priority}
        quality={config?.quality ?? 75}
        sizes={config?.sizes || '100vw'}
        onError={handleError}
        unoptimized={isExternal}
      />
    </div>
  ) : (
    <Image
      src={imgSrc}
      alt={alt}
      width={config?.width ?? 800}
      height={config?.height ?? 600}
      className={cn(config?.className)}
      priority={config?.priority}
      quality={config?.quality ?? 75}
      sizes={config?.sizes}
      onError={handleError}
      unoptimized={isExternal}
    />
  );

  if (config?.wrapperClassName || config?.addCaption) {
    return (
      <figure className={cn('my-8', config?.wrapperClassName)}>
        {image}
        {config?.addCaption && alt && (
          <figcaption className={cn('text-center italic text-[#666] mt-2 text-sm')}>
            {alt}
          </figcaption>
        )}
      </figure>
    );
  }

  return <>{image}</>;
};

export { ImageRenderer };
