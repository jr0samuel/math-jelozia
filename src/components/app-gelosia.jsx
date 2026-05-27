import React, { useState } from 'react';

import "./app-estilo.css";

import './montagem/celula.css';
import { Celula } from './montagem/Celula.jsx';
import { apenasNumero } from "./montagem/celula.js";
import { Botao } from "./global/usandoBotoes.jsx";

export function Gelosia () {
    const [inputColunas, setInputColunas] = useState();
    const [inputLinhas, setInputLinhas] = useState();
    const [f1_2, setF1_2] = useState(0);
    const [f2_2, setF2_2] = useState(0);
    const [valoresCaixas, setValoresCaixas] = useState({});
    const gerarGrid = () => {
      if (inputColunas > 0 && inputLinhas > 0) {
        setF1_2(inputColunas + 2);
        setF2_2(inputLinhas + 2);
        setValoresCaixas({});
      } else {
        setF1_2(0);
        setF2_2(0);
      }
    };
    const [travado, setTravado] = useState(false);

    const handleCaixa = (linha, coluna, posicaoCaixa, novoValor) => {
      const chaveUnica = `${linha}-${coluna}-${posicaoCaixa}`;
      setValoresCaixas(prev => ({...prev, [chaveUnica]: novoValor}));
    };
    
    const tipoCelula = (linhaIndex, colunaIndex) => {
      let c = colunaIndex + 1;
      let l = linhaIndex + 1;
        let topo = l === 1;
        let base = l === f2_2;
        let esq = c === 1;
        let dir = c === f1_2;
        if ((topo || base) && (esq || dir)) return "esquina";
        if (topo) return "borda-sup";
        if (base) return "borda-inf";
        if (esq) return "borda-esq";
        if (dir) return "borda-dir";
        if(f2_2 === 3 && f1_2 === 3 && (l === 2 && c > 1 && c < f1_2)) return "3";
        if(f2_2 === 3 && f1_2 >= 4 && (l === 2 && c > 1 && c < (f1_2 - 1))) return "5";
        if(f2_2 === 3 && f1_2 > 3 && (l === 2 && c === (f1_2 - 1))) return "3";
        if(f2_2 === 4 && f1_2 === 3 && (l === 2 && c > 1 && c < f1_2)) return "5";
        if(f2_2 === 4 && f1_2 === 3 && (l > 2 && l < f2_2 && c > 1 && c < f1_2)) return "3";
        if(f2_2 === 4 && f1_2 === 4 && (l > 2 && l < f2_2 && c > 1 && c < f1_2)) return "3";
        if(f2_2 === 4 && f1_2 === 4 && (l === 2 && c > 1 && c < f1_2)) return "5";
        if(f2_2 > 4 && f1_2 > 4 && l === 2 && c === (f1_2 - 1)) return "4";
        if(f2_2 > 4 && f1_2 > 4 && l === 2 && c > 1 && c < (f1_2 - 1)) return "5";
        if((f2_2 > 4 && f2_2 < 6) && f1_2 > 4 && l > 2 && l < f2_2 && c > 1 && c < f1_2) return "3";
        if(f2_2 === 4 && f1_2 >= 5 && l === 3 && c > 1 && c < f1_2) return "3";
        if(f2_2 === 4 && f1_2 >= 5 && l === 2 && c > 1 && c < f1_2) return "5";
        if(f2_2 === 5 && f1_2 === 4 && l > 2 && l < f2_2 && c > 1 && c < f1_2) return "3";
        if(f2_2 === 5 && f1_2 === 4 && l === 2 && c === 2) return "5";
        if(f2_2 === 5 && f1_2 === 4 && l === 2 && c === (f1_2 - 1)) return "4";
        if(f2_2 === 5 && f1_2 === 3 && l === 2 && c === (f1_2 - 1)) return "4";
        if(f2_2 === 5 && f1_2 === 3 && l > 2 && l < f2_2 && c === (f1_2 - 1)) return "3";
        if(f2_2 >= 6 && (f1_2 >= 5 || f1_2 === 3 || f1_2 === 4) && l > 2 && l < (f2_2 - 2) && c === (f1_2 - 1)) return "6";
        if(f2_2 >= 6 && (f1_2 >= 5 || f1_2 === 3 || f1_2 === 4) && l > 2 && l < f2_2 && c > 1 && c < (f1_2 - 1)) return "3";
        if(f2_2 >= 6 && (f1_2 >= 5 || f1_2 === 3 || f1_2 === 4) && l > (f2_2 - 3) && l < f2_2 && c === (f1_2 - 1)) return "3";
        if(f2_2 >= 6 && f1_2 === 4 && l === 2 && c === 2) return "5";
        if(f2_2 >= 6 && (f1_2 === 3 || f1_2 === 4) && l === 2 && c === (f1_2 - 1)) return "4";
        return "3";
    };
    
    const totalCelulas = f1_2 * f2_2;
    
    return (
        <>
          <header className="head-conteiner">
            <div className="conteiner">
              <p className="paragrafo">
                Digite a quantidade de casas numéricas dos dois fatores para fazer a Gelosia, por exemplo, 258 vezes 19, digite 3 no Primeiro Fator e 2 no Segundo Fator
                <br/>
                (inclua as casas decimais, por exemplo, 10.2, digite 3)
              </p>
              <label className="fator fator1">
              Primeiro Fator:<input className="f" id="f1" onKeyDown={apenasNumero} value={inputColunas || ""} onChange={e => setInputColunas(Number(e.target.value))} />
              </label>
              <br/><br/>
              <label className="fator fator2">
              Segundo Fator:<input className="f" id="f2" onKeyDown={apenasNumero} value={inputLinhas || ""} onChange={e => setInputLinhas(Number(e.target.value))} />
              </label>
              <br /><br />
              <div className="botoes">
                <Botao className="montar" onClick={gerarGrid}>Montar Gelosia</Botao>
              </div>
            </div>
          </header>
          {f1_2 <= 2 || f2_2 <= 2 ? (
            <div style={{display:"none"}}></div>
          ) : (
          <>
            <div className='app-jelozia'>
              <div className="jelozia"
                  style={{gridTemplateColumns:`repeat(${f1_2}, 100px)`}}>
                    {Array.from({length: totalCelulas}).map((_, index) => {
                      const linhaIndex = Math.floor(index / f1_2);
                      const colunaIndex = index % f1_2;
                      const tipo = tipoCelula(linhaIndex, colunaIndex);
    
                      return ( <Celula key={`${linhaIndex}-${colunaIndex}`}
                          tipo={tipo}
                          linha={linhaIndex}
                          coluna={colunaIndex}
                          valores={valoresCaixas}
                          onChangeCaixa={handleCaixa}
                          travado={travado}
                        />
                      );
                  })}
              </div>
              <div className="grupos botoes">
                <div className='grupo fim'>
                  <Botao onClick={() => setTravado(true)}
                    className={`${travado ? 'ativo' : ''}`}
                  >
                    Finalizar Questão
                  </Botao>
                  <p className="instrucaoUm instrucao">
                      Ao clicar em "Finalizar Questão", não será mais possível digitar na gelosia.
                  </p>
                </div>
                <div className="grupo volta">
                  <Botao onClick={() => setTravado(false)}
                    className={`${!travado ? 'ativo' : ''}`}
                  >
                    Voltar para Questão
                  </Botao>
                  <p className="instrucaoDois instrucao">
                      Ao clicar em "Voltar para Questão", será possível digitar novamente.
                  </p>
                </div>
              </div>
            </div>
          </>
          )}
        </>
    );
};
