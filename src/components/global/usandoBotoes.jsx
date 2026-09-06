import { useBotoes } from "./useBotoes.js";

export const Botao = ({onClick, children, className, onKeyDown, ...rest}) => {
    const {clicou, bind} = useBotoes(onClick);
    return(
        <button {...bind} {...rest}
            className={`btn ${className} ${clicou ? "clicou" : "nao-clicado"}`}
            onKeyDown={e => {
                if (bind.onKeyDown) bind.onKeyDown(e);
                if(onKeyDown) onKeyDown(e);
            }}
        >
            {children}
        </button>
    );
};
