import { useBotoes } from "./useBotoes.js";

export const Botao = ({onClick, children, className, ...rest}) => {
    const {clicou, bind} = useBotoes(onClick);
    return(
        <button {...bind} {...rest}
            className={`btn ${className} ${clicou ? "clicou" : "nao-clicado"}`}
        >
            {children}
        </button>
    );
};
