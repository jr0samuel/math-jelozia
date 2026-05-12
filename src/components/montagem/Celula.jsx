import React from "react";
import "./celula.css";
import { handleKeyDown, handleChange } from "./celula.js";

export function Celula({ tipo, linha, coluna, valores, onChangeCaixa, travado }) {
    const pegarValor = (posicao) => valores[`${linha}-${coluna}-${posicao}`] || "";
    
    const propsInput = (posicaoClasse, posicaoNome) => {
        const identificadorUnico = `caixa-${linha}-${coluna}-${posicaoNome}`;

        return {
            type: "text",
            className: `caixa ${posicaoClasse} ${travado ? 'travado' : ''}`,
            value: pegarValor(posicaoNome) || "",
            onKeyDown: handleKeyDown,
            onChange: (e) => handleChange(e, linha, coluna, posicaoNome, onChangeCaixa),
            readOnly: travado,
            id: identificadorUnico,
            name: identificadorUnico,
            "aria-label": `Caixa ${posicaoNome} na linha ${linha} e coluna ${coluna}`,
        };
    };

    if(tipo === "esquina"){
        return (
            <div className="celula esquina">
                <div>
                    #######
                    #######
                    #######
                </div>
            </div>
        );
    };
    if(tipo === "borda"){
        return (
            <div className="celula borda">
                <input {...propsInput("centro")} />
            </div>
        );
    };
    if(tipo === "3"){
        return (
            <div className="celula">
                <input {...propsInput("superior-esquerdo-2", "sup-esq-2")} />
                <div className="barra"></div>
                <input {...propsInput("inferior-direito-2", "inf-dir-2")} />
            </div>
        );
    }
    if(tipo === "4"){
        return (
            <div className="celula">
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
            <div className="celula">
                <input {...propsInput("superior-esquerdo-3", "sup-esq-3")} />
                <div className="barra"></div>
                <input {...propsInput("inferior-direito-baixo-3", "inf-dir-b-3")} />
                <input {...propsInput("inferior-direito-cima-3", "inf-dir-c-3")} />
            </div>
        );
    }
    if(tipo === "6"){
        return (
            <div className="celula">
                <input {...propsInput("superior-esquerdo-baixo-3a", "sup-esq-b-3a")} />
                <input {...propsInput("superior-esquerdo-cima-3a", "sup-esq-c-3a")} />
                <div className="barra"></div>
                <input {...propsInput("inferior-direito-3a", "inf-dir-3a")} />
            </div>
        );
    }
    return null;
};
