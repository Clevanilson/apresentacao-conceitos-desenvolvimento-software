<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'

const exemploController = `public class VendaController {
    private VendaView view;

    public VendaController(VendaView view) {
        this.view = view;
    }

    public void venderCasa(String nomeCliente, int numeroCasa, double valorCasa) {
        try {
            Cliente cliente = new Cliente(nomeCliente);
            Casa casa = new Casa(numeroCasa, valorCasa);
            Contrato contrato = new Contrato(cliente, casa);

            this.view.mostrarMensagem("Venda registrada com sucesso!");
            this.view.mostrarContrato(contrato);
        } catch (IllegalArgumentException e) {
            this.view.mostrarMensagem("Falha na venda: " + e.getMessage());
        }
    }
}`

const exemploMain = `public class App {
    public static void main(String[] args) {
        VendaView view = new VendaView();
        VendaController controller = new VendaController(view);

        controller.venderCasa("Ana Silva", 42, 350000.0);

        System.out.println();

        controller.venderCasa("", 10, 200000.0);
    }
}`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Arquitetura de software (MVC)</p>
        <h1 class="apresentacao__titulo">Controller</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é o Controller?</h2>
        <p class="secao__texto">
          No MVC, o <strong>Controller</strong> é o
          <strong>intermediário</strong>. Ele recebe o pedido (“quero
          vender esta casa”), usa o Model para criar e validar os dados, e
          pede à View para mostrar o resultado.
        </p>
        <p class="secao__texto">
          Ele não guarda regra de negócio dentro de si (isso é do Model) e
          não fica responsável por formatar a saída (isso é da View). O
          trabalho dele é <strong>orquestrar</strong>: decidir o que
          acontece em cada passo do fluxo.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Try / catch: tratando a exceção</h2>
        <p class="secao__texto">
          No Model, um nome vazio
          <strong>lança</strong> <code>IllegalArgumentException</code>. Se
          ninguém cuidar disso, o programa para. No Controller, usamos
          <code>try</code> / <code>catch</code> para
          <strong>tentar</strong> o fluxo feliz e
          <strong>pegar</strong> o erro se algo der errado.
        </p>
        <ul class="secao__lista">
          <li>
            <strong><code>try</code></strong> — colocamos o código que
            <em>pode</em> falhar (criar cliente, casa, contrato);
          </li>
          <li>
            <strong><code>catch</code></strong> — se uma exceção daquele
            tipo for lançada, o Java pula para cá e a gente decide o que
            fazer (no nosso caso, pedir à View para mostrar a mensagem).
          </li>
        </ul>
        <p class="secao__texto">
          Assim o cliente com nome vazio
          <strong>não é criado</strong>: a exceção interrompe a criação, o
          <code>catch</code> captura o problema e a View só exibe o aviso.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Controller da venda de casas</h2>
        <p class="secao__texto">
          O método <code>venderCasa</code> recebe nome, número e valor.
          Tudo que depende do Model fica dentro do <code>try</code>. Se o
          Model lançar <code>IllegalArgumentException</code>, o
          <code>catch</code> mostra a falha — sem checar
          <code>getNome() == null</code> na mão.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploController }}</code></pre>

        <p class="secao__texto">
          Observe o fluxo:
          <strong>pedido → Model → View</strong>. Se o Model gritar com
          exceção, o Controller traduz isso em mensagem na View. Cada
          peça continua no seu papel.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Ligando tudo no main</h2>
        <p class="secao__texto">
          No ponto de entrada do programa, criamos a View, o Controller e
          pedimos duas vendas: uma válida e outra com nome vazio.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploMain }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Venda registrada com sucesso!
--- Contrato ---
Cliente: Ana Silva
Casa: 42
Valor: 350000.0

Falha na venda: Nome inválido: não pode ser vazio</code></pre>

        <p class="secao__texto">
          Na primeira chamada, o caminho feliz. Na segunda, o Model lança a
          exceção ao tentar criar o cliente; o <code>catch</code> do
          Controller impede o programa de quebrar e a View mostra só a
          mensagem de falha — sem contrato e sem cliente inválido.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Recapitulando o MVC</h2>
        <p class="secao__texto">
          No sisteminha de venda de casas, cada parte ficou com um trabalho
          claro:
        </p>
        <ul class="secao__lista">
          <li>
            <strong>Model</strong> —
            <code>Cliente</code>, <code>Casa</code> e
            <code>Contrato</code>, com validações que lançam exceção;
          </li>
          <li>
            <strong>View</strong> — logs no console (
            <code>VendaView</code>);
          </li>
          <li>
            <strong>Controller</strong> —
            <code>VendaController</code>, que orquestra com
            <code>try</code>/<code>catch</code> e coordena Model e View.
          </li>
        </ul>
        <p class="secao__texto">
          Separar assim não é cerimônia: é o que deixa o código mais fácil
          de ler, testar e trocar — por exemplo, mudar só a View sem
          reescrever as regras do Model.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>
