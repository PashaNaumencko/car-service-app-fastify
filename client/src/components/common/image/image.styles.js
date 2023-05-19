import { styled } from '@mui/material';
import { ImageSize } from 'common/enums/enums';

export const StyledImage = styled('img')`
  display: block;
  max-width: 100%;
  height: auto;
  background-color: transparent;
  object-fit: cover;

  ${({ size }) => {
    if (size === ImageSize.LARGE) {
      return `width: 450px;
    font-size: 1.14rem;`;
    }

    if (size === ImageSize.MEDIUM) {
      return `width: 300px;
    font-size: 1rem;`;
    }

    return `width: 150px;
    font-size: 0.93rem`;
  }}

  ${({ isCircular }) => isCircular && ` border-radius: 50%; overflow: hidden;`}

  ${({ isCentered }) => isCentered && ` margin: auto;`}

  ${({ width }) => width && `width: ${width}px`}
  
  ${({ height }) => height && `height: ${height}px`}
`;
