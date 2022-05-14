import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Spacer } from "../../../global/Spacer";
import PlaqueButton from "./PlaqueButton";

const ProjectBox = ({
  name = "Crypto Couch",
  description = "This is going to be a description about the project.",
  href = "https://www.google.com",
}) => {
  const router = useRouter();
  const linkToPage = () => {
    router.push(href);
  };

  return (
    <ProjectBoxWrapper whileHover={{ cursor: "pointer" }} onClick={linkToPage}>
      <Name>{name}</Name>
      <Spacer direction={"bottom"} space={"1rem"} />
      <Description>{description}</Description>
      <Spacer direction={"bottom"} space={"1rem"} />
      <PlaqueButton text={"Visit Project"} />
    </ProjectBoxWrapper>
  );
};

const ProjectBoxWrapper = styled(motion.div)`
  position: relative;
  background-color: ${(props) => props.theme.button.darker};
  display: flex;
  flex-flow: column;
  color: #fff;
  flex: 1;
  padding: ${(props) => props.theme.spacing[3]};
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.secondary};

  @media screen and (max-width: 500px) {
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 1rem 0 1rem 0;
  }
`;

const Description = styled.div`
  text-align: center;
`;

const Name = styled.div`
  color: ${(props) => props.theme.secondary};
  font-family: ${(props) => props.theme.title.font};
  font-size: ${(props) => props.theme.title.size[3]};

  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: ${(props) => props.theme.title.size[1]};
  }
`;

export default ProjectBox;
