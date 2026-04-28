type Props = {
    name: string;
}

export const ChatInput = ({ name }: Props) => {
    return(
        <input 
            className="w-full bg-transparent text-white text-md outline-none"
            placeholder={`${name}, Digite uma mensagem`}
        />
    )
}