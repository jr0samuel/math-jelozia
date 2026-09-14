import { forwardRef } from "react";
import { useBotoes } from "./useBotoes.js";

export const Botao = forwardRef(({onClick, children, className, onKeyDown, ...rest}, ref) => {
    const {clicou, bind} = useBotoes(onClick);
    return(
        <button {...bind} {...rest} ref={ref}
            className={`btn ${className} ${clicou ? "clicou" : "nao-clicado"}`}
            onKeyDown={e => {
                if (bind.onKeyDown) bind.onKeyDown(e);
                if (onKeyDown) onKeyDown(e);
            }}
        >
            {children}
        </button>
    );
});
