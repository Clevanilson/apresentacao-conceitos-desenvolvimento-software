<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'
import IlustracaoTrilhoIfElse from '@/componentes/ilustracoes/IlustracaoTrilhoIfElse.vue'
import IlustracaoTrilhoCaminhoIf from '@/componentes/ilustracoes/IlustracaoTrilhoCaminhoIf.vue'
import IlustracaoTrilhoCaminhoElse from '@/componentes/ilustracoes/IlustracaoTrilhoCaminhoElse.vue'

const exemploJava = `public class ExemploElse {
    public static void main(String[] args) {
        int notaDoAluno = 5;

        if (notaDoAluno >= 7) {
            System.out.println("Aluno aprovado!");
        } else {
            System.out.println("Aluno em recuperação.");
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
        <h1 class="apresentacao__titulo">Estrutura de controle: else</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é o else?</h2>
        <p class="secao__texto">
          No <code>if</code>, o trem só tem um desvio especial: se a condição
          for “sim”, ele entra; se for “não”, segue em frente sem caminho
          próprio.
          <br />Com o <strong>else</strong>, a junção ganha
          <strong>dois trilhos</strong>: um para o verdadeiro e outro para o
          falso. O trem
          <strong>sempre</strong> escolhe um dos dois — nunca os dois ao mesmo
          tempo.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoIfElse />
          <figcaption class="secao__legenda">
            O sinal decide: caminho de cima é o <code>if</code>; o de baixo é o
            <code>else</code>.
          </figcaption>
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Quando a condição é verdadeira</h2>
        <p class="secao__texto">
          Se a condição der <code>true</code>, o trem entra no trilho do
          <code>if</code>. O bloco do <code>else</code> fica fechado: não é
          executado.
        </p>

        <ul class="secao__lista">
          <li>
            escrevemos <code>if (…)</code> e, logo depois,
            <code>else { … }</code>
          </li>
          <li>só um dos blocos roda por vez</li>
          <li>
            o <code>else</code> não tem condição própria — ele cobre o caso
            “senão”
          </li>
        </ul>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoCaminhoIf />
          <figcaption class="secao__legenda">
            Sinal verde (<code>true</code>): executa o <code>if</code>; o
            <code>else</code> fica de fora.
          </figcaption>
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Quando a condição é falsa</h2>
        <p class="secao__texto">
          Se a condição der <code>false</code>, o trem
          <strong>não entra</strong> no <code>if</code> — ele troca para o
          trilho do <code>else</code> e executa aquele bloco.
        </p>
        <p class="secao__texto">
          Assim, em vez de só “pular” o <code>if</code>, o programa tem uma
          resposta clara para o caso contrário.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoCaminhoElse />
          <figcaption class="secao__legenda">
            Sinal apagado (<code>false</code>): o caminho ativo é o
            <code>else</code>.
          </figcaption>
        </figure>

        <p class="secao__texto">
          Veja um exemplo em Java. Cole a classe em
          <code>ExemploElse.java</code> e execute: a nota é 5, então a condição
          <code>notaDoAluno &gt;= 7</code> é falsa e o
          <code>else</code> roda.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploJava }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Aluno em recuperação.
Fim da verificação.</code></pre>
      </section>
    </article>
  </ContainerBase>
</template>

<style scoped>
.secao__figura--ilustracao {
  width: 100%;
}
</style>
