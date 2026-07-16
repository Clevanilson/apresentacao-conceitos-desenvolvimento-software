<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'
import IlustracaoTrilhoSwitch from '@/componentes/ilustracoes/IlustracaoTrilhoSwitch.vue'
import IlustracaoTrilhoIfElse from '@/componentes/ilustracoes/IlustracaoTrilhoIfElse.vue'

const exemploIf = `public class ExemploComIf {
    public static void main(String[] args) {
        int diaDaSemana = 3;

        if (diaDaSemana == 1) {
            System.out.println("Segunda-feira");
        } else if (diaDaSemana == 2) {
            System.out.println("Terça-feira");
        } else if (diaDaSemana == 3) {
            System.out.println("Quarta-feira");
        } else {
            System.out.println("Outro dia");
        }
    }
}`

const exemploSwitch = `public class ExemploSwitch {
    public static void main(String[] args) {
        int diaDaSemana = 3;

        switch (diaDaSemana) {
            case 1:
                System.out.println("Segunda-feira");
                break;
            case 2:
                System.out.println("Terça-feira");
                break;
            case 3:
                System.out.println("Quarta-feira");
                break;
            default:
                System.out.println("Outro dia");
                break;
        }
    }
}`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Lógica de programação</p>
        <h1 class="apresentacao__titulo">Estrutura de controle: switch</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é o switch?</h2>
        <p class="secao__texto">
          Imagine a junção do trilho com
          <strong>vários desvios</strong> ao mesmo tempo. O sinal olha um
          <strong>valor</strong> e escolhe qual caminho o trem deve seguir:
          caminho 1, caminho 2, caminho 3… ou o caminho “de reserva”.
          <br />Em programação, isso se chama <strong>switch</strong>:
          comparamos um valor com várias opções e executamos o bloco que
          combina.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoSwitch />
          <figcaption class="secao__legenda">
            O valor decide o trilho; cada <code>case</code> é um caminho
            possível.
          </figcaption>
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">É o if com outro nome</h2>
        <p class="secao__texto">
          Aqui vai a comparação importante: o
          <code>switch</code> é, na prática,
          <strong>o mesmo raciocínio do <code>if</code></strong> — só muda a
          forma de escrever.
          <br />Uma sequência de <code>if</code> / <code>else if</code> /
          <code>else</code> perguntando “é igual a isto? senão, é igual
          àquilo?” faz exatamente o que o <code>switch</code> faz com
          <code>case</code> e <code>default</code>.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoTrilhoIfElse />
          <figcaption class="secao__legenda">
            Com <code>if</code> / <code>else</code> você também escolhe um
            caminho — o <code>switch</code> só organiza isso para vários
            valores iguais.
          </figcaption>
        </figure>

        <ul class="secao__lista">
          <li>
            <code>switch (valor)</code> ↔ valor que o <code>if</code>
            compararia
          </li>
          <li>
            <code>case X:</code> ↔ <code>if (valor == X)</code>
          </li>
          <li>
            <code>default:</code> ↔ o <code>else</code> final
          </li>
          <li>
            <code>break;</code> — para o trem no caminho certo (sem
            “escorregar” para o próximo <code>case</code>)
          </li>
        </ul>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Lado a lado: if e switch</h2>
        <p class="secao__texto">
          Os dois programas abaixo fazem a
          <strong>mesma coisa</strong>. No primeiro usamos
          <code>if</code>; no segundo, <code>switch</code>. O dia é
          <code>3</code>, então a saída é “Quarta-feira”.
        </p>

        <p class="secao__texto">Com <code>if</code> / <code>else if</code>:</p>
        <pre class="bloco-codigo"><code>{{ exemploIf }}</code></pre>

        <p class="secao__texto">Com <code>switch</code>:</p>
        <pre class="bloco-codigo"><code>{{ exemploSwitch }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada nos dois:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Quarta-feira</code></pre>

        <p class="secao__texto">
          Resumo: quando a pergunta é “este valor é igual a A, B ou C?”, o
          <code>switch</code> é só um jeito mais organizado de escrever o
          mesmo <code>if</code>.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>

<style scoped>
.secao__figura--ilustracao {
  width: 100%;
}
</style>
