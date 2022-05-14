import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { Spacer } from "../../../global/Spacer";
import { FaClipboard } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import Context from "../../../global/context/Context";
import Notification from "../../../global/context/NotificationContext";

const ContactBox = () => {
  const [contactInfo] = useState({
    phoneNumber: "+1 (765) 259-4094",
    email: "aviantechtrades@gmail.com",
  });

  const { setNotification, setShowNotification, showNotification } =
    useContext(Notification);
  const { toggleContactPanel } = useContext(Context);

  const CopyText = (info) => {
    navigator.clipboard.writeText(info);
    setShowNotification(!showNotification);
    setNotification(`${info} was copied to clipboard!`);
  };

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  const WrapperVariant = {
    initial: {
      opacity: 0,
      x: -500,
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
      {toggleContactPanel && (
        <ContactBoxWrapper
          key={toggleContactPanel}
          variants={WrapperVariant}
          initial={"initial"}
          animate={"animate"}
          exit={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}
        >
          <Name>Contact Information</Name>
          <Spacer direction={"bottom"} space={"1rem"} />
          <Description>
            Contact me anytime at one of these two methods.
          </Description>
          <Spacer direction={"bottom"} space={"1rem"} />
          <ListOfInformation>
            <ContactItem>
              <p>Phone Number: {contactInfo.phoneNumber}</p>
              <CopiedDiv>
                <Spacer direction={"right"} space={".5rem"} />
                <ClipboardIcon
                  onClick={() => CopyText(contactInfo.phoneNumber)}
                />
              </CopiedDiv>
            </ContactItem>
            <Spacer direction={"top"} space={"0.5rem"} />
            <ContactItem>
              <p>Email: {contactInfo.email}</p>
              <CopiedDiv>
                <Spacer direction={"left"} space={"0.5rem"} />
                <ClipboardIcon onClick={() => CopyText(contactInfo.email)} />
              </CopiedDiv>
            </ContactItem>
          </ListOfInformation>
        </ContactBoxWrapper>
      )}
    </AnimatePresence>
  );
};

const ContactBoxWrapper = styled(motion.div)`
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
`;

const CopiedDiv = styled.div`
  display: flex;
  flex-flow: row-reverse;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => props.theme.spacing[3]};
`;

const Description = styled.div`
  text-align: center;
`;

const ClipboardIcon = styled(FaClipboard)`
  &:hover {
    cursor: pointer;
  }
`;

const CopiedPopUp = styled(motion.div)`
  background-color: ${(props) => props.theme.alternateColor};
  color: ${(props) => props.theme.button.darker};
  padding: ${(props) => props.theme.spacing[1]};
  border-radius: ${(props) => props.theme.spacing[0]};
  position: absolute;
`;

const ListOfInformation = styled(motion.div)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  p {
    color: ${(props) => props.theme.alternateColor};
    font-family: ${(props) => props.theme.title.font};
  }
`;

const Name = styled.div`
  color: ${(props) => props.theme.secondary};
  font-family: ${(props) => props.theme.title.font};
  font-size: ${(props) => props.theme.title.size[3]};
`;

export default ContactBox;
