import { createContext, ReactNode } from "react";

type ChatContext = {
    chat: Message[];
    addMessage: (user: string, text: string)
}

export const ChatContext = createContext(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {

    
    return (
        <ChatContext.Provider value={ }>{children}</ChatContext.Provider>
    )
}