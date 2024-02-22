import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:1337");

export const AppSocketContext = createContext({ socket });

export const AppSocketProvider = ({ children }) => {
  return <AppSocketContext.Provider value={{ socket }}>{children}</AppSocketContext.Provider>;
};
