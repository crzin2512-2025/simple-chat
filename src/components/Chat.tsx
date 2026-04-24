import { UserContext, useUser } from "@/app/context/UserContext"
import { NameInput } from "./NameInput";

export const Chat = () => {
    // 1 - Saber o nome do usuario
        const userCtx = useUser();
        if(!userCtx) return null;
        if(!userCtx.user) return <NameInput />
    // 2 - Histórico de mensagens
        
    // 3 - Input de adicionar mensagens


    return(
        <div className="border border-white/30 rounded-md">
            <div className="h-96 p-3 overflow-y-scroll">
                ...
            </div>
            <div className="border-t border-t-white/30 p-3">
                ...
            </div>
        </div>
    )
}