<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'
import IlustracaoTrilhoLoop from '@/componentes/ilustracoes/IlustracaoTrilhoLoop.vue'
import IlustracaoTrilhoForPartes from '@/componentes/ilustracoes/IlustracaoTrilhoForPartes.vue'
import IlustracaoTrilhoForVoltas from '@/componentes/ilustracoes/IlustracaoTrilhoForVoltas.vue'

const exemploJava = `public class ExemploFor {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            System.out.println("Volta número: " + i);
        }

        System.out.println("Fim do percurso.");
    }
}`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Lógica de programação</p>
        <h1 class="apresentacao__titulo">Estrutura de controle: for</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é o for?</h2>
        <p class="secao__texto">
          Imagine um trilho em
          <strong>círculo</strong>: o trem passa pelo mesmo caminho várias
          vezes — volta 1, volta 2, volta 3… — até o sinal decidir que já
          basta.
          <br />Em programação, esse percurso repetido se chama
          <strong>for</strong>: repetimos um bloco de código um número
          controlado de vezes.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoLoop />
          <figcaption class="secao__legenda">
            O loop é o trilho circular; cada volta é uma repetição do
            <code>for</code>.
          </figcaption>
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">As três estações do for</h2>
        <p class="secao__texto">
          No cabeçalho do <code>for</code> há três partes, como estações do
          percurso. Elas ficam entre parênteses, separadas por
          <code>;</code>:
        </p>

        <ul class="secao__lista">
          <li>
            <strong>iniciar</strong> — coloca o contador no trilho
            (ex.: <code>int i = 0</code>)
          </li>
          <li>
            <strong>condição</strong> — o sinal pergunta se ainda pode girar
            (ex.: <code>i &lt; 3</code>)
          </li>
          <li>
            <strong>incrementar</strong> — avançar o contador a cada volta
            (ex.: <code>i++</code>)
          </li>
        </ul>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoForPartes />
          <figcaption class="secao__legenda">
            Inicia uma vez; depois: condição → bloco → incremento → de novo.
          </figcaption>
        </figure>

        <p class="secao__texto">
          Veja um exemplo em Java. Cole a classe em
          <code>ExemploFor.java</code> e execute: o contador
          <code>i</code> vai de 0 até 2 (três voltas).
        </p>

        <pre class="bloco-codigo"><code>{{ exemploJava }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Volta número: 0
Volta número: 1
Volta número: 2
Fim do percurso.</code></pre>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Quando o trem sai do loop</h2>
        <p class="secao__texto">
          Depois de cada incremento, o trem volta ao sinal. Se a condição
          der <code>false</code>, o desvio para o loop fecha: o trem
          <strong>sai</strong> e segue o programa nas linhas seguintes.
        </p>
        <p class="secao__texto">
          No exemplo, quando <code>i</code> chega a
          <code>3</code>, <code>i &lt; 3</code> é falso — as três voltas já
          terminaram e aparece “Fim do percurso.”.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoForVoltas />
          <figcaption class="secao__legenda">
            Sinal apagado (<code>false</code>): o trem deixa o circuito e
            continua o programa.
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
