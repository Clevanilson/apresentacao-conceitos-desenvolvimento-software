<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'

const exemploCliente = `public class Cliente {
    private String nome;

    public Cliente(String nome) {
        this.setNome(nome);
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        if (nome == null || nome.isBlank()) {
            throw new IllegalArgumentException("Nome inválido: não pode ser vazio");
        }

        this.nome = nome;
    }
}`

const exemploCasa = `public class Casa {
    private int numero;
    private double valor;

    public Casa(int numero, double valor) {
        this.setNumero(numero);
        this.setValor(valor);
    }

    public int getNumero() {
        return this.numero;
    }

    public void setNumero(int numero) {
        if (numero <= 0) {
            throw new IllegalArgumentException(
                "Número inválido: precisa ser maior que zero"
            );
        }

        this.numero = numero;
    }

    public double getValor() {
        return this.valor;
    }

    public void setValor(double valor) {
        if (valor < 0) {
            throw new IllegalArgumentException(
                "Valor inválido: não pode ser menor que zero"
            );
        }

        this.valor = valor;
    }
}`

const exemploContrato = `public class Contrato {
    private String nomeCliente;
    private int numeroCasa;
    private double valorCasa;

    public Contrato(Cliente cliente, Casa casa) {
        this.nomeCliente = cliente.getNome();
        this.numeroCasa = casa.getNumero();
        this.valorCasa = casa.getValor();
    }

    public String getNomeCliente() {
        return this.nomeCliente;
    }

    public int getNumeroCasa() {
        return this.numeroCasa;
    }

    public double getValorCasa() {
        return this.valorCasa;
    }
}`

const exemploUso = `Cliente cliente = new Cliente("Ana Silva");
Casa casa = new Casa(42, 350000.0);
Contrato contrato = new Contrato(cliente, casa);

System.out.println(contrato.getNomeCliente());
System.out.println(contrato.getNumeroCasa());
System.out.println(contrato.getValorCasa());`

const exemploExcecao = `Cliente cliente = new Cliente("");`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Arquitetura de software (MVC)</p>
        <h1 class="apresentacao__titulo">Model</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é o Model?</h2>
        <p class="secao__texto">
          No MVC, o <strong>Model</strong> é a parte que guarda os
          <strong>dados</strong> e as <strong>regras do negócio</strong>.
          Ele não se preocupa com botão, tela ou mensagem bonita — o papel
          dele é representar o mundo do problema e garantir que as regras
          sejam respeitadas.
        </p>
        <p class="secao__texto">
          No nosso sisteminha de venda de casas, o Model responde perguntas
          como: “o que é um cliente?”, “o que é uma casa?”, “o que entra em
          um contrato?” — e ainda barra valores inválidos.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Um desvio rápido: exceções</h2>
        <p class="secao__texto">
          Até aqui, quando algo ia errado, a gente avisava no
          <code>System.out</code> e seguia. O problema é que o objeto pode
          ficar pela metade — por exemplo, um
          <code>Cliente</code> sem nome de verdade.
        </p>
        <p class="secao__texto">
          Uma <strong>exceção</strong> é o jeito do Java dizer:
          <strong>“isso não deu certo, pare o fluxo normal”</strong>. Em vez
          de só imprimir e continuar, o método
          <strong>lança</strong> (<code>throw</code>) um erro. Quem chamou
          o método precisa lidar com isso — ou o programa interrompe.
        </p>
        <p class="secao__texto">
          Neste Model, usamos
          <code>IllegalArgumentException</code>: “o argumento que você passou
          não é válido para esta regra”. O Controller, mais adiante, vai
          <strong>pegar</strong> essa exceção e decidir o que mostrar.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Cliente: nome não pode ser vazio</h2>
        <p class="secao__texto">
          O cliente tem um nome. Pela regra do sistema, esse nome
          <strong>não pode ficar vazio</strong>. Usamos encapsulamento: o
          campo fica <code>private</code> e o <code>setNome</code> valida
          antes de atualizar. Se a regra falhar, <strong>lança
          exceção</strong> — e o cliente inválido nem chega a existir.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploCliente }}</code></pre>

        <p class="secao__texto">
          Com <code>throw</code>, não há “cliente sem nome” escondido no
          sistema. Ou o nome é válido, ou a criação falha de forma
          explícita.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Casa: número e valor</h2>
        <p class="secao__texto">
          A casa tem <strong>número</strong> e <strong>valor</strong>.
          Regras simples: o número precisa ser maior que zero; o valor
          <strong>não pode ser menor que zero</strong>. De novo: dado
          inválido vira exceção.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploCasa }}</code></pre>

        <p class="secao__texto">
          Quem usa a casa não “fura” a regra com atribuição direta. Só
          passa pelo <code>setNumero</code> e pelo <code>setValor</code> —
          e, se algo estiver errado, o Model interrompe.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Contrato: junta cliente e casa</h2>
        <p class="secao__texto">
          O contrato de venda guarda o que importa no momento da negociação:
          <strong>nome do cliente</strong>, <strong>número da casa</strong>
          e <strong>valor da casa</strong>. Ele nasce a partir de um
          <code>Cliente</code> e uma <code>Casa</code> já válidos — se a
          criação deles tivesse falhado, o programa nem chegaria aqui.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploContrato }}</code></pre>

        <p class="secao__texto">
          Perceba: o contrato não desenha tela. Ele só
          <strong>representa o negócio</strong> — “esta pessoa comprou esta
          casa por este valor”.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Usando o Model</h2>
        <p class="secao__texto">
          Com dados válidos, o fluxo é direto: criamos cliente e casa,
          montamos o contrato e lemos os valores.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploUso }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Ana Silva
42
350000.0</code></pre>

        <p class="secao__texto">
          Já com nome vazio, o construtor do cliente
          <strong>lança a exceção</strong> — e o contrato nem é criado:
        </p>

        <pre class="bloco-codigo"><code>{{ exemploExcecao }}</code></pre>

        <p class="secao__texto secao__texto--saida">O que acontece (sem tratamento):</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Exception in thread "main" java.lang.IllegalArgumentException: Nome inválido: não pode ser vazio
	at Cliente.setNome(...)
	at Cliente.&lt;init&gt;(...)</code></pre>

        <p class="secao__texto">
          No Controller vamos ver como
          <strong>tratar</strong> essa exceção com
          <code>try</code>/<code>catch</code>, em vez de deixar o programa
          quebrar na cara do usuário.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>
