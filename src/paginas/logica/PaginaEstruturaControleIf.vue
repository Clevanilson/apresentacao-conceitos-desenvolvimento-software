<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'
import IlustracaoTrilhoJuncao from '@/componentes/ilustracoes/IlustracaoTrilhoJuncao.vue'
import IlustracaoTrilhoVerdadeiro from '@/componentes/ilustracoes/IlustracaoTrilhoVerdadeiro.vue'
import IlustracaoTrilhoFalso from '@/componentes/ilustracoes/IlustracaoTrilhoFalso.vue'

const exemploJava = `public class ExemploIf {
    public static void main(String[] args) {
        int notaDoAluno = 8;

        if (notaDoAluno >= 7) {
            System.out.println("Aluno aprovado!");
        }

        System.out.println("Fim da verificação.");
    }
}`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Lógica de programação</p>
        <h1 class="apresentacao__titulo">Estrutura de controle: if</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é o if?</h2>
        <p class="secao__texto">
          Imagine um trem em um trilho. Em algum ponto aparece um
          <strong>desvio</strong>: um sinal pergunta algo. Se a resposta for
          “sim”, o trem entra nesse caminho. Se for “não”, ele segue em frente.
          <br />Em programação, esse desvio se chama
          <strong>if</strong>: avaliamos uma condição e só executamos um bloco
          de código quando ela for verdadeira.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoJuncao />
          <figcaption class="secao__legenda">
            O sinal é a condição; os trilhos são os caminhos possíveis do
            programa.
          </figcaption>
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Quando a condição é verdadeira</h2>
        <p class="secao__texto">
          Se a condição der <code>true</code>, o trem entra no desvio: o
          computador executa tudo que está entre as chaves
          <code>{ }</code> do <code>if</code>.
        </p>

        <ul class="secao__lista">
          <li>a condição fica entre parênteses: <code>if (…)</code></li>
          <li>o bloco a executar fica entre chaves: <code>{ … }</code></li>
          <li>
            use comparações como <code>&gt;=</code>, <code>==</code>,
            <code>!=</code>
          </li>
        </ul>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoVerdadeiro />
          <figcaption class="secao__legenda">
            Sinal verde (<code>true</code>): o trem entra no bloco do
            <code>if</code>.
          </figcaption>
        </figure>

        <p class="secao__texto">
          Veja um exemplo em Java. Cole a classe em
          <code>ExemploIf.java</code> e execute: a nota é 8, então a condição
          <code>notaDoAluno &gt;= 7</code> é verdadeira.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploJava }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Aluno aprovado!
Fim da verificação.</code></pre>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Quando a condição é falsa</h2>
        <p class="secao__texto">
          Se a condição der <code>false</code>, o trem
          <strong>não entra</strong> no desvio: o bloco do
          <code>if</code> é ignorado e o programa continua nas linhas seguintes.
        </p>
        <p class="secao__texto">
          No exemplo anterior, se a nota fosse <code>5</code>, a mensagem
          “Aluno aprovado!” não apareceria — só “Fim da verificação.”.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoFalso />
          <figcaption class="secao__legenda">
            Sinal apagado (<code>false</code>): o bloco do
            <code>if</code> fica de fora do percurso.
          </figcaption>
        </figure>
      </section>
    </article>
  </ContainerBase>
</template>

<style scoped>
.secao__figura--ilustracao {
  width: 100%;
}
</style>
