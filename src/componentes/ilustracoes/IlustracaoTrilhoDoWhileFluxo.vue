<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 300"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Fluxo do do-while: bloco primeiro, depois a condição"
  >
    <rect width="640" height="300" rx="8" fill="#e6f1f3" />

    <g stroke="#1a5f6b" stroke-width="4" fill="none">
      <path d="M40 160 H600" />
    </g>
    <g stroke="#2dd4bf" stroke-width="2">
      <line v-for="x in dormentes" :key="'d' + x" :x1="x" y1="152" :x2="x" y2="168" />
    </g>

    <!-- retorno da condição para o bloco -->
    <path
      d="M480 120 C480 70, 200 70, 200 120"
      fill="none"
      stroke="#1a5f6b"
      stroke-width="2.5"
      stroke-dasharray="6 4"
      marker-end="url(#seta-retorno-do-while)"
    />
    <defs>
      <marker
        id="seta-retorno-do-while"
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
      x="340"
      y="55"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="12"
      font-weight="600"
    >
      se true → outra volta no bloco
    </text>

    <!-- 1. do / bloco -->
    <g transform="translate(140, 100)">
      <rect width="110" height="50" rx="8" fill="#ffffff" stroke="#1a5f6b" stroke-width="2" />
      <text
        x="55"
        y="22"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Mono, monospace"
        font-size="13"
        font-weight="600"
      >
        do { … }
      </text>
      <text
        x="55"
        y="90"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
        font-weight="600"
      >
        1. executa
      </text>
    </g>

    <!-- 2. while condição -->
    <g transform="translate(400, 58)">
      <rect x="40" y="40" width="6" height="62" rx="2" fill="#5c6775" />
      <rect x="0" y="0" width="86" height="36" rx="8" fill="#1a5f6b" />
      <text
        x="43"
        y="23"
        text-anchor="middle"
        fill="#ffffff"
        font-family="IBM Plex Mono, monospace"
        font-size="12"
        font-weight="600"
      >
        while (?)
      </text>
      <text
        x="43"
        y="140"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
        font-weight="600"
      >
        2. pergunta
      </text>
    </g>

    <!-- seta do bloco para a condição -->
    <path
      d="M260 160 H390"
      fill="none"
      stroke="#1a5f6b"
      stroke-width="2"
      marker-end="url(#seta-para-condicao)"
    />
    <defs>
      <marker
        id="seta-para-condicao"
        markerWidth="8"
        markerHeight="8"
        refX="6"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L6,3 L0,6 Z" fill="#1a5f6b" />
      </marker>
    </defs>

    <!-- trem no bloco -->
    <g transform="translate(70, 138)">
      <rect x="0" y="8" width="50" height="22" rx="5" fill="#1a5f6b" />
      <rect x="32" y="0" width="22" height="15" rx="3" fill="#2dd4bf" />
      <circle cx="12" cy="34" r="5" fill="#1c2430" />
      <circle cx="38" cy="34" r="5" fill="#1c2430" />
    </g>

    <text
      x="320"
      y="260"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      Ordem: bloco → condição → (talvez) bloco de novo
    </text>
  </svg>
</template>

<script setup lang="ts">
const dormentes = [60, 100, 280, 320, 360, 520, 560]
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
