<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'

const exemploPessoa = `public class Pessoa {
    private String nome;

    public Pessoa(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return this.nome;
    }

    public String obterDocumento() {
        return "documento não informado";
    }
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
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Orientação a objetos</p>
        <h1 class="apresentacao__titulo">Polimorfismo</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é polimorfismo?</h2>
        <p class="secao__texto">
          Polimorfismo, em orientação a objetos, é ter
          <strong>múltiplas formas para a mesma coisa</strong> — o mesmo
          método, com o mesmo nome, se comporta de jeitos diferentes
          conforme o tipo concreto do objeto.
        </p>
        <p class="secao__texto">
          Em outras palavras: você chama
          <code>obterDocumento()</code> em uma
          <code>Pessoa</code>, e o resultado depende de
          <strong>qual pessoa</strong> ela é. Pessoa física devolve CPF;
          pessoa jurídica devolve CNPJ. O método é o mesmo; a forma muda.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">A ideia: um método, várias respostas</h2>
        <p class="secao__texto">
          Imagine um cadastro que precisa do documento de qualquer pessoa.
          Sem polimorfismo, a gente ficaria perguntando o tipo a todo
          momento: “é física? pega o CPF. É jurídica? pega o CNPJ.”
        </p>
        <p class="secao__texto">
          Com polimorfismo, o chamador só precisa saber de uma coisa:
          <strong>existe o método</strong>
          <code>obterDocumento</code>. Quem decide o que retornar é cada
          classe filha.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">A classe base: Pessoa</h2>
        <p class="secao__texto">
          Começamos com a classe <code>Pessoa</code>, que guarda o
          <strong>nome</strong> e declara o método
          <code>obterDocumento</code>. Essa é a “mesma coisa” que todas
          as pessoas sabem fazer — só que cada uma fará do seu jeito.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploPessoa }}</code></pre>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">As formas: física e jurídica</h2>
        <p class="secao__texto">
          <code>PessoaFisica</code> e <code>PessoaJuridica</code>
          herdam de <code>Pessoa</code> e
          <strong>sobrescrevem</strong>
          <code>obterDocumento</code>. A física devolve o
          <strong>CPF</strong>; a jurídica, o <strong>CNPJ</strong>.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploFilhas }}</code></pre>

        <p class="secao__texto">
          O <code>@Override</code> deixa claro: estamos redefinindo o
          método da classe pai. O contrato continua o mesmo — “obter
          documento” — mas a implementação muda conforme o tipo.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Usando sem se preocupar com o tipo</h2>
        <p class="secao__texto">
          Aqui está o ponto do polimorfismo: as duas variáveis são do
          tipo <code>Pessoa</code>. Mesmo assim, ao chamar
          <code>obterDocumento()</code>, cada objeto responde com a
          forma correta.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploUso }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Ana Silva - documento: 123.456.789-00
Empresa XYZ - documento: 12.345.678/0001-99</code></pre>

        <p class="secao__texto">
          Em resumo: polimorfismo é a mesma operação com
          <strong>múltiplas formas</strong>. Você trata física e jurídica
          como <code>Pessoa</code>, chama
          <code>obterDocumento</code>, e cada uma devolve o documento
          certo — CPF ou CNPJ — sem o código de fora precisar escolher.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>
