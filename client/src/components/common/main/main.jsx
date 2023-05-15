import { StyledContainer, ViewportContainer } from './main.styles';

const Main = ({ children }) => {
  return (
    <ViewportContainer>
      <StyledContainer fixed>{children}</StyledContainer>
    </ViewportContainer>
  );
};

export { Main };
