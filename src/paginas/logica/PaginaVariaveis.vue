<script setup lang="ts">
import ContainerBase from "@/componentes/ContainerBase.vue";

const exemploJava = `public class ExemploVariaveis {
    public static void main(String[] args) {
        String nomeDoAluno = "Lucas";
        int idadeDoAluno = 15;
        float notaDoAluno = 8.75f;
        boolean alunoEstaAprovado = true;

        System.out.println("Nome: " + nomeDoAluno);
        System.out.println("Idade: " + idadeDoAluno);
        System.out.println("Nota: " + notaDoAluno);
        System.out.println("Aprovado: " + alunoEstaAprovado);
    }
}`;
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Lógica de programação</p>
        <h1 class="apresentacao__titulo">Variáveis</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é uma variável?</h2>
        <p class="secao__texto">
          Imagine uma caixa com um rótulo na frente. Dentro dela você guarda uma
          informação — um nome, uma idade, uma nota — e o rótulo é o nome que
          usamos para encontrar essa informação depois. <br />Em programação,
          essa caixa se chama <strong>variável</strong>: um espaço na memória do
          computador onde guardamos dados e que podemos recuperar ou alterar a
          qualquer momento pelo nome que demos a ela.
        </p>

        <figure class="secao__figura secao__figura--caixa">
          <img
            src="/variaveis-1.png"
            alt="Ilustração de uma caixa representando uma variável que guarda dados"
            class="secao__imagem secao__imagem--caixa"
          />
          <figcaption class="secao__legenda">
            A caixa é o espaço de armazenamento; o rótulo é o nome da variável.
          </figcaption>
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Tipos de variáveis</h2>
        <p class="secao__texto">
          Em Java, cada caixa aceita apenas um tipo de dado. É como um
          quebra-cabeça: a peça só encaixa se o formato bater com o encaixe. Por
          enquanto, vamos trabalhar com quatro tipos essenciais:
        </p>

        <ul class="secao__lista">
          <li><code>String</code> — textos (ex.: nomes)</li>
          <li><code>int</code> — números inteiros (ex.: idade)</li>
          <li><code>float</code> — números decimais (ex.: notas)</li>
          <li>
            <code>boolean</code> — verdadeiro ou falso (ex.: aprovado ou não)
          </li>
        </ul>

        <figure class="secao__figura">
          <img
            src="/variaveis-2.png"
            alt="Analogia do quebra-cabeça: cada tipo de variável (String, int, float, boolean) é uma peça com formato próprio"
            class="secao__imagem"
          />
        </figure>

        <p class="secao__texto">
          Veja um exemplo completo em Java. Você pode colar essa classe em um
          arquivo
          <code>ExemploVariaveis.java</code> e executar: o console mostra o
          valor guardado em cada variável.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploJava }}</code></pre>

        <p class="secao__texto secao__texto--saida">
          Saída esperada no console:
        </p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Nome: Lucas
Idade: 15
Nota: 8.75
Aprovado: true</code></pre>

        <figure class="secao__figura">
          <img
            src="/variaveis-3.png"
            alt="Resumo dos quatro tipos: String, int, float e boolean com exemplos nomeDoAluno, idadeDoAluno, notaDoAluno e alunoEstaAprovado"
            class="secao__imagem"
          />
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Nomes de variáveis</h2>
        <p class="secao__texto">
          Nem qualquer texto serve como nome. Em Java, o nome de uma variável:
        </p>
        <ul class="secao__lista">
          <li>pode ter letras, números e o caractere <code>_</code></li>
          <li>não pode começar com número</li>
          <li>não pode ter espaços</li>
          <li>
            não pode ser uma palavra reservada (como <code>class</code>,
            <code>int</code>, <code>if</code>)
          </li>
        </ul>

        <p class="secao__texto">
          Um padrão bem comum — e fácil de lembrar — é o
          <strong>camelCase</strong>: a primeira palavra começa em minúscula e
          as seguintes começam com maiúscula, tudo colado, sem espaços. Por isso
          escrevemos <code>nomeDoAluno</code> e
          <code>alunoEstaAprovado</code> em vez de <code>nome_do_aluno</code> ou
          <code>Nome Do Aluno</code>.
        </p>
        <p class="secao__texto">
          Pense assim: o nome deve ler como uma frase curta, mas sem espaços — a
          “corcova” das letras maiúsculas marca onde cada palavra começa.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>

<style scoped>
.secao__figura--caixa {
  padding: var(--espacamento-md);
  background: var(--cor-destaque-suave);
  border-radius: var(--raio);
}

.secao__imagem--caixa {
  max-width: 220px;
}
</style>
