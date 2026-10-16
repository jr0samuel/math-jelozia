export default function GelosiaExplicada ( ) {
    const classe = "link-a";
    const aHrefUm = "https://www.obaricentrodamente.com/2011/12/o-metodo-da-gelosia-para-multiplicacoes.html";
    const aHrefDois = "/gelosias_em_branco_de_1x1_a_6x6.zip";
    const downLoad = "gelosias_em_branco_1x1_6x6.zip";
    return (
        <>
        <div className="artigo">
            <h3>Explicação detalhada da Gelosia</h3>
            <h4 className="artigo secao">
                Comece colocando os fatores
            </h4>
            <div className="artigo secao">
                <img src="/passo1.png" alt="exemplo de gelosia: 25 x 19" />
            </div>
            <h4 className="artigo secao">
                Multiplique os fatores entre colunas e linhas
            </h4>
            <div className="artigo secao">
                <img src="/passo2.png" alt="multiplicando os fatores - parte 1" />
            </div>
            <div className="artigo secao">
                <img src="/passo3.png" alt="multiplicando os fatores - parte 2" />
            </div>
            <div className="artigo secao">
                <img src="/passo4.png" alt="multiplicando os fatores - parte 3" />
            </div>
            <h4 className="artigo secao soma-parte-um">
                Faça a soma pelas diagonais começando pela diagonal isolada de baixo
            </h4>
            <div className="artigo secao">
                <img src="/passo5.png" alt="somando pelas diagonais - parte 1" />
            </div>
            <h4 className="artigo secao">
                Aqui tem aquele "vai um", que vai para a próxima diagonal
            </h4>
            <div className="artigo secao">
                <img src="/passo6.png" alt="somando pelas diagonais - parte 2" />
            </div>
            <div className="artigo secao">
                <img src="/passo7.png" alt="somando pelas diagonais - parte 3" />
            </div>
            <h4>
                Gelosia, também conhecida como método da grade ou método da treliça para multiplicação.
                <br/><br/>
                A primeira linha é o primeiro fator (da esquerda para a direita) e a última coluna é o segundo fator
                (de cima para baixo). A ordem dos fatores não altera o produto (“a ordem dos tratores não altera o viaduto”),
                mas altera o processo do cálculo quando os fatores são diferentes. O produto começa na primeira coluna (de
                cima para baixo) e segue na última linha (da esquerda para direita).
                <div className="artigo secao">
                    <img src="/ordem_dos_tratores.png" alt="a ordem dos tratores não altera o viaduto" />
                </div>
                Perceba um detalhe: o resultado de 5 x 9 é 45. Os quadros têm dois lados divididos por uma barra,
                o lado esquerdo é a dezena e o lado direito é a unidade, porque a multiplicação entre duas unidades
                pode resultar em alguma dezena ou em outra unidade. Em caso de unidade, como 5 x 1 = 5,
                preencha com 0 no lado esquerdo ou deixe vazio se quiser.
                <br/><br/>
                Outro detalhe: a diagonal isolada de baixo é a unidade do produto. À esquerda, a diagonal inteira forma
                a dezena. Depois a centena e assim sucessivamente. Por fim, a diagonal isolada de cima é a última e maior
                casa numérica possível de tal conta, no caso, unidade de milhar e deu zero à esquerda, é uma casa possível,
                visto que a multiplicação de duas dezenas pode resultar em alguma centena ou em unidade de milhar.
                A diagonal isolada de baixo é unitária, porque o valor da unidade é um só, já a diagonal isolada de cima,
                embora pareça unitária, não é, porque pode receber algum “vai um” da diagonal anterior, depende do
                decorrer do cálculo.
                <br/><br/>
                Em termos gerais, as possibilidades de produto das multiplicações:<br/>
                U x U = U ou D<br/>
                U x D = D ou C<br/>
                D x D = C ou UM<br/>
                D x C = UM ou DM<br/>
                U x C = C ou UM<br/>
                A visualização que a Gelosia proporciona permite ver as possibilidades com facilidade, mas também pode conferir ao somar a
                quantidade de casas numéricas de cada fator, por exemplo, 25 x 19 são 4 casas numéricas possíveis<br/>
                146 x 10,2 são 6 casas numéricas possíveis sendo 1 decimal e até 5 inteiras.<br/>
                A única carência da Gelosia é não poder colocar vírgula.
                <br/><br/>
                A Gelosia com unidades nos fatores é igual à tabuada até 9.
                <br/><br/>
                A Gelosia se baseia na propriedade distributiva, por exemplo, 25 x 19 pode ser distribuído em:<br/>
                20 e 5; 10 e 9<br/>
                20 x 10 = 200 | 2 x 1 na grade<br/>
                20 x 9 = 180 | 2 x 9 na grade<br/>
                5 x 10 = 50 | 5 x 1 na grade<br/>
                5 x 9 = 45 | 5 x 9 na grade<br/>
                200 + 180 + 50 + 45 = 475
                <br/><br/>
                O site <a className={classe} href={aHrefUm}>"O Baricentro da Mente"</a> foi o primeiro lugar onde vi a gelosia.
                <br/><br/>
                A matemática é melhor aprendida através de imagens, através da exposição da prática, não é como literatura.
                A parte teórica da matemática é algo avançado que não tem como ser ensinado na escola,
                a não ser que tenha uma turma avançada específica, mas me refiro ao aspecto acadêmico da teoria,
                porque a teoria ensinada na escola é a explicação da prática, isso não é a teoria em aspecto acadêmico.
                A escola deve ensinar o aluno a desenvolver percepção matemática, isso será imprescindível para os estudos acadêmicos
                e também é relevante para a vida cotidiana.
                <br/><br/>
                A Gelosia é uma ferramenta visual, artística e estética, e como diz o professor Cláudio Possani, “é elegante, é
                bonitinho”. Esse aspecto visual facilita o aprendizado e o uso, e inspira a estudar mais por ser animador, e a
                melhor forma de ensinar e aprender é com ânimo, além disso, dá para fazer competição de velocidade sobre
                quem monta mais rápido e quem calcula mais rápido, e deve ser um espetáculo fazer uma gelosia grande
                numa tela enorme.
                <br/><br/>
                O link abaixo é um zip com imagens da gelosia em branco e em vários formatos de 1x1 até 6x6
                para imprimir e escrever, mas também monte na mão para aprender mais.
                Isso é interessante para os professores desafiarem os alunos.
                <br/>
                <a className={classe} href={aHrefDois} download={downLoad}>download</a>
            </h4>
        </div>
        </>
    );
};
