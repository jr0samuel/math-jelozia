import React, { useState, useRef } from 'react';

import "./app-estilo.css";

import './montagem/celula-estilo.css';
import { Celula } from './montagem/Celula.jsx';
import { apenasNumero } from "./montagem/celula-utils.js";
import { Botao } from "./global/usandoBotoes.jsx";
import { Link } from 'react-router-dom';

export function Gelosia ({variant}) {
    const [dadosVersao, setDadosVersao] = useState({
      um: { inputColunas: "", inputLinhas: "", f1_2: 0, f2_2: 0, valoresCaixas: {}, travado: false },
      dois: { inputColunas: "", inputLinhas: "", f1_2: 0, f2_2: 0, valoresCaixas: {}, travado: false }
    });
    const atual = dadosVersao[variant] || dadosVersao.um;
    const atualizarAtual = (camposAtualizados) => {
      setDadosVersao(prev => ({
        ...prev,
        [variant]: { ...prev[variant], ...camposAtualizados }
      }));
    };
    const gerarGrid = () => {
      if (variant === "um") {
        const colunas = Number(atual.inputColunas);
        const linhas = Number(atual.inputLinhas);
        if (colunas > 0 && linhas > 0) {
          atualizarAtual({
            f1_2: colunas + 2,
            f2_2: linhas + 2,
            valoresCaixas: {},
            travado: false
          });
        } else {
          atualizarAtual({ f1_2: 0, f2_2: 0 });
        }
      } else {
        const fator1 = String(atual.inputColunas || "");
        const fator2 = String(atual.inputLinhas || "");
        if (fator1.length > 0 && fator2.length > 0) {
          const colunasTotal = fator1.length + 2;
          const linhasTotal = fator2.length + 2;
          const novosValores = {};
          fator1.split("").forEach((digito, index) => {
            novosValores[`0-${index + 1}-central-valor-unico`] = digito;
          });
          const ultimaColunaIndex = colunasTotal - 1;
          fator2.split("").forEach((digito, index) => {
            novosValores[`${index + 1}-${ultimaColunaIndex}-central-valor-unico`] = digito;
          });
          atualizarAtual({
            f1_2: colunasTotal,
            f2_2: linhasTotal,
            travado: false,
            valoresCaixas: novosValores
          });
        } else {
          atualizarAtual({ f1_2: 0, f2_2: 0, setValoresCaixas: {} });
        }
      }
    };
    const entradaTab = (e, direcao) => {
      if (e.key === "Tab") {
        const caminhoFrente = direcao === "frente" && !e.shiftKey;
        const caminhoTras = direcao === "tras" && e.shiftKey;
        if (caminhoFrente || caminhoTras) {
          let inputsDom = Array.from(document.querySelectorAll('input.caixa:not([tabindex="-1"])'));
          if (inputsDom.length > 0) {
            e.preventDefault();
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
            if (caminhoFrente) {
              inputsDom[0].focus();
            } else {
              inputsDom[inputsDom.length - 1].focus();
            }
          }
        }
      }
    };

    const handleCaixa = (linha, coluna, posicaoCaixa, novoValor) => {
      const chaveUnica = `${linha}-${coluna}-${posicaoCaixa}`;
      atualizarAtual({
        valoresCaixas: { ...atual.valoresCaixas, [chaveUnica]: novoValor }
      });
    };

    const btnFimRef = useRef(null);
    const btnVoltaRef = useRef(null);
    const btnMontarRef = useRef(null);
    const handleInputKeyUp = e => {
      if (e.key === "Enter") {
        const val1 = Number(atual.inputColunas);
        const val2 = Number(atual.inputLinhas);
        if (val1 >=1 && val2 >= 1) {
          if (btnMontarRef.current) {
            btnMontarRef.current.classList.add('clicou');
            btnMontarRef.current.classList.remove('nao-clicado');
            setTimeout(() => {
              btnMontarRef.current.classList.remove('clicou');
              btnMontarRef.current.classList.add('nao-clicado');
            }, 150);
          }
          gerarGrid();
        }
      }
    };
    
    const tipoCelula = (linhaIndex, colunaIndex) => {
      let c = colunaIndex + 1;
      let l = linhaIndex + 1;
        let topo = l === 1;
        let base = l === atual.f2_2;
        let esq = c === 1;
        let dir = c === atual.f1_2;
        if ((topo || base) && (esq || dir)) return "esquina";
        if (topo) return "borda-sup";
        if (base) return "borda-inf";
        if (esq) return "borda-esq";
        if (dir) return "borda-dir";
        if(atual.f2_2 === 3 && atual.f1_2 === 3 && (l === 2 && c > 1 && c < atual.f1_2)) return "3";
        if(atual.f2_2 === 3 && atual.f1_2 >= 4 && (l === 2 && c > 1 && c < (atual.f1_2 - 1))) return "5";
        if(atual.f2_2 === 3 && atual.f1_2 > 3 && (l === 2 && c === (atual.f1_2 - 1))) return "3";
        if(atual.f2_2 === 4 && atual.f1_2 === 3 && (l === 2 && c > 1 && c < atual.f1_2)) return "5";
        if(atual.f2_2 === 4 && atual.f1_2 === 3 && (l > 2 && l < atual.f2_2 && c > 1 && c < atual.f1_2)) return "3";
        if(atual.f2_2 === 4 && atual.f1_2 === 4 && (l > 2 && l < atual.f2_2 && c > 1 && c < atual.f1_2)) return "3";
        if(atual.f2_2 === 4 && atual.f1_2 === 4 && (l === 2 && c > 1 && c < atual.f1_2)) return "5";
        if(atual.f2_2 > 4 && atual.f1_2 > 4 && l === 2 && c === (atual.f1_2 - 1)) return "4";
        if(atual.f2_2 > 4 && atual.f1_2 > 4 && l === 2 && c > 1 && c < (atual.f1_2 - 1)) return "5";
        if((atual.f2_2 > 4 && atual.f2_2 < 6) && atual.f1_2 > 4 && l > 2 && l < atual.f2_2 && c > 1 && c < atual.f1_2) return "3";
        if(atual.f2_2 === 4 && atual.f1_2 >= 5 && l === 3 && c > 1 && c < atual.f1_2) return "3";
        if(atual.f2_2 === 4 && atual.f1_2 >= 5 && l === 2 && c > 1 && c < atual.f1_2) return "5";
        if(atual.f2_2 === 5 && atual.f1_2 === 4 && l > 2 && l < atual.f2_2 && c > 1 && c < atual.f1_2) return "3";
        if(atual.f2_2 === 5 && atual.f1_2 === 4 && l === 2 && c === 2) return "5";
        if(atual.f2_2 === 5 && atual.f1_2 === 4 && l === 2 && c === (atual.f1_2 - 1)) return "4";
        if(atual.f2_2 === 5 && atual.f1_2 === 3 && l === 2 && c === (atual.f1_2 - 1)) return "4";
        if(atual.f2_2 === 5 && atual.f1_2 === 3 && l > 2 && l < atual.f2_2 && c === (atual.f1_2 - 1)) return "3";
        if(atual.f2_2 >= 6 && (atual.f1_2 >= 5 || atual.f1_2 === 3 || atual.f1_2 === 4) && l > 2 && l < (atual.f2_2 - 2) && c === (atual.f1_2 - 1)) return "6";
        if(atual.f2_2 >= 6 && (atual.f1_2 >= 5 || atual.f1_2 === 3 || atual.f1_2 === 4) && l > 2 && l < atual.f2_2 && c > 1 && c < (atual.f1_2 - 1)) return "3";
        if(atual.f2_2 >= 6 && (atual.f1_2 >= 5 || atual.f1_2 === 3 || atual.f1_2 === 4) && l > (atual.f2_2 - 3) && l < atual.f2_2 && c === (atual.f1_2 - 1)) return "3";
        if(atual.f2_2 >= 6 && atual.f1_2 === 4 && l === 2 && c === 2) return "5";
        if(atual.f2_2 >= 6 && (atual.f1_2 === 3 || atual.f1_2 === 4) && l === 2 && c === (atual.f1_2 - 1)) return "4";
        return "3";
    };
    
    const totalCelulas = atual.f1_2 * atual.f2_2;
    
    return (
        <>
          <header className="head-conteiner">
            <div className="conteiner">
              <div className='link-versao'>
                <div>
                  <Link id="versoes" className="link-a" to={variant === "um" ? "/outra-versao" : "/"}>Outra versão da Gelosia</Link>
                </div>
                <div>
                  <a id="explicar" className="link-a" href='/gelosia-explicada' target='_blank' rel='noreferrer'>Explicação da Gelosia</a>
                </div>
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
              <span>Primeiro Fator:</span>
              <input className="f" id="f1"
                     onKeyDown={apenasNumero}
                     onKeyUp={handleInputKeyUp}
                     value={atual.inputColunas || ""}
                     onChange={e => atualizarAtual({ inputColunas: e.target.value })}
              />
              </label>
              <br/><br/>
              <label className="fator fator2">
              <span>Segundo Fator:</span>
              <input className="f" id="f2"
                     onKeyDown={apenasNumero}
                     onKeyUp={handleInputKeyUp}
                     value={atual.inputLinhas || ""}
                     onChange={e => atualizarAtual({ inputLinhas: e.target.value })}
              />
              </label>
              <br /><br />
              <div className="botoes">
                <Botao ref={btnMontarRef}
                       id="btn-montar" className="montar"
                       onClick={gerarGrid}
                       onKeyDown={e => entradaTab(e, "frente")}
                >
                    Montar Gelosia
                </Botao>
              </div>
            </div>
          </header>
          {atual.f1_2 <= 2 || atual.f2_2 <= 2 ? (
            <div style={{display:"none"}}></div>
          ) : (
          <>
            <div className='app-jelozia'>
              <div className="jelozia"
                  style={{gridTemplateColumns:`repeat(${atual.f1_2}, 100px)`}}>
                    {Array.from({length: totalCelulas}).map((_, index) => {
                      const linhaIndex = Math.floor(index / atual.f1_2);
                      const colunaIndex = index % atual.f1_2;
                      const tipo = tipoCelula(linhaIndex, colunaIndex);
                      return (
                        <Celula key={`${linhaIndex}-${colunaIndex}`}
                          tipo={tipo}
                          linha={linhaIndex}
                          coluna={colunaIndex}
                          valores={atual.valoresCaixas}
                          onChangeCaixa={handleCaixa}
                          travado={atual.travado}
                          travaBorda={variant === "dois"}
                          btnMontarRef={btnMontarRef}
                          btnFimRef={btnFimRef}
                          btnVoltaRef={btnVoltaRef}
                        />
                      );
                    })}
              </div>
              <div className="grupos botoes">
                <div className='grupo fim'>
                  <Botao ref={btnFimRef}
                    id="btn-fim"
                    onClick={() => atualizarAtual({ travado: true })}
                    onKeyDown={e => entradaTab(e, "tras")}
                    tabIndex={atual.travado ? -1 : 0}
                    className={`${atual.travado ? 'travado-ativo' : 'travado-nao-ativo'}`}
                  >
                    Finalizar Questão
                  </Botao>
                  <p className="instrucaoUm instrucao">
                      Ao clicar em "Finalizar Questão", não será mais possível digitar na gelosia.
                  </p>
                </div>
                <div className="grupo volta">
                  <Botao ref={btnVoltaRef}
                    id="btn-volta"
                    onClick={() => atualizarAtual({ travado: false })}
                    onKeyDown={e => entradaTab(e, "tras")}
                    tabIndex={!atual.travado ? -1 : 0}
                    className={`${!atual.travado ? 'travado-nao-ativo' : 'travado-ativo'}`}
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
