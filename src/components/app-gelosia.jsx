import React, { useState } from 'react';

import "./app-estilo.css";

import './montagem/celula-estilo.css';
import { Celula } from './montagem/Celula.jsx';
import { apenasNumero } from "./montagem/celula-utils.js";
import { Botao } from "./global/usandoBotoes.jsx";
import { Link } from 'react-router-dom';

export function Gelosia ({variant}) {
    const [inputColunas, setInputColunas] = useState();
    const [inputLinhas, setInputLinhas] = useState();
    const [f1_2, setF1_2] = useState(0);
    const [f2_2, setF2_2] = useState(0);
    const [valoresCaixas, setValoresCaixas] = useState({});
    const [travado, setTravado] = useState(false);
    const gerarGrid = () => {
      if (variant === "um") {
        const colunas = Number(inputColunas);
        const linhas = Number(inputLinhas);
        if (colunas > 0 && linhas > 0) {
          setF1_2(colunas + 2);
          setF2_2(linhas + 2);
          setValoresCaixas({});
          setTravado(false);
        } else {
          setF1_2(0);
          setF2_2(0);
        }
      } else {
        const fator1 = String(inputColunas || "");
        const fator2 = String(inputLinhas || "");
        if (fator1.length > 0 && fator2.length > 0) {
          const colunasTotal = fator1.length + 2;
          const linhasTotal = fator2.length + 2;
          setF1_2(colunasTotal);
          setF2_2(linhasTotal);
          setTravado(false);
          const novosValores = {};
          fator1.split("").forEach((digito, index) => {
            novosValores[`0-${index + 1}-central-valor-unico`] = digito;
          });
          const ultimaColunaIndex = colunasTotal - 1;
          fator2.split("").forEach((digito, index) => {
            novosValores[`${index + 1}-${ultimaColunaIndex}-central-valor-unico`] = digito;
          });
          setValoresCaixas(novosValores);
        } else {
          setF1_2(0);
          setF2_2(0);
          setValoresCaixas({});
        }
      }
    };

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
              <div className='link-versao'>
                <div><Link id="versoes" className="link-a" to={variant === "um" ? "/outra-versao" : "/"}>Outra versão da Gelosia</Link></div>
                <div><a id="explicar" className="link-a" href='/gelosia-explicada' target='_blank' rel='noreferrer'>Explicação da Gelosia</a></div>
              </div>
              <p className={`paragrafo paragrafo-${variant}`}>
                {variant === "um"
                ? `Digite a quantidade de casas numéricas dos dois fatores para fazer a Gelosia, por exemplo, 258 vezes 19, digite 3 no Primeiro Fator e 2 no Segundo Fator
                \n
                (inclua as casas decimais, por exemplo, 10.2, digite 3)`
                : "Digite a conta que você quer fazer na Gelosia, se tiver decimal, não digite a vírgula, porque a Gelosia não usa vírgula"
                }
              </p>
              <label className="fator fator1">
              <span>Primeiro Fator:</span><input className="f" id="f1" onKeyDown={apenasNumero} value={inputColunas || ""} onChange={e => setInputColunas(e.target.value)} />
              </label>
              <br/><br/>
              <label className="fator fator2">
              <span>Segundo Fator:</span><input className="f" id="f2" onKeyDown={apenasNumero} value={inputLinhas || ""} onChange={e => setInputLinhas(e.target.value)} />
              </label>
              <br /><br />
              <div className="botoes">
                <Botao id="btn-montar" className="montar" onClick={gerarGrid}>Montar Gelosia</Botao>
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
                          travaBorda={variant === "dois"}
                        />
                      );
                  })}
              </div>
              <div className="grupos botoes">
                <div className='grupo fim'>
                  <Botao id="btn-fim" onClick={() => setTravado(true)}
                    className={`${travado ? 'travado-ativo' : 'travado-nao-ativo'}`}
                  >
                    Finalizar Questão
                  </Botao>
                  <p className="instrucaoUm instrucao">
                      Ao clicar em "Finalizar Questão", não será mais possível digitar na gelosia.
                  </p>
                </div>
                <div className="grupo volta">
                  <Botao id="btn-volta" onClick={() => setTravado(false)}
                    className={`${!travado ? 'travado-nao-ativo' : 'travado-ativo'}`}
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
