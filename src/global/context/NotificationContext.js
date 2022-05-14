import { createContext, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Notification = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("Saved to clipboard!");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (showNotification) {
        setShowNotification(!showNotification);
      }
    }, 3000);
  }, [showNotification]);

  const notificationBarVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: showNotification ? 1 : 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <Notification.Provider
      value={{
        showNotification,
        setShowNotification,
        notification,
        setNotification,
      }}
    >
      {children}
      <NotificationBar
        variants={notificationBarVariant}
        initial={"initial"}
        animate={"animate"}
        exit={{ opacity: 0, y: 200, transition: { duration: 1 } }}
      >
        {notification}
      </NotificationBar>
    </Notification.Provider>
  );
};

const NotificationBar = styled(motion.div)`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: ${(props) => props.theme.button.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.title.font};
  color: ${(props) => props.theme.alternateColor};
  font-size: ${(props) => props.theme.title.size[3]};
  padding: ${(props) => props.theme.spacing[4]};
`;

export default Notification;
