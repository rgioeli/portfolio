import styled from "styled-components";

const Container = ({ children, flex, justify, align }) => {
  return (
    <ContainerWrapper align={align} flex={flex} justify={justify}>
      {children}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: ${(props) => props.theme.spacing[4]};
  display: ${(props) => props.flex && "flex"};
  justify-content: ${(props) => props.justify && props.justify};
  align-items: ${(props) => props.align && props.align};
`;

export default Container;
