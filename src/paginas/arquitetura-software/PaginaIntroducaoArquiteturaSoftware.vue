<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Arquitetura de software (MVC)</p>
        <h1 class="apresentacao__titulo">Introdução</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é arquitetura de software?</h2>
        <p class="secao__texto">
          Arquitetura de software é sobre o
          <strong>design do código</strong>: como organizamos o programa
          para que ele faça sentido, seja fácil de ler e de evoluir com o
          tempo.
        </p>
        <p class="secao__texto">
          Não é só “fazer funcionar”. É pensar
          <strong>onde cada parte do código deve ficar</strong> e como as
          partes conversam entre si — para o projeto não virar uma bagunça
          quando crescer.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Por que isso importa?</h2>
        <p class="secao__texto">
          Um código bem organizado fica mais simples de:
        </p>
        <ul class="secao__lista">
          <li>
            <strong>adicionar funcionalidades novas</strong> sem quebrar o
            que já existe;
          </li>
          <li>
            <strong>corrigir problemas antigos</strong> sem caçar a solução
            em vários lugares ao mesmo tempo;
          </li>
          <li>
            <strong>entender o sistema</strong> quando outra pessoa — ou você
            mesmo, meses depois — precisar mexer nele.
          </li>
        </ul>
        <p class="secao__texto">
          Em outras palavras: arquitetura boa é aquela que deixa o código
          <strong>manutenível</strong> — fácil de crescer e de cuidar.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">O padrão MVC</h2>
        <p class="secao__texto">
          Uma forma comum de organizar um software é o
          <strong>MVC</strong> — Model, View e Controller. A ideia é
          separar o programa em três papéis:
        </p>
        <ul class="secao__lista">
          <li>
            <strong>Model</strong> — os dados e as regras do negócio;
          </li>
          <li>
            <strong>View</strong> — o que a pessoa vê e com o que ela
            interage;
          </li>
          <li>
            <strong>Controller</strong> — o intermediário que recebe o
            pedido da tela e decide o que fazer.
          </li>
        </ul>
        <p class="secao__texto">
          Nos próximos tópicos vamos olhar cada uma dessas partes com mais
          calma. Por enquanto, o ponto central é simples:
          <strong>organizar o código</strong> para que cada pedaço tenha um
          trabalho claro.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Nosso exemplo: venda de casas</h2>
        <p class="secao__texto">
          Para tornar o MVC concreto, vamos montar um
          <strong>sisteminha de venda de casas</strong>. Nada de tela
          sofisticada — só o suficiente para enxergar os três papéis
          trabalhando juntos.
        </p>
        <p class="secao__texto">
          O Model cuida de <strong>cliente</strong>, <strong>casa</strong> e
          <strong>contrato</strong>, com regras simples (nome não pode ser
          vazio, valor não pode ser negativo…). A View só
          <strong>escreve no console</strong>. O Controller recebe o pedido
          de “vender”, usa o Model e pede à View para mostrar o resultado.
        </p>
        <p class="secao__texto">
          Assim fica fácil perceber: cada pasta / cada classe tem um
          <strong>trabalho só</strong> — e o sistema inteiro fica mais fácil
          de entender.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>
