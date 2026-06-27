export default function GelosiaExplicada ( ) {
    return (
        <>
        <div className="artigo">
            <h3>Explicação detalhada da Gelosia</h3>
            <div>
                <img src="/exemplo.png" alt="exemplo usado na explicação: 25 x 19"/>
            </div>
            <h4>
                Gelosia, também conhecida como método da grade ou método da treliça para multiplicação. Antes de explicar, é
                importante dizer que a matemática é melhor aprendida através de imagens, através da exposição da prática, não
                é como literatura. A parte teórica da matemática é algo avançado que não tem como ser ensinado na escola, a
                não ser que tenha uma turma avançada, mas me refiro ao aspecto acadêmico da teoria, porque a teoria ensinada
                na escola é a explicação da prática, que não é a teoria em aspecto acadêmico. A escola serve para que o aluno
                desenvolva percepção matemática, isso será imprescindível para os estudos acadêmicos e também é relevante
                para a vida cotidiana.
                <br/><br/>
                Agora a explicação.
                <br/><br/>
                A primeira linha contém o primeiro fator (da esquerda para a direita) e a última coluna contém o segundo fator
                (de cima para baixo). A ordem dos fatores não altera o produto (“a ordem dos tratores não altera o viaduto”),
                mas altera o processo do cálculo quando os fatores são diferentes. O produto começa na primeira coluna (de
                cima para baixo) e segue na última linha (da esquerda para direita).
                <br/><br/>
                A resolução da gelosia começa com multiplicações entre unidades, isto é, cada número de um fator é multiplicado
                individualmente com cada número do outro fator relacionando colunas (primeiro fator) e linhas (segundo fator),
                ou seja, os quadros com barra abaixo de cada número do primeiro fator se relaciona com cada número do
                segundo fator, como na imagem, 5 x 1 depois 5 x 9 depois 2 x 1 depois 2 x 9.
                <br/><br/>
                O resultado de 5 x 9 é 45, e os quadros têm dois lados cortados com barra, o lado esquerdo é a dezena, no caso,
                4, e o lado direito é a unidade, no caso, 5, porque a multiplicação entre unidades pode resultar em alguma dezena
                ou outra unidade. Se o resultado for unidade, como 5 x 1 = 5, pode preencher com 0 no lado esquerdo ou deixar
                vazio, porque é zero à esquerda.
                <br/><br/>
                Em seguida, as somas são feitas nas diagonais passando pelos triângulos de cada sequência diagonal. Há um
                detalhe: para ler o produto final depois de terminar a conta, a direção é o que falei três parágrafos atrás, na
                imagem é 0475, mas a soma deve ser feita na direção contrária começando pela diagonal isolada e unitária de
                baixo, que é o triângulo isolado e unitário que conecta a última linha com a última coluna, na imagem é 5, depois
                5 + 4 + 8 = 17 colocando 7 no produto e “vai um” para a próxima diagonal, e assim prossegue.
                <br/><br/>
                A diagonal isolada de baixo é a unidade do produto. À esquerda, a diagonal inteira com todos os triângulos forma
                a dezena. Depois a centena e assim sucessivamente. Por fim, a diagonal isolada de cima (que é o triângulo isolado
                que conecta a primeira linha e a primeira coluna) é a última casa numérica possível de tal conta, no caso, se
                refere à unidade de milhar e deu zero à esquerda, é uma casa possível, visto que a multiplicação de duas dezenas
                pode resultar em alguma centena ou unidade de milhar. A diagonal isolada de baixo é unitária, porque o valor da
                unidade é um só, já a diagonal isolada de cima, embora pareça unitária, não é, porque pode receber algum “vai
                um” da diagonal anterior.
                <br/><br/>
                Observe, em termos gerais, as possibilidades de produto das multiplicações:
                U x U = U ou D<br/>
                U x D = D ou C<br/>
                D x D = C ou UM<br/>
                D x C = UM ou DM<br/>
                U x C = C ou UM<br/>
                A visualização que a Gelosia proporciona permite ver as possibilidades com facilidade, mas basta somar a
                quantidade de casas numéricas de cada fator, por exemplo, 25 x 19 = 4 casas numéricas possíveis de produto, ou
                seja, UM ou C.<br/>
                146 x 10,2 = 6 casas numéricas possíveis sendo 1 decimal e até 5 inteiras.<br/>
                A única carência da Gelosia é não poder colocar vírgula no quadrado.
                <br/><br/>
                A Treliça com unidades nos fatores é igual à tabuada até 9.
                <br/><br/>
                A Grade se baseia na propriedade distributiva, por exemplo, 25 x 19 pode ser distribuído em:<br/>
                primeiramente, 20 e 5; 10 e 9<br/>
                20 x 10 = 200 | 2 x 1 na grade<br/>
                20 x 9 = 180 | 2 x 9 na grade<br/>
                5 x 10 = 50 | 5 x 1 na grade<br/>
                5 x 9 = 45 | 5 x 9 na grade<br/>
                à esquerda do x, coloquei o primeiro fator, como na imagem<br/>
                200 + 180 + 50 + 45 = 475
                <br/><br/>
                A Gelosia é uma ferramenta visual, artística e estética, e como diz o professor Cláudio Possani, “é elegante, é
                bonitinho”. Esse aspecto visual facilita o aprendizado e o uso, e inspira a estudar mais, porque é animador, e a
                melhor forma de ensinar e aprender é com ânimo, além disso, dá para fazer competição de velocidade sobre
                quem monta os quadros mais rápido e quem executa o cálculo mais rápido, mas o sistema web que fiz serve para
                não precisar montar, porque é chato montar na mão, só precisa digitar a quantidade de casas numéricas de cada
                fator incluindo as decimais se houver, como no exemplo 146 x 10,2, digite 3 nos dois fatores.
                <br/><br/>
                Vou disponibilizar, no link abaixo, imagens com a gelosia em branco e em vários formatos de 1x1 até 6x6
                para imprimir e escrever, mas também é importante montar a gelosia na mão.
                <br/>
                <a href="/gelosias_em_branco_de_1x1_a_6x6.zip" download="gelosias_em_branco_1x1_6x6.zip">zip das imagens</a>
            </h4>
        </div>
        </>
    );
};