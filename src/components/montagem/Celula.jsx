import React from "react";
import "./celula-estilo.css";
import { handleChange, handleKeyDown } from "./celula-utils.js";

export function Celula ({ tipo, linha, coluna, valores, onChangeCaixa, travado, travaBorda, registrarInput, getInputs, btnMontarRef, btnFimRef, btnVoltaRef }) {
    const pegarValor = posicao => valores[`${linha}-${coluna}-${posicao}`] || "";
    const propsInput = (posicaoClasse, posicaoNome) => {
        const identificadorUnico = `caixa-linha-${linha}-coluna-${coluna}-posição-${posicaoNome}`;
        const readOnly = travado || (travaBorda && ["borda-sup", "borda-dir"].includes(tipo));
        const valorAtual = pegarValor(posicaoNome) || "";
        const calcularOrdemTabIndex = () => {
            const isCima = posicaoClasse.includes("cima");
            const isDireito = posicaoClasse.includes("direito") || posicaoNome.includes("dir");
            if (tipo === "borda-sup") return 10000 + coluna;
            if (tipo === "borda-dir") return 20000 + linha;
            if (isCima) return 50000 - (linha * 100) - coluna - (isDireito ? 0.5 : 0);
            if (!tipo.startsWith("borda") && tipo !== "esquina") return 30000 + (linha * 100) + coluna;
            if (tipo === "borda-inf") return 40000 - coluna;
            if (tipo === "borda-esq") return 40100 - linha;
            return 99999;
        };
        const navegarCustom = e => {
            let inputsDom = getInputs().filter(input => input && input.getAttribute('tabindex') !== '-1');
            inputsDom.sort((a, b) => Number(a.getAttribute('data-ordem')) - Number(b.getAttribute('data-ordem')));
            const normais = inputsDom.filter(i => Number(i.getAttribute('data-ordem')) < 39000);
            const resultados = inputsDom.filter(i => {
              const ord = Number(i.getAttribute('data-ordem'));
              return ord >= 39000 && ord < 41000;
            });
            const cimas = inputsDom.filter(i => {
              const ord = Number(i.getAttribute('data-ordem'));
              return ord >= 49000 && ord < 51000;
            });
            const trilhaFinal = [];
            let rIndex = 0, cIndex = 0;
            if (resultados.length > 0) trilhaFinal.push(resultados[rIndex++]);
            while (rIndex < resultados.length || cIndex < cimas.length) {
              if (rIndex < resultados.length) trilhaFinal.push(resultados[rIndex++]);
              if (cIndex < cimas.length) trilhaFinal.push(cimas[cIndex++]);
            }
            inputsDom = [...normais, ...trilhaFinal];
            const indexAtual = inputsDom.findIndex(input => input === e.target);
            if (indexAtual !== -1) {
                e.preventDefault();
                let proximoIndex = e.shiftKey ? indexAtual - 1 : indexAtual + 1;
                if (proximoIndex >= inputsDom.length) {
                    const elementoDestino = travado
                      ? btnVoltaRef.current
                      : btnFimRef.current;
                    if (elementoDestino) elementoDestino.focus();
                } else if (proximoIndex < 0) {
                    if (btnMontarRef.current) btnMontarRef.current.focus();
                } else {
                    inputsDom[proximoIndex].focus();
                }
            }
        };
        return {
            className: `caixa ${posicaoClasse} ${readOnly ? 'travado' : 'nao-travado'}`,
            value: valorAtual,
            tabIndex: travado ? (valorAtual !== "" ? 0 : -1) : 0,
            'data-ordem': calcularOrdemTabIndex(),
            ref: registrarInput(`caixa-${linha}-${coluna}-${posicaoNome}`),
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
            <div className={`celula ${tipo} cell-0`}>
                <div>#######
                  #######
                #######</div>
            </div>
        );
    };
    if(tipo.startsWith("borda")){
        return (
            <div className={`celula ${tipo} cell-1`}>
                <input {...propsInput("centro", "central-valor-unico")} />
            </div>
        );
    };
    if(tipo === "2"){
        return (
            <div className={`celula ${tipo} cell-2`}>
                <div className="e-2">
                    <input {...propsInput("esquerdo-2", "esq-2")} />
                </div>
                <div className="barra"></div>
                <div className="d-2">
                    <input {...propsInput("direito-2", "dir-2")} />
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
    if(tipo === "3a"){
        return (
            <div className={`celula ${tipo} cell-3a`}>
                <div className="e-3a">
                    <input {...propsInput("esquerdo-baixo-3a", "esq-b-3a")} />
                    <input {...propsInput("esquerdo-cima-3a", "esq-c-3a")} />
                </div>
                <div className="barra"></div>
                <div className="d-3a">
                    <input {...propsInput("direito-3a", "dir-3a")} />
                </div>
            </div>
        );
    }
    if(tipo === "3b"){
        return (
            <div className={`celula ${tipo} cell-3b`}>
                <div className="e-3b">
                    <input {...propsInput("esquerdo-3b", "esq-3b")} />
                </div>
                <div className="barra"></div>
                <div className="d-3b">
                    <input {...propsInput("direito-baixo-3b", "dir-b-3b")} />
                    <input {...propsInput("direito-cima-3b", "dir-c-3b")} />
                </div>
            </div>
        );
    }
    return null;
};
