import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const useChats=()=>useContext(ChatContext)