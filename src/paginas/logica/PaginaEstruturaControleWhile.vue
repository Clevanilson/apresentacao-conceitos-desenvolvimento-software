<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'
import IlustracaoTrilhoWhile from '@/componentes/ilustracoes/IlustracaoTrilhoWhile.vue'
import IlustracaoTrilhoWhileFluxo from '@/componentes/ilustracoes/IlustracaoTrilhoWhileFluxo.vue'
import IlustracaoTrilhoWhileSaida from '@/componentes/ilustracoes/IlustracaoTrilhoWhileSaida.vue'

const exemploJava = `public class ExemploWhile {
    public static void main(String[] args) {
        int i = 0;

        while (i < 3) {
            System.out.println("Volta número: " + i);
            i++;
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
        <h1 class="apresentacao__titulo">Estrutura de controle: while</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é o while?</h2>
        <p class="secao__texto">
          Como no <code>for</code>, imagine um trilho em
          <strong>círculo</strong>. A diferença é onde fica o sinal: no
          <strong>while</strong>, a pergunta acontece
          <strong>antes</strong> de o trem entrar no circuito.
          <br />Enquanto a condição for verdadeira, o bloco se repete. Se já
          for falsa na primeira chegada, o trem
          <strong>nem entra</strong> — zero voltas.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoWhile />
          <figcaption class="secao__legenda">
            O sinal fica na entrada: só quem recebe “sim” entra no loop do
            <code>while</code>.
          </figcaption>
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Preparar, perguntar, atualizar</h2>
        <p class="secao__texto">
          Diferente do <code>for</code>, o <code>while</code> não traz
          iniciar e incrementar no cabeçalho. Você cuida disso
          <strong>fora</strong> e <strong>dentro</strong> do bloco:
        </p>

        <ul class="secao__lista">
          <li>
            <strong>preparar</strong> — contador (ou estado) antes do loop
            (ex.: <code>int i = 0</code>)
          </li>
          <li>
            <strong>condição</strong> — o sinal na entrada
            (ex.: <code>while (i &lt; 3)</code>)
          </li>
          <li>
            <strong>atualizar</strong> — mudar o estado dentro do bloco
            (ex.: <code>i++</code>), senão o loop não termina
          </li>
        </ul>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoWhileFluxo />
          <figcaption class="secao__legenda">
            Prepara uma vez; depois: condição → bloco → atualiza → de novo.
          </figcaption>
        </figure>

        <p class="secao__texto">
          Veja um exemplo em Java. Cole a classe em
          <code>ExemploWhile.java</code> e execute: o contador
          <code>i</code> vai de 0 até 2 (três voltas), como no
          <code>for</code>.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploJava }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Volta número: 0
Volta número: 1
Volta número: 2
Fim do percurso.</code></pre>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Quando o while não gira</h2>
        <p class="secao__texto">
          Se a condição já for <code>false</code> na primeira verificação, o
          trem <strong>pula</strong> o circuito inteiro e segue o programa.
          O bloco entre <code>{ }</code> não roda nenhuma vez.
        </p>
        <p class="secao__texto">
          No exemplo, se <code>i</code> começasse em
          <code>3</code>, <code>i &lt; 3</code> seria falso logo de cara —
          só apareceria “Fim do percurso.”.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoWhileSaida />
          <figcaption class="secao__legenda">
            Sinal apagado (<code>false</code>) na entrada: nenhuma volta no
            <code>while</code>.
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
