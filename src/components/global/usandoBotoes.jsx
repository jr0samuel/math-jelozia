import { useBotoes } from "./useBotoes.js";

export const Botao = ({onClick, children, className = ""}) => {
    const {clicou, bind} = useBotoes(onClick);
    return(
        <button {...bind}
            className={`btn ${className} ${clicou ? "clicou" : ""}`}
        >
            {children}
        </button>
    );
};
