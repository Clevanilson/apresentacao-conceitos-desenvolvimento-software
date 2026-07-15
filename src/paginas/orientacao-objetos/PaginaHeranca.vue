<script setup lang="ts">
import ContainerBase from '@/componentes/ContainerBase.vue'

const exemploSemHeranca = `public class Aluno {
    private String nome;
    private String email;
    private double nota;

    public Aluno(String nome, String email, double nota) {
        this.nome = nome;
        this.email = email;
        this.nota = nota;
    }

    public String getNome() {
        return this.nome;
    }

    public String getEmail() {
        return this.email;
    }

    public double getNota() {
        return this.nota;
    }
}

public class Professor {
    private String nome;
    private String email;
    private String disciplina;

    public Professor(String nome, String email, String disciplina) {
        this.nome = nome;
        this.email = email;
        this.disciplina = disciplina;
    }

    public String getNome() {
        return this.nome;
    }

    public String getEmail() {
        return this.email;
    }

    public String getDisciplina() {
        return this.disciplina;
    }
}`

const exemploUsuario = `public class Usuario {
    private String nome;
    private String email;

    public Usuario(String nome, String email) {
        this.nome = nome;
        this.email = email;
    }

    public String getNome() {
        return this.nome;
    }

    public String getEmail() {
        return this.email;
    }
}`

const exemploAlunoProfessor = `public class Aluno extends Usuario {
    private double nota;

    public Aluno(String nome, String email, double nota) {
        super(nome, email);
        this.nota = nota;
    }

    public double getNota() {
        return this.nota;
    }
}

public class Professor extends Usuario {
    private String disciplina;

    public Professor(String nome, String email, String disciplina) {
        super(nome, email);
        this.disciplina = disciplina;
    }

    public String getDisciplina() {
        return this.disciplina;
    }
}`

const exemploUso = `Aluno aluno = new Aluno("Ana", "ana@email.com", 8.5);
Professor professor = new Professor("Carlos", "carlos@email.com", "Matemática");

System.out.println(aluno.getNome() + " - nota: " + aluno.getNota());
System.out.println(professor.getNome() + " - disciplina: " + professor.getDisciplina());`
</script>

<template>
  <ContainerBase>
    <article class="apresentacao">
      <header class="apresentacao__cabecalho">
        <p class="apresentacao__rotulo">Orientação a objetos</p>
        <h1 class="apresentacao__titulo">Herança</h1>
      </header>

      <section class="secao">
        <h2 class="secao__titulo">O que é herança?</h2>
        <p class="secao__texto">
          Herança, em orientação a objetos, é
          <strong>reaproveitar o que classes do mesmo contexto já têm em
          comum</strong> — em vez de copiar e colar os mesmos campos e
          métodos em cada classe.
        </p>
        <p class="secao__texto">
          A ideia é simples: quando várias classes compartilham as mesmas
          características, a gente coloca o código comum em uma classe base.
          As outras classes
          <strong>herdam</strong> esse código e só acrescentam o que é
          específico delas.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">O problema: código repetido</h2>
        <p class="secao__texto">
          Imagine um sistema escolar. Tanto o
          <code>Aluno</code> quanto o <code>Professor</code> têm
          <strong>nome</strong> e <strong>email</strong>. Sem herança, a
          gente acaba escrevendo a mesma coisa duas vezes:
        </p>

        <pre class="bloco-codigo"><code>{{ exemploSemHeranca }}</code></pre>

        <p class="secao__texto">
          Nome, email e os métodos de acesso estão duplicados. Se amanhã
          surgir uma regra nova para o email — por exemplo, validar o formato
          —, seria preciso alterar em dois lugares. Quanto mais classes
          iguais no mesmo contexto, pior fica.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">A solução: extrair o que é comum</h2>
        <p class="secao__texto">
          Com herança, criamos a classe <code>Usuario</code> com o que
          aluno e professor compartilham: <strong>nome</strong> e
          <strong>email</strong>.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploUsuario }}</code></pre>

        <p class="secao__texto">
          Depois, <code>Aluno</code> e <code>Professor</code>
          <strong>estendem</strong> <code>Usuario</code>. Cada um herda nome
          e email — e só declara o que é próprio: a
          <strong>nota</strong> do aluno e a <strong>disciplina</strong> do
          professor.
        </p>

        <pre class="bloco-codigo"><code>{{ exemploAlunoProfessor }}</code></pre>

        <p class="secao__texto">
          O <code>extends</code> diz: “esta classe é um tipo de
          <code>Usuario</code>”. O <code>super(nome, email)</code> chama o
          construtor da classe pai para inicializar a parte comum. Assim,
          não reescrevemos o código que já existe na base.
        </p>
      </section>

      <section class="secao">
        <h2 class="secao__titulo">Usando as classes herdeiras</h2>
        <p class="secao__texto">
          Aluno e professor usam os métodos herdados de
          <code>Usuario</code> (<code>getNome</code>, <code>getEmail</code>)
          e também os métodos próprios (<code>getNota</code>,
          <code>getDisciplina</code>).
        </p>

        <pre class="bloco-codigo"><code>{{ exemploUso }}</code></pre>

        <p class="secao__texto secao__texto--saida">Saída esperada no console:</p>
        <pre class="bloco-codigo bloco-codigo--saida"><code>Ana - nota: 8.5
Carlos - disciplina: Matemática</code></pre>

        <p class="secao__texto">
          Em resumo: herança evita reescrever o que é igual entre classes do
          mesmo contexto. O comum fica na classe base; cada filho só
          acrescenta o que difere — e o código fica mais simples de manter.
        </p>
      </section>
    </article>
  </ContainerBase>
</template>
