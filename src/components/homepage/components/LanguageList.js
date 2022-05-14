import { motion } from "framer-motion";
import styled from "styled-components";

const LanguageList = ({ children, title }) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const slide = {
    initial: {
      opacity: 0,
      x: -300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2.0,
        ease: "backInOut",
      },
    },
  };

  return (
    <LanguageListWrapper>
      <Title variants={slide} initial={"initial"} animate={"animate"}>
        {title}
      </Title>
      <Children variants={variants} initial={"initial"} animate={"animate"}>
        {children}
      </Children>
    </LanguageListWrapper>
  );
};

const LanguageListWrapper = styled(motion.div)`
  display: flex;
  margin-top: ${(props) => props.theme.spacing[1]};
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 700px) {
    flex-flow: column;
    justify-content: center;
  }
`;
const Title = styled(motion.div)`
  font-family: ${(props) => props.theme.title.font};
  position: relative;
  background-color: ${(props) => props.theme.button.darker};
  padding: ${(props) => props.theme.spacing[1]};
  font-size: ${(props) => props.theme.button.size[2]};
  color: ${(props) => props.theme.button.color};

  @media screen and (max-width: 700px) {
    font-size: ${(props) => props.theme.button.size[1]};
    width: 100%;
  }
`;

const Children = styled(motion.div)`
  display: flex;
`;

export default LanguageList;
