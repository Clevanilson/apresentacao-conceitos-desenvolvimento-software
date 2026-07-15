<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 300"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="As três estações do for: iniciar, condição e incrementar"
  >
    <rect width="640" height="300" rx="8" fill="#e6f1f3" />

    <!-- trilho horizontal com estações -->
    <g stroke="#1a5f6b" stroke-width="4" fill="none">
      <path d="M40 160 H600" />
    </g>
    <g stroke="#2dd4bf" stroke-width="2">
      <line v-for="x in dormentes" :key="'d' + x" :x1="x" y1="152" :x2="x" y2="168" />
    </g>

    <!-- seta de retorno (incremento → condição) -->
    <path
      d="M520 120 C520 70, 120 70, 120 120"
      fill="none"
      stroke="#1a5f6b"
      stroke-width="2.5"
      stroke-dasharray="6 4"
      marker-end="url(#seta-retorno-for)"
    />
    <defs>
      <marker
        id="seta-retorno-for"
        markerWidth="8"
        markerHeight="8"
        refX="6"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L6,3 L0,6 Z" fill="#1a5f6b" />
      </marker>
    </defs>
    <text
      x="320"
      y="55"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="12"
      font-weight="600"
    >
      volta ao sinal (próxima repetição)
    </text>

    <!-- Estação 1: iniciar -->
    <g transform="translate(70, 100)">
      <circle cx="40" cy="60" r="14" fill="#2dd4bf" stroke="#1a5f6b" stroke-width="2" />
      <text
        x="40"
        y="-8"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Mono, monospace"
        font-size="12"
        font-weight="600"
      >
        i = 0
      </text>
      <text
        x="40"
        y="98"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
        font-weight="600"
      >
        1. iniciar
      </text>
    </g>

    <!-- Estação 2: condição (sinal) -->
    <g transform="translate(260, 58)">
      <rect x="34" y="40" width="6" height="62" rx="2" fill="#5c6775" />
      <rect x="0" y="0" width="74" height="36" rx="8" fill="#1a5f6b" />
      <text
        x="37"
        y="23"
        text-anchor="middle"
        fill="#ffffff"
        font-family="IBM Plex Mono, monospace"
        font-size="13"
        font-weight="600"
      >
        i &lt; 3?
      </text>
      <text
        x="37"
        y="140"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
        font-weight="600"
      >
        2. condição
      </text>
    </g>

    <!-- bloco entre condição e incremento -->
    <g transform="translate(370, 178)">
      <rect width="100" height="40" rx="8" fill="#ffffff" stroke="#1a5f6b" stroke-width="2" />
      <text
        x="50"
        y="25"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Mono, monospace"
        font-size="12"
        font-weight="600"
      >
        { bloco }
      </text>
    </g>

    <!-- Estação 3: incremento -->
    <g transform="translate(500, 100)">
      <circle cx="40" cy="60" r="14" fill="#2dd4bf" stroke="#1a5f6b" stroke-width="2" />
      <text
        x="40"
        y="-8"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Mono, monospace"
        font-size="12"
        font-weight="600"
      >
        i++
      </text>
      <text
        x="40"
        y="98"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
        font-weight="600"
      >
        3. incrementar
      </text>
    </g>

    <!-- trem -->
    <g transform="translate(175, 138)">
      <rect x="0" y="8" width="50" height="22" rx="5" fill="#1a5f6b" />
      <rect x="32" y="0" width="22" height="15" rx="3" fill="#2dd4bf" />
      <circle cx="12" cy="34" r="5" fill="#1c2430" />
      <circle cx="38" cy="34" r="5" fill="#1c2430" />
    </g>
  </svg>
</template>

<script setup lang="ts">
const dormentes = [60, 100, 140, 180, 220, 380, 420, 460, 540, 580]
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
