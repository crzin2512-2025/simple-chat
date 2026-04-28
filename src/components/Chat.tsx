import { UserContext, useUser } from "@/app/context/UserContext"
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const Chat = () => {
    // 1 - Saber o nome do usuario
    const userCtx = useUser();
    if (!userCtx) return null;
    if (!userCtx.user) return <NameInput />
    // 2 - Histórico de mensagens

    // 3 - Input de adicionar mensagens
    //<ChatInput name={userCtx.user}/>//

    return (
        <div className="border border-white/30 rounded-md">
            <div className="h-96 p-3 overflow-y-scroll">
                <ChatMessages/>
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name={userCtx.user} />
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name={'bot'} />
            </div>
        </div>
    )
}