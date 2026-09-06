import React from "react";
import "./celula-estilo.css";
import { handleChange, handleKeyDown } from "./celula-utils.js";

export function Celula ({ tipo, linha, coluna, valores, onChangeCaixa, travado, travaBorda }) {
    const pegarValor = posicao => valores[`${linha}-${coluna}-${posicao}`] || "";
    const propsInput = (posicaoClasse, posicaoNome) => {
        const identificadorUnico = `caixa-linha-${linha}-coluna-${coluna}-posição-${posicaoNome}`;
        const readOnly = travado || (travaBorda && ["borda-sup", "borda-dir"].includes(tipo));
        const valorAtual = pegarValor(posicaoNome) || "";
        const calcularOrdemTabIndex = () => {
            if (tipo === "borda-sup") return 10000 + coluna;
            if (tipo === "borda-dir") return 20000 + linha;
            if (!tipo.startsWith("borda") && tipo !== "esquina") return 30000 + (linha * 1000) + coluna;
            if (tipo === "borda-inf") return 40000 - coluna;
            if (tipo === "borda-esq") return 50000 - linha;
            return 99999;
        };
        const navegarCustom = e => {
            const inputs = Array.from(document.querySelectorAll('input.caixa:not([tabindex="-1"])'));
            inputs.sort((a, b) => Number(a.getAttribute('data-ordem')) - Number(b.getAttribute('data-ordem')));
            const indexAtual = inputs.findIndex(input => input === e.target);
            if (indexAtual !== -1) {
                e.preventDefault();
                let proximoIndex = e.shiftKey ? indexAtual - 1 : indexAtual + 1;
                if (proximoIndex >= inputs.length) {
                    const elementoDestino = travado
                      ? document.getElementById('btn-volta')
                      : document.getElementById('btn-fim');
                    if (elementoDestino) elementoDestino.focus();
                } else if (proximoIndex < 0) {
                    const btnMontar = document.getElementById('btn-montar');
                    if (btnMontar) btnMontar.focus();
                } else {
                    inputs[proximoIndex].focus();
                }
            }
        };
        return {
            className: `caixa ${posicaoClasse} ${readOnly ? 'travado' : 'nao-travado'}`,
            value: valorAtual,
            tabIndex: travado ? (valorAtual !== "" ? 0 : -1) : 0,
            'data-ordem': calcularOrdemTabIndex(),
            onFocus: e => e.target.select(),
            onKeyDown: e => {
                if (handleKeyDown) handleKeyDown(e);
                if (e.key === "Tab") {
                    navegarCustom(e);
                    return;
                }
            },
            onChange: e => handleChange(e, linha, coluna, posicaoNome, onChangeCaixa),
            readOnly,
            id: identificadorUnico,
            name: identificadorUnico,
            "aria-label": `Caixa ${posicaoNome} na linha ${linha} e coluna ${coluna}`,
            type: "text",
            inputMode: "numeric",
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
            <div className={`celula ${tipo} cell-3`}>
                <div className="e-3">
                    <input {...propsInput("esquerdo-3", "esq-3")} />
                </div>
                <div className="barra"></div>
                <div className="d-3">
                    <input {...propsInput("direito-3", "dir-3")} />
                </div>
            </div>
        );
    }
    if(tipo === "4"){
        return (
            <div className={`celula ${tipo} cell-4`}>
                <div className="e-4">
                    <input {...propsInput("esquerdo-baixo-4", "esq-b-4")} />
                    <input {...propsInput("esquerdo-cima-4", "esq-c-4")} />
                </div>
                <div className="barra"></div>
                <div className="d-4">
                    <input {...propsInput("direito-baixo-4", "dir-b-4")}  />
                    <input {...propsInput("direito-cima-4", "dir-c-4")}  />
                </div>
            </div>
        );
    }
    if(tipo === "5"){
        return (
            <div className={`celula ${tipo} cell-5`}>
                <div className="e-5">
                    <input {...propsInput("esquerdo-baixo-5", "esq-b-5")} />
                    <input {...propsInput("esquerdo-cima-5", "esq-c-5")} />
                </div>
                <div className="barra"></div>
                <div className="d-5">
                    <input {...propsInput("direito-5", "dir-5")} />
                </div>
            </div>
        );
    }
    if(tipo === "6"){
        return (
            <div className={`celula ${tipo} cell-6`}>
                <div className="e-6">
                    <input {...propsInput("esquerdo-6", "esq-6")} />
                </div>
                <div className="barra"></div>
                <div className="d-6">
                    <input {...propsInput("direito-baixo-6", "dir-b-6")} />
                    <input {...propsInput("direito-cima-6", "dir-c-6")} />
                </div>
            </div>
        );
    }
    return null;
};
