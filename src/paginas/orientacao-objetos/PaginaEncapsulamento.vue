<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'

const exemploProblema = `Cliente cliente = new Cliente("Ana");

cliente.nome = "";

System.out.println("Nome: [" + cliente.nome + "]");`

const exemploEncapsulado = `public class Cliente {
    private String nome;

    public Cliente(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        if (nome == null || nome.isBlank()) {
            System.out.println("Nome inválido, o valor não pode ser atualizado");
            return;
        }

        this.nome = nome;
    }
}`

const exemploUso = `Cliente cliente = new Cliente("Ana");

cliente.setNome("");
System.out.println(cliente.getNome());

cliente.setNome("Ana Silva");
System.out.println(cliente.getNome());`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Orientação a objetos</p>
        <h1 class="apresentacao__titulo">Encapsulamento</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é encapsulamento?</h2>
        <p class="secao__texto">
          Encapsulamento, em orientação a objetos, é
          <strong>proteger o estado do objeto</strong> — impedir que partes de
          fora do programa alterem os dados de qualquer jeito e deixem o objeto
          em um estado inválido.
        </p>
        <p class="secao__texto">
          Um objeto não deve ficar com estado inválido. Se a regra do sistema
          diz que um cliente <strong>não pode ter o nome vazio</strong>, o
          código precisa garantir isso. Sem encapsulamento, qualquer trecho do
          programa que usa o objeto pode “furar” essa regra.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">O problema: acesso direto ao estado</h2>
        <p class="secao__texto">
          Na abstração, o nome passou a morar dentro do objeto
          <code>Cliente</code>. Mas, do jeito que estava, ainda dá para
          acessar o campo direto:
          <code>cliente.nome = ""</code>. O nome fica vazio — e o objeto
          entra em um estado que a regra do negócio não permite.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploProblema }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Nome: []</code></pre>

        <p class="secao__texto">
          Nada impede essa atribuição. A regra “nome não pode ser vazio”
          existe só na nossa cabeça — o código não a aplica.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">A solução: esconder e controlar o acesso</h2>
        <p class="secao__texto">
          Encapsulamento resolve isso: a gente
          <strong>não deixa quem está de fora</strong> — ou seja, a parte do
          programa que usa o objeto <code>Cliente</code> — acessar o nome
          diretamente.
        </p>
        <p class="secao__texto">
          Com <strong>modificadores de acesso</strong> (como
          <code>private</code>), o campo fica escondido. Para ler ou alterar o
          valor, usamos <strong>métodos</strong>: um para consultar (
          <code>getNome</code>) e outro para definir (
          <code>setNome</code>). No <code>set</code>, a gente valida antes de
          atualizar — e só aceita um nome válido.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploEncapsulado }}</code></pre>

        <p class="secao__texto">
          Se o nome for inválido (nulo ou em branco), o método avisa no
          console e <strong>retorna sem alterar</strong> o valor. Não usamos
          exceções aqui de propósito — fica mais fácil acompanhar o fluxo:
          “tentei atualizar → não deu → o nome antigo continua lá”.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Usando os métodos de acesso</h2>
        <p class="secao__texto">
          Agora, em vez de <code>cliente.nome = ""</code>, quem usa o objeto
          passa pelo <code>setNome</code>. A tentativa inválida é rejeitada; a
          válida atualiza o estado.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploUso }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Nome inválido, o valor não pode ser atualizado
Ana
Ana Silva</code></pre>

        <p class="secao__texto">
          Perceba: na primeira tentativa o nome permanece
          <code>"Ana"</code>. Só depois, com um valor válido, ele vira
          <code>"Ana Silva"</code>. O objeto protege o próprio estado — e a
          regra do sistema deixa de depender só de quem usa o cliente.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>
