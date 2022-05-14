import Head from "next/head";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import Container from "../src/global/Container";
import Navigation from "../src/components/navigation/Navigation";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import {
  starVariant,
  starVariant2,
  parallax,
  aboutMeVariant,
} from "../src/components/homepage/animations/variants";
import PlaqueButton from "../src/components/homepage/components/PlaqueButton";
import LanguageList from "../src/components/homepage/components/LanguageList";
import { Spacer } from "../src/global/Spacer";
import ProjectPanel from "../src/components/homepage/components/ProjectPanel";
import ContactBox from "../src/components/homepage/components/ContactBox";

export default function Home() {
  const [star, setStar] = useState(false);
  const [star2, setStar2] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);
  const theme = useTheme();
  // const { toggleProjectsPanel } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      setStar(!star);
      setStar2(!star2);
    }, 2500);
  }, [star]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <HomeWrapper>
      <Navigation />
      <Star
        key={star}
        variants={starVariant(windowWidth)}
        initial={"initial"}
        animate={"animate"}
      ></Star>
      <Star2
        key={star2}
        variants={starVariant2(windowWidth)}
        initial={"initial"}
        animate={"animate"}
      ></Star2>
      <ImageWrapper>
        <Image
          src={"/images/cover.jpg"}
          priority
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <ProjectPanel />
      <ContactBox />
      <Container>
        <Parallax variants={parallax} initial={"initial"} animate={"animate"}>
          <Overlay>My name is Rob Gioeli.</Overlay>
          <Overlay>Full Stack Developer.</Overlay>
          <Spacer direction="top" space="1rem" />
          <Spacer direction={"top"} space={`${theme.spacing[2]}`} />
          <LanguageList title="Front-End">
            <PlaqueButton text={"NextJS"} />
            <PlaqueButton text={"React"} />
            <PlaqueButton text={"JavaScript"} />
            <PlaqueButton text={"HTML"} />
            <PlaqueButton text={"CSS"} />
          </LanguageList>
          <Spacer direction={"top"} space={"1rem"} />
          <LanguageList title="Back-End">
            <PlaqueButton text={"NextJS"} />
            <PlaqueButton text={"NodeJS"} />
            <PlaqueButton text={"Firebase"} />
            <PlaqueButton text={"MongoDB"} />
          </LanguageList>
          <Spacer direction="top" space="2rem" />
          <AboutMe
            variants={aboutMeVariant}
            initial={"initial"}
            animate={"animate"}
          >
            <AboutMeTitle>To the reader:</AboutMeTitle>I enjoy programming
            because I love creating things. I am always studying new features I
            can incorporate into my programs to make them more effecient and
            modern. I believe in teamwork because working with others enhances
            ideas and allows work to get done faster.
          </AboutMe>
        </Parallax>
      </Container>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    height: 100%;
    overflow-y: auto;
  }
`;

const AboutMe = styled(motion.div)`
  position: relative;
  color: ${(props) => props.theme.alternateColor};
  font-size: ${(props) => props.theme.body.size[2]};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  max-width: 1000px;
  border: 5px solid #fff;
  border-radius: 10px;
`;

const AboutMeTitle = styled.div`
  color: ${(props) => props.theme.alternateColor};
  font-size: ${(props) => props.theme.body.size[2]};
  font-family: ${(props) => props.theme.title.font};
`;

const ImageWrapper = styled.div``;

const Star = styled(motion.div)`
  height: 5px;
  width: 5px;
  background-color: white;
  position: absolute;
  left: -15px;
  border-radius: 100%;
  z-index: 200;
`;

const Star2 = styled(motion.div)`
  height: 5px;
  width: 5px;
  background-color: white;
  position: absolute;
  right: -5px;
  top: 35%;
  border-radius: 100%;
  z-index: 500;
`;

const Parallax = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media screen and (max-width: 700px) {
    overflow-y: scroll;
  }
`;

const Overlay = styled(motion.div)`
  text-align: center;
  font-size: ${(props) => props.theme.title.giantSize};
  color: #fff;
  position: relative;
  font-family: ${(props) => props.theme.title.font};
  line-height: ${(props) => props.theme.spacing[5]};
  @media screen and (max-width: 500px) {
    font-size: 4rem;
  }
`;
