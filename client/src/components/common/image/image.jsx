import { ImageSize } from 'common/enums/enums';

import { StyledImage } from './image.styles';

const Image = ({
  alt,
  isCentered = false,
  isCircular = false,
  height,
  size = ImageSize.SMALL,
  src,
  width
}) => (
  <StyledImage
    isCentered={isCentered}
    isCircular={isCircular}
    size={size}
    width={width}
    height={height}
    src={src}
    alt={alt}
    loading="lazy"
  />
);

export { Image };
