import React from "react";
import "./celula-um.css";
import { handleChange, handleKeyDown } from "./celula.js";

export function CelulaUm ({ tipo, linha, coluna, valores, onChangeCaixa, travado }) {
    const pegarValor = (posicao) => valores[`${linha}-${coluna}-${posicao}`] || "";
    const propsInput = (posicaoClasse, posicaoNome) => {
        const identificadorUnico = `caixa-linha-${linha}-coluna-${coluna}-posição-${posicaoNome}`;
        return {
            className: `caixa ${posicaoClasse} ${travado ? 'travado' : 'nao-travado'}`,
            value: pegarValor(posicaoNome) || "",
            onKeyDown: handleKeyDown,
            onChange: (e) => handleChange(e, linha, coluna, posicaoNome, onChangeCaixa),
            readOnly: travado,
            id: identificadorUnico,
            name: identificadorUnico,
            "aria-label": `Caixa ${posicaoNome} na linha ${linha} e coluna ${coluna}`,
            type:"text",
            inputMode:"numeric",
            maxLength: 1
        };
    };
    if(tipo === "esquina"){
        return (
            <div className={`celula ${tipo}`}>
                <div>#######
                  #######
                #######</div>
            </div>
        );
    };
    if(tipo.startsWith("borda")){
        return (
            <div className={`celula ${tipo}`}>
                <input {...propsInput("centro", "central-valor-unico")} />
            </div>
        );
    };
    if(tipo === "3"){
        return (
            <div className={`celula ${tipo}`}>
                <input {...propsInput("superior-esquerdo-2", "sup-esq-2")} />
                <div className="barra"></div>
                <input {...propsInput("inferior-direito-2", "inf-dir-2")} />
            </div>
        );
    }
    if(tipo === "4"){
        return (
            <div className={`celula ${tipo}`}>
                <input {...propsInput("superior-esquerdo-baixo-4", "sup-esq-b-4")} />
                <input {...propsInput("superior-esquerdo-cima-4", "sup-esq-c-4")} />
                <div className="barra"></div>
                <input {...propsInput("inferior-direito-baixo-4", "inf-dir-b-4")} />
                <input {...propsInput("inferior-direito-cima-4", "inf-dir-c-4")} />
            </div>
        );
    }
    if(tipo === "5"){
        return (
            <div className={`celula ${tipo}`}>
                <input {...propsInput("superior-esquerdo-baixo-3", "sup-esq-b-3")} />
                <input {...propsInput("superior-esquerdo-cima-3", "sup-esq-c-3")} />
                <div className="barra"></div>
                <input {...propsInput("inferior-direito-3", "inf-dir-3")} />
            </div>
        );
    }
    if(tipo === "6"){
        return (
            <div className={`celula ${tipo}`}>
                <input {...propsInput("superior-esquerdo-3a", "sup-esq-3a")} />
                <div className="barra"></div>
                <input {...propsInput("inferior-direito-baixo-3a", "inf-dir-b-3a")} />
                <input {...propsInput("inferior-direito-cima-3a", "inf-dir-c-3a")} />
            </div>
        );
    }
    return null;
};
