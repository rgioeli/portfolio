import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Context from "../../../global/context/Context";
import { useContext, useEffect, useState } from "react";
import ProjectBox from "./ProjectBox";

const ProjectPanel = () => {
  const { toggleProjectsPanel } = useContext(Context);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      x: -windowWidth,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeIn",
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {toggleProjectsPanel && (
        <ProjectPanelWrapper
          key={toggleProjectsPanel}
          variants={variants}
          initial={"initial"}
          animate={"animate"}
          exit={{ opacity: 0, x: windowWidth, transition: { duration: 0.5 } }}
        >
          <ProjectBox
            name="Crypto Couch"
            description="Select your favorite crypto and express your interests and ideas with others!"
            href="https://www.google.com"
          />
          <ProjectBox
            name="It's Just Wings"
            description="Hungry? This site will make your mouth water!"
          />
        </ProjectPanelWrapper>
      )}
    </AnimatePresence>
  );
};

const ProjectPanelWrapper = styled(motion.div)`
  position: relative;
  top: 0;
  background-color: #fff;
  height: 200px;
  width: 100vw;

  display: flex;
`;

export default ProjectPanel;
