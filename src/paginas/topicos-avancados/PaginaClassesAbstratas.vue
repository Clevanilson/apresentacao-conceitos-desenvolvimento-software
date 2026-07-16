<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'

const exemploAbstrata = `public abstract class Pessoa {
    private String nome;

    public Pessoa(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return this.nome;
    }

    public abstract String obterDocumento();
}`

const exemploFilhas = `public class PessoaFisica extends Pessoa {
    private String cpf;

    public PessoaFisica(String nome, String cpf) {
        super(nome);
        this.cpf = cpf;
    }

    @Override
    public String obterDocumento() {
        return this.cpf;
    }
}

public class PessoaJuridica extends Pessoa {
    private String cnpj;

    public PessoaJuridica(String nome, String cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }

    @Override
    public String obterDocumento() {
        return this.cnpj;
    }
}`

const exemploUso = `Pessoa fisica = new PessoaFisica("Ana Silva", "123.456.789-00");
Pessoa juridica = new PessoaJuridica("Empresa XYZ", "12.345.678/0001-99");

System.out.println(fisica.getNome() + " - documento: " + fisica.obterDocumento());
System.out.println(juridica.getNome() + " - documento: " + juridica.obterDocumento());`

const exemploErro = `// Isso NÃO compila:
Pessoa pessoa = new Pessoa("Alguém");`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Tópicos avançados</p>
        <h1 class="apresentacao__titulo">Classes abstratas</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é uma classe abstrata?</h2>
        <p class="secao__texto">
          Uma <strong>classe abstrata</strong> é uma classe
          <strong>incompleta de propósito</strong>: ela junta o que já
          dá para implementar e deixa alguns métodos para as filhas
          completarem.
        </p>
        <p class="secao__texto">
          Em Java, marcamos com <code>abstract</code>. Métodos
          <code>abstract</code> só têm assinatura — sem corpo. A classe
          filha <strong>obrigatoriamente</strong> implementa esses
          métodos (ou também fica abstrata).
        </p>
        <p class="secao__texto">
          Diferente de uma classe normal, você
          <strong>não pode instanciar</strong> uma classe abstrata com
          <code>new</code>. Ela existe para ser
          <strong>estendida</strong>.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">O problema que ela resolve</h2>
        <p class="secao__texto">
          No tópico de polimorfismo, a classe
          <code>Pessoa</code> tinha um
          <code>obterDocumento</code> que devolvia
          <em>“documento não informado”</em>. Funcionava, mas era um
          atalho: na prática, <strong>toda</strong> pessoa concreta
          deveria ter documento de verdade.
        </p>
        <p class="secao__texto">
          Com classe abstrata, a gente
          <strong>força</strong> esse contrato na herança: o nome fica
          pronto na base; o documento fica
          <strong>abstrato</strong> — cada filha implementa.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Pessoa abstrata</h2>
        <p class="secao__texto">
          <code>getNome</code> já está pronto. Já
          <code>obterDocumento</code> é
          <code>abstract</code>: a base não inventa um valor genérico —
          ela exige que física e jurídica digam o documento certo.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploAbstrata }}</code></pre>

        <p class="secao__texto">
          Tentar criar uma <code>Pessoa</code> “pura” falha na
          compilação — não faz sentido no domínio:
        </p>

        <pre class="bloco-codigo"><code>{{ exemploErro }}</code></pre>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">As filhas completam o contrato</h2>
        <p class="secao__texto">
          <code>PessoaFisica</code> e <code>PessoaJuridica</code>
          herdam nome e implementam
          <code>obterDocumento</code> — CPF ou CNPJ.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploFilhas }}</code></pre>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Uso com polimorfismo</h2>
        <p class="secao__texto">
          O uso continua igual ao do polimorfismo: variáveis do tipo
          <code>Pessoa</code>, comportamento conforme o objeto real.
          A diferença é que agora a base
          <strong>garante</strong> que documento existe em toda pessoa
          concreta.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploUso }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Ana Silva - documento: 123.456.789-00
Empresa XYZ - documento: 12.345.678/0001-99</code></pre>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Interface ou classe abstrata?</h2>
        <p class="secao__texto">
          Use <strong>classe abstrata</strong> quando há
          <strong>código em comum</strong> (campos, construtor, métodos
          prontos) e ainda assim alguns métodos precisam ser
          obrigatórios nas filhas — como o nome em
          <code>Pessoa</code>.
        </p>
        <p class="secao__texto">
          Use <strong>interface</strong> quando o foco é só o
          <strong>contrato</strong> (“sabe pagar”, “sabe notificar”),
          sem compartilhar estado ou implementação entre as classes —
          como <code>FormaPagamento</code>.
        </p>
        <p class="secao__texto">
          Em resumo: classe abstrata é herança com partes prontas e
          partes a completar; interface é o acordo puro do que deve ser
          feito.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>
