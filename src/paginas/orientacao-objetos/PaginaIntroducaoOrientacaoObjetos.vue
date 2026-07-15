<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'
import IlustracaoDadosSoltos from '@/componentes/ilustracoes/IlustracaoDadosSoltos.vue'

const exemploEstruturado = `public class ExemploAlunos {
    public static void main(String[] args) {
        String aluno1Nome = "Lucas";
        float aluno1Nota = 8.5f;

        String aluno2Nome = "Marina";
        float aluno2Nota = 7.0f;

        String aluno3Nome = "Pedro";
        float aluno3Nota = 9.2f;

        System.out.println(aluno1Nome + " tirou " + aluno1Nota);
        System.out.println(aluno2Nome + " tirou " + aluno2Nota);
        System.out.println(aluno3Nome + " tirou " + aluno3Nota);
    }
}`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Orientação a objetos</p>
        <h1 class="apresentacao__titulo">Introdução à orientação a objetos</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">Até aqui: dados um ao lado do outro</h2>
        <p class="secao__texto">
          Na programação mais estruturada, a gente guarda as informações em
          variáveis soltas. Se precisamos de alguns alunos, o código acaba
          parecendo uma lista de caixas com nomes parecidos:
          <code>aluno1Nome</code>, <code>aluno1Nota</code>,
          <code>aluno2Nome</code>, <code>aluno2Nota</code>… e por aí vai.
        </p>
        <p class="secao__texto">
          Funciona, e é um ótimo começo. Mas olha como fica rápido:
        </p>

        <pre class="bloco-codigo"><code>{{ exemploEstruturado }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Lucas tirou 8.5
Marina tirou 7.0
Pedro tirou 9.2</code></pre>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">O problema dos dados soltos</h2>
        <p class="secao__texto">
          O nome e a nota de Lucas pertencem à mesma pessoa — mas no código
          eles são duas variáveis independentes. Nada “amarra” de verdade o
          <code>aluno1Nome</code> ao <code>aluno1Nota</code>, além da nossa
          disciplina de lembrar o prefixo
          <code>aluno1</code>.
        </p>
        <p class="secao__texto">
          Com mais alunos, mais campos (idade, turma, e-mail…) o programa vira
          uma gaveta bagunçada: fácil trocar uma nota pelo nome errado, difícil
          de ler e chato de crescer.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoDadosSoltos />
          <figcaption class="secao__legenda">
            Cada variável é uma caixa; as caixas do mesmo aluno não ficam
            juntas de forma natural.
          </figcaption>
        </figure>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">A ideia da orientação a objetos</h2>
        <p class="secao__texto">
          A orientação a objetos surgiu para organizar melhor isso. Em vez de
          espalhar tudo, a gente junta o que faz sentido ficar junto: os
          <strong>dados</strong> de uma coisa e os
          <strong>comportamentos</strong> que a ela se relacionam.
        </p>
        <p class="secao__texto">
          Em resumo: é uma maneira de pensar o programa como
          <strong>coisas do mundo real</strong> (um aluno, um cliente, um
          produto), cada uma com suas informações e com as ações que fazem
          sentido para ela — tudo no mesmo “pacote”.
        </p>
        <p class="secao__texto">
          Mais adiante veremos princípios que ajudam a aplicar essa ideia com
          mais cuidado. Por enquanto, o ponto central é simples:
          <strong>organizar</strong> o que pertence junto.
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
