<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 280"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Variáveis soltas: nomes e notas de alunos espalhados sem agrupamento"
  >
    <rect width="640" height="280" rx="8" fill="#e6f1f3" />

    <!-- caixas espalhadas -->
    <g
      v-for="caixa in caixas"
      :key="caixa.id"
      :transform="`translate(${caixa.x}, ${caixa.y})`"
    >
      <rect
        width="150"
        height="52"
        rx="8"
        fill="#ffffff"
        stroke="#8b96a3"
        stroke-width="2"
        stroke-dasharray="5 4"
      />
      <text
        x="75"
        y="22"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Mono, monospace"
        font-size="12"
        font-weight="600"
      >
        {{ caixa.nome }}
      </text>
      <text
        x="75"
        y="40"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Sans, sans-serif"
        font-size="13"
      >
        {{ caixa.valor }}
      </text>
    </g>

    <text
      x="320"
      y="258"
      text-anchor="middle"
      fill="#5c6775"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
    >
      Dados do mesmo aluno ficam soltos, sem ligação clara
    </text>
  </svg>
</template>

<script setup lang="ts">
const caixas = [
  { id: 1, x: 40, y: 36, nome: 'aluno1Nome', valor: '"Lucas"' },
  { id: 2, x: 240, y: 24, nome: 'aluno1Nota', valor: '8.5' },
  { id: 3, x: 440, y: 48, nome: 'aluno2Nome', valor: '"Marina"' },
  { id: 4, x: 80, y: 140, nome: 'aluno2Nota', valor: '7.0' },
  { id: 5, x: 300, y: 120, nome: 'aluno3Nome', valor: '"Pedro"' },
  { id: 6, x: 470, y: 150, nome: 'aluno3Nota', valor: '9.2' },
]
</script>

<style scoped>
.ilustracao {
  width: 100%;
  max-width: 640px;
  height: auto;
  display: block;
  border-radius: 6px;
}
</style>
