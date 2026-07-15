<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'
import IlustracaoClasseObjeto from '@/componentes/ilustracoes/IlustracaoClasseObjeto.vue'

const exemploCliente = `public class Cliente {
    String nome;
    String email;
    int idade;

    public Cliente(String nome, String email, int idade) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }
}

public class ExemploCliente {
    public static void main(String[] args) {
        Cliente cliente1 = new Cliente("Ana", "ana@email.com", 28);
        Cliente cliente2 = new Cliente("Bruno", "bruno@email.com", 35);

        System.out.println(cliente1.nome + " — " + cliente1.email);
        System.out.println(cliente2.nome + " — " + cliente2.email);
    }
}`

const exemploAtualizacao = `Cliente cliente = new Cliente("Ana", "ana@email.com", 28);

cliente.nome = "Ana Silva";
cliente.email = "ana.silva@email.com";

System.out.println(cliente.nome);
System.out.println(cliente.email);`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Orientação a objetos</p>
        <h1 class="apresentacao__titulo">Abstração</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é abstração?</h2>
        <p class="secao__texto">
          Abstração, em orientação a objetos, é agrupar
          <strong>dados</strong> e <strong>comportamentos</strong> que fazem
          sentido ficar juntos — em vez de deixar variáveis e funções soltas
          pelo programa.
        </p>
        <p class="secao__texto">
          Pense em um cliente: nome, e-mail e idade pertencem à mesma pessoa.
          Em código estruturado, isso vira
          <code>cliente1Nome</code>, <code>cliente1Email</code>,
          <code>cliente1Idade</code>… e funções que mexem nessas variáveis
          sem nenhum vínculo explícito. Com abstração, a gente cria um
          “pacote” que representa o cliente de verdade: tudo o que é dele
          mora no mesmo lugar.
        </p>
        <p class="secao__texto">
          Não é esconder o mundo real por completo. É escolher o que importa
          para o programa e modelar isso de forma clara — ignorando o que não
          precisa aparecer agora (endereço completo, histórico de compras,
          preferências…) até chegar a hora de incluir.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Um primeiro exemplo: classe Cliente</h2>
        <p class="secao__texto">
          Em Java, descrevemos o “molde” com uma
          <strong>classe</strong>. Depois criamos
          <strong>objetos</strong> a partir dela — cópias concretas com valores
          próprios. No exemplo abaixo, o
          <strong>construtor</strong> já recebe os dados na hora de criar o
          cliente.
        </p>

        <figure class="secao__figura secao__figura--ilustracao">
          <IlustracaoClasseObjeto />
          <figcaption class="secao__legenda">
            A classe é o molde; cada objeto é um cliente com seus próprios
            dados.
          </figcaption>
        </figure>

        <pre class="bloco-codigo"><code>{{ exemploCliente }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Ana — ana@email.com
Bruno — bruno@email.com</code></pre>

        <p class="secao__texto">
          Perceba a diferença: em vez de
          <code>cliente1Nome</code>, <code>cliente1Email</code>,
          <code>cliente2Nome</code>… temos
          <code>cliente1.nome</code>, <code>cliente1.email</code> e
          <code>cliente2.nome</code>. O ponto (<code>.</code>) diz: “pegue o
          campo dentro deste objeto”. Nome e e-mail da Ana caminham juntos —
          e o mesmo vale para o Bruno.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Atualizando um cliente</h2>
        <p class="secao__texto">
          Depois de criar o objeto, ainda dá para alterar os valores — igual a
          uma variável. A diferença é que agora ela
          <strong>não está solta</strong>: está dentro do contexto do objeto
          <code>cliente</code>.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploAtualizacao }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Ana Silva
ana.silva@email.com</code></pre>

        <p class="secao__texto">
          Ou seja: <code>cliente.nome = "Ana Silva"</code> é a mesma ideia de
          <code>aluno1Nome = "Ana Silva"</code>, só que o dado agora mora
          dentro do objeto <code>cliente</code>, junto com o e-mail e a idade
          daquela pessoa.
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
