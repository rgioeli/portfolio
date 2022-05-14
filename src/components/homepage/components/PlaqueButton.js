import styled from "styled-components";
import { motion } from "framer-motion";

const PlaqueButton = ({ text }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: -500,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return <PlaqueWrapper variants={variants}>{text}</PlaqueWrapper>;
};

const PlaqueWrapper = styled(motion.div)`
  position: relative;
  font-family: ${(props) => props.theme.title.font};
  background-color: ${(props) => props.theme.button.backgroundColor};
  padding: ${(props) => props.theme.spacing[1]};
  font-size: ${(props) => props.theme.button.size[2]};
  color: ${(props) => props.theme.button.color};
  margin-left: ${(props) => props.theme.spacing[1]};
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: ${(props) => props.theme.button.size[0]};
    margin: 0;
  }
`;

export default PlaqueButton;
