import styled from "styled-components";
import { useRouter } from "next/router";

const LinkButton = ({ text, href }) => {
  const router = useRouter();
  return (
    <LinkButtonWrapper onClick={() => router.push(href)}>
      {text}
    </LinkButtonWrapper>
  );
};

const LinkButtonWrapper = styled.div`
  display: inline-block;
  font-size: ${(props) => props.theme.button.size[1]};
  border-radius: ${(props) => props.theme.spacing[0]};
  padding: ${(props) => props.theme.spacing[2]};
  background-color: ${(props) => props.theme.button.backgroundColor};
  color: ${(props) => props.theme.button.color};
  font-weight: ${(props) => props.theme.button.weight};
`;

export default LinkButton;
