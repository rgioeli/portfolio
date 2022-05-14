import styled from "styled-components";

export const Spacer = ({ direction, space }) => {
  return <SpacerTemplate direction={direction} space={space} />;
};

const SpacerTemplate = styled.div`
  ${(props) => `margin-${props.direction}: ${props.space}`}
`;
