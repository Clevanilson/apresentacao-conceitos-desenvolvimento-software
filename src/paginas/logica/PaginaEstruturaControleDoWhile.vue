<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'
import IlustracaoTrilhoDoWhile from '@/componentes/ilustracoes/IlustracaoTrilhoDoWhile.vue'
import IlustracaoTrilhoDoWhileFluxo from '@/componentes/ilustracoes/IlustracaoTrilhoDoWhileFluxo.vue'
import IlustracaoTrilhoDoWhileUmaVez from '@/componentes/ilustracoes/IlustracaoTrilhoDoWhileUmaVez.vue'

const exemploJava = `public class ExemploDoWhile {
    public static void main(String[] args) {
        int i = 0;

        do {
            System.out.println("Volta número: " + i);
            i++;
        } while (i < 3);

        System.out.println("Fim do percurso.");
    }
}`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Lógica de programação</p>
        <h1 class="apresentacao__titulo">Estrutura de controle: do-while</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é o do-while?</h2>
        <p class="secao__texto">
          No <code>while</code>, o sinal fica na
          <strong>entrada</strong>. No <strong>do-while</strong>, o trem
          <strong>entra primeiro</strong> no bloco e só depois encontra o
          sinal, no fim da volta.
          <br />Por isso o bloco roda
          <strong>pelo menos uma vez</strong> — mesmo que a condição já vá
          ser falsa em seguida.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoDoWhile />
          <figcaption class="secao__legenda">
            O sinal fica na saída: o bloco acontece; só então a pergunta
            decide se há outra volta.
          </figcaption>
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Primeiro faz, depois pergunta</h2>
        <p class="secao__texto">
          A ordem do <code>do-while</code> é o inverso do
          <code>while</code> na verificação:
        </p>

        <ul class="secao__lista">
          <li>
            <strong>do</strong> — executa o bloco entre
            <code>{ }</code>
          </li>
          <li>
            <strong>while</strong> — avalia a condição
            <strong>depois</strong> (ex.: <code>while (i &lt; 3)</code>)
          </li>
          <li>
            se for <code>true</code>, volta ao
            <code>do</code>; se for <code>false</code>, sai
          </li>
        </ul>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoDoWhileFluxo />
          <figcaption class="secao__legenda">
            Bloco → condição → (talvez) bloco de novo. Note o
            <code>;</code> depois do <code>while (…)</code>.
          </figcaption>
        </figure>

        <p class="secao__texto">
          Veja um exemplo em Java. Cole a classe em
          <code>ExemploDoWhile.java</code> e execute: três voltas, como no
          <code>while</code> — mas a estrutura é
          <code>do { … } while (…);</code>.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploJava }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Volta número: 0
Volta número: 1
Volta número: 2
Fim do percurso.</code></pre>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Pelo menos uma volta</h2>
        <p class="secao__texto">
          Se a condição for <code>false</code> depois da primeira
          execução, o trem <strong>não dá outra volta</strong> — mas o
          bloco <strong>já rodou</strong> uma vez. Isso é o que distingue o
          <code>do-while</code> do <code>while</code>.
        </p>
        <p class="secao__texto">
          No exemplo, se <code>i</code> começasse em
          <code>3</code>, ainda assim veríamos “Volta número: 3” uma vez;
          depois <code>i++</code> e <code>i &lt; 3</code> falso — fim do
          loop.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoDoWhileUmaVez />
          <figcaption class="secao__legenda">
            Uma volta garantida; sinal <code>false</code> só impede a
            próxima.
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
