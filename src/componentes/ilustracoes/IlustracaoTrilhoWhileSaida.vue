<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 300"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Sinal falso na entrada do while: o trem não entra no loop e segue em frente"
  >
    <rect width="640" height="300" rx="8" fill="#e6f1f3" />

    <!-- trilho principal (segue sem entrar) -->
    <g stroke="#1a5f6b" stroke-width="4" fill="none">
      <path d="M40 200 H600" />
    </g>
    <g stroke="#2dd4bf" stroke-width="2">
      <line v-for="x in dormentes" :key="'d' + x" :x1="x" y1="192" :x2="x" y2="208" />
    </g>

    <!-- loop cinza (não usado) -->
    <ellipse
      cx="320"
      cy="110"
      rx="120"
      ry="55"
      fill="none"
      stroke="#8b96a3"
      stroke-width="3"
      stroke-dasharray="8 6"
    />

    <g transform="translate(275, 88)">
      <rect width="90" height="36" rx="8" fill="#ffffff" stroke="#8b96a3" stroke-width="2" />
      <text
        x="45"
        y="23"
        text-anchor="middle"
        fill="#8b96a3"
        font-family="IBM Plex Mono, monospace"
        font-size="12"
        font-weight="600"
      >
        { bloco }
      </text>
    </g>

    <text
      x="320"
      y="50"
      text-anchor="middle"
      fill="#8b96a3"
      font-family="IBM Plex Sans, sans-serif"
      font-size="12"
      font-weight="600"
    >
      loop fechado — zero voltas
    </text>

    <!-- sinal apagado -->
    <g transform="translate(145, 120)">
      <rect x="14" y="0" width="6" height="70" rx="2" fill="#5c6775" />
      <circle cx="17" cy="18" r="18" fill="#5c6775" />
      <circle cx="17" cy="18" r="10" fill="#e2e6eb" />
      <text
        x="17"
        y="95"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
        font-weight="600"
      >
        false
      </text>
    </g>

    <!-- trem no trilho principal -->
    <g transform="translate(280, 178)">
      <rect x="0" y="8" width="58" height="24" rx="5" fill="#1a5f6b" />
      <rect x="38" y="0" width="24" height="16" rx="3" fill="#2dd4bf" />
      <circle cx="14" cy="36" r="6" fill="#1c2430" />
      <circle cx="44" cy="36" r="6" fill="#1c2430" />
    </g>

    <text
      x="80"
      y="180"
      text-anchor="middle"
      fill="#5c6775"
      font-family="IBM Plex Sans, sans-serif"
      font-size="12"
      font-weight="600"
    >
      começa
    </text>
    <text
      x="540"
      y="180"
      text-anchor="middle"
      fill="#5c6775"
      font-family="IBM Plex Sans, sans-serif"
      font-size="12"
      font-weight="600"
    >
      continua
    </text>

    <text
      x="320"
      y="270"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      Condição falsa na entrada → o while pode nunca executar
    </text>
  </svg>
</template>

<script setup lang="ts">
const dormentes = [60, 100, 140, 220, 260, 380, 420, 500, 540, 580]
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
