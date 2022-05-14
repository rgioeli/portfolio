import styled from "styled-components";
import Container from "../../global/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import Context from "../../global/context/Context";
import { useRouter } from "next/router";

const Navigation = () => {
  const {
    setToggleProjectsPanel,
    toggleProjectsPanel,
    setToggleContactPanel,
    toggleContactPanel,
  } = useContext(Context);

  const router = useRouter();

  const parallax = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        staggerChildren: 1,
        ease: "backInOut",
      },
    },
  };

  return (
    <NavigationWrapper
      variants={parallax}
      initial={"initial"}
      animate={"animate"}
    >
      <Container flex align={"center"} justify={"space-between"}>
        <ImageWrapper>
          <Image
            src={"/images/brand.png"}
            objectFit={"contain"}
            height={35}
            width={35}
          />
          <h1>RG</h1>
        </ImageWrapper>
        <nav>
          <ul>
            <li onClick={() => router.push("/")}>Home</li>
            <li onClick={() => setToggleProjectsPanel(!toggleProjectsPanel)}>
              Projects
            </li>
            <li onClick={() => setToggleContactPanel(!toggleContactPanel)}>
              Contact
            </li>
          </ul>
        </nav>
      </Container>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled(motion.div)`
  width: 100%;
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  h1 {
    color: ${(props) => props.theme.alternateColor};
    font-family: ${(props) => props.theme.title.font};
    font-size: ${(props) => props.theme.title.size[3]};
  }
  nav {
    ul {
      display: flex;
      li {
        color: ${(props) => props.theme.alternateColor};
        margin-left: ${(props) => props.theme.spacing[4]};
        font-size: ${(props) => props.theme.body.size[1]};
        font-family: ${(props) => props.theme.title.font};
        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme.button.backgroundColor};
        }
      }
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Navigation;
