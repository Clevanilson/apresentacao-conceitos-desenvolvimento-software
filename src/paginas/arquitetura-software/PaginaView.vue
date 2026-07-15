<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'

const exemploView = `public class VendaView {
    public void mostrarCliente(Cliente cliente) {
        System.out.println("--- Cliente ---");
        System.out.println("Nome: " + cliente.getNome());
    }

    public void mostrarCasa(Casa casa) {
        System.out.println("--- Casa ---");
        System.out.println("Número: " + casa.getNumero());
        System.out.println("Valor: " + casa.getValor());
    }

    public void mostrarContrato(Contrato contrato) {
        System.out.println("--- Contrato ---");
        System.out.println("Cliente: " + contrato.getNomeCliente());
        System.out.println("Casa: " + contrato.getNumeroCasa());
        System.out.println("Valor: " + contrato.getValorCasa());
    }

    public void mostrarMensagem(String mensagem) {
        System.out.println(mensagem);
    }
}`

const exemploUso = `Cliente cliente = new Cliente("Ana Silva");
Casa casa = new Casa(42, 350000.0);
Contrato contrato = new Contrato(cliente, casa);

VendaView view = new VendaView();

view.mostrarCliente(cliente);
view.mostrarCasa(casa);
view.mostrarContrato(contrato);`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Arquitetura de software (MVC)</p>
        <h1 class="apresentacao__titulo">View</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é a View?</h2>
        <p class="secao__texto">
          No MVC, a <strong>View</strong> é a parte que
          <strong>mostra informação</strong> para quem usa o sistema — e,
          em aplicações maiores, também captura cliques, formulários e outros
          inputs.
        </p>
        <p class="secao__texto">
          Ela não decide regra de negócio. Não valida se o valor da casa
          pode ser negativo. Só <strong>apresenta</strong> o que recebeu —
          seja numa tela HTML, num app mobile ou, no nosso caso, no
          console.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Nossa View: só logs no console</h2>
        <p class="secao__texto">
          Para manter o foco na arquitetura, a View do sisteminha de venda
          de casas é deliberadamente simples: uma classe com métodos que
          fazem <code>System.out.println</code>. Sem janela, sem HTML —
          só texto no terminal.
        </p>
        <p class="secao__texto">
          Isso já basta para o papel dela: <strong>exibir</strong> cliente,
          casa e contrato de forma legível.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploView }}</code></pre>

        <p class="secao__texto">
          Cada método recebe um pedaço do Model e transforma isso em
          mensagem. Se amanhã quisermos uma tela gráfica, trocamos a View —
          o Model e as regras continuam iguais.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Usando a View</h2>
        <p class="secao__texto">
          Criamos os objetos do Model e pedimos à View para mostrá-los. Neste
          momento ainda chamamos a View “na mão”; no próximo tópico o
          Controller passa a orquestrar isso.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploUso }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>--- Cliente ---
Nome: Ana Silva
--- Casa ---
Número: 42
Valor: 350000.0
--- Contrato ---
Cliente: Ana Silva
Casa: 42
Valor: 350000.0</code></pre>

        <p class="secao__texto">
          A View só formatou e imprimiu. Quem vai
          <strong>decidir o fluxo</strong> — criar os objetos, montar o
          contrato e pedir a exibição — é o Controller.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>
