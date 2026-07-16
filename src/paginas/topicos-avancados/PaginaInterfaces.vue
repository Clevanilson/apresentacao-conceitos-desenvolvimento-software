<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'

const exemploInterface = `public interface FormaPagamento {
    void pagar(double valor);
    String obterNome();
}`

const exemploImplementacoes = `public class CartaoCredito implements FormaPagamento {
    private String numeroFinal;

    public CartaoCredito(String numeroFinal) {
        this.numeroFinal = numeroFinal;
    }

    @Override
    public void pagar(double valor) {
        System.out.println(
            "Pagando R$ " + valor + " no cartão final " + this.numeroFinal
        );
    }

    @Override
    public String obterNome() {
        return "Cartão de crédito";
    }
}

public class Pix implements FormaPagamento {
    private String chave;

    public Pix(String chave) {
        this.chave = chave;
    }

    @Override
    public void pagar(double valor) {
        System.out.println(
            "Pagando R$ " + valor + " via Pix (" + this.chave + ")"
        );
    }

    @Override
    public String obterNome() {
        return "Pix";
    }
}`

const exemploUso = `FormaPagamento pagamento1 = new CartaoCredito("4321");
FormaPagamento pagamento2 = new Pix("ana@email.com");

pagamento1.pagar(350000.0);
pagamento2.pagar(1500.0);

System.out.println(pagamento1.obterNome());
System.out.println(pagamento2.obterNome());`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Tópicos avançados</p>
        <h1 class="apresentacao__titulo">Interfaces</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é uma interface?</h2>
        <p class="secao__texto">
          Uma <strong>interface</strong> é um
          <strong>contrato</strong>: ela diz
          <strong>o que</strong> uma classe deve saber fazer, sem dizer
          <strong>como</strong> fazer.
        </p>
        <p class="secao__texto">
          Em Java, a interface declara métodos — em geral só a assinatura.
          Quem <strong>implementa</strong> a interface é obrigado a
          escrever o corpo de cada método. Assim, várias classes podem
          cumprir o mesmo contrato, cada uma do seu jeito.
        </p>
        <p class="secao__texto">
          Lembra do polimorfismo? A interface deixa isso ainda mais
          claro: o código de fora depende do
          <strong>contrato</strong>, não de uma classe concreta.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">O contrato: FormaPagamento</h2>
        <p class="secao__texto">
          No sisteminha de venda de casas, o cliente precisa
          <strong>pagar</strong>. Cartão, Pix, boleto… cada um funciona
          diferente. O que importa para o sistema é: “dá para pagar um
          valor” e “tem um nome legível”.
        </p>
        <p class="secao__texto">
          Isso vira a interface <code>FormaPagamento</code>:
        </p>

        <pre class="bloco-codigo"><code>{{ exemploInterface }}</code></pre>

        <p class="secao__texto">
          Não há implementação aqui. Só o acordo: quem for uma forma de
          pagamento <strong>deve</strong> ter
          <code>pagar</code> e <code>obterNome</code>.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Duas formas, mesmo contrato</h2>
        <p class="secao__texto">
          <code>CartaoCredito</code> e <code>Pix</code> usam
          <code>implements FormaPagamento</code>. Cada um guarda dados
          próprios e implementa os métodos do jeito que faz sentido.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploImplementacoes }}</code></pre>

        <p class="secao__texto">
          O <code>@Override</code> marca: estamos cumprindo o método
          declarado na interface. Se faltar algum, o Java
          <strong>não compila</strong> — o contrato não foi cumprido.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Usando pela interface</h2>
        <p class="secao__texto">
          O ponto forte: as variáveis são do tipo
          <code>FormaPagamento</code>. Quem chama
          <code>pagar</code> não precisa saber se é cartão ou Pix —
          só que o contrato existe.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploUso }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Pagando R$ 350000.0 no cartão final 4321
Pagando R$ 1500.0 via Pix (ana@email.com)
Cartão de crédito
Pix</code></pre>

        <p class="secao__texto">
          Em resumo: interface é o
          <strong>contrato compartilhado</strong>. Você define o que
          precisa ser feito; cada classe concreta decide como. Isso
          facilita trocar a implementação depois — sem reescrever quem
          só depende do contrato.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>
