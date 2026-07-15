<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 300"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Trilho em formato de loop: o trem gira várias vezes pelo mesmo caminho — analogia do for"
  >
    <rect width="640" height="300" rx="8" fill="#e6f1f3" />

    <!-- entrada do programa -->
    <g stroke="#5c6775" stroke-width="3" fill="none">
      <path d="M40 150 H120" />
    </g>
    <g stroke="#8b96a3" stroke-width="2">
      <line v-for="x in dormentesEntrada" :key="'e' + x" :x1="x" y1="142" :x2="x" y2="158" />
    </g>

    <!-- trilho em loop (elipse) -->
    <ellipse
      cx="320"
      cy="150"
      rx="160"
      ry="95"
      fill="none"
      stroke="#1a5f6b"
      stroke-width="4"
    />

    <!-- dormentes ao redor do loop -->
    <g stroke="#2dd4bf" stroke-width="2">
      <line
        v-for="(p, i) in dormentesLoop"
        :key="'l' + i"
        :x1="p.x1"
        :y1="p.y1"
        :x2="p.x2"
        :y2="p.y2"
      />
    </g>

    <!-- saída do loop -->
    <g stroke="#5c6775" stroke-width="3" fill="none">
      <path d="M480 150 H600" />
    </g>
    <g stroke="#8b96a3" stroke-width="2">
      <line v-for="x in dormentesSaida" :key="'s' + x" :x1="x" y1="142" :x2="x" y2="158" />
    </g>

    <!-- setas indicando repetição -->
    <path
      d="M280 62 Q320 48 360 62"
      fill="none"
      stroke="#1a5f6b"
      stroke-width="2"
      marker-end="url(#seta-loop-for)"
    />
    <defs>
      <marker
        id="seta-loop-for"
        markerWidth="8"
        markerHeight="8"
        refX="6"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L6,3 L0,6 Z" fill="#1a5f6b" />
      </marker>
    </defs>

    <!-- placa: repete -->
    <g transform="translate(272, 18)">
      <rect width="96" height="28" rx="6" fill="#1a5f6b" />
      <text
        x="48"
        y="19"
        text-anchor="middle"
        fill="#ffffff"
        font-family="IBM Plex Sans, sans-serif"
        font-size="13"
        font-weight="600"
      >
        repete
      </text>
    </g>

    <!-- placa: começa -->
    <text
      x="70"
      y="128"
      text-anchor="middle"
      fill="#5c6775"
      font-family="IBM Plex Sans, sans-serif"
      font-size="12"
      font-weight="600"
    >
      começa
    </text>

    <!-- placa: sai do for -->
    <text
      x="545"
      y="128"
      text-anchor="middle"
      fill="#5c6775"
      font-family="IBM Plex Sans, sans-serif"
      font-size="12"
      font-weight="600"
    >
      sai do for
    </text>

    <!-- bloco do loop -->
    <g transform="translate(265, 118)">
      <rect width="110" height="44" rx="8" fill="#ffffff" stroke="#1a5f6b" stroke-width="2" />
      <text
        x="55"
        y="18"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Mono, monospace"
        font-size="12"
        font-weight="600"
      >
        { bloco }
      </text>
      <text
        x="55"
        y="34"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="11"
      >
        a cada volta
      </text>
    </g>

    <!-- trem no loop -->
    <g transform="translate(430, 128)">
      <rect x="0" y="8" width="58" height="24" rx="5" fill="#1a5f6b" />
      <rect x="38" y="0" width="24" height="16" rx="3" fill="#2dd4bf" />
      <circle cx="14" cy="36" r="6" fill="#1c2430" />
      <circle cx="44" cy="36" r="6" fill="#1c2430" />
    </g>

    <!-- contador de voltas -->
    <g transform="translate(250, 248)">
      <text
        x="70"
        y="0"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Sans, sans-serif"
        font-size="13"
        font-weight="600"
      >
        volta 1 · volta 2 · volta 3 · …
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
const dormentesEntrada = [55, 80, 105]
const dormentesSaida = [500, 535, 570]

/** Pontos aproximados nas elipses para dormentes */
const dormentesLoop = [
  { x1: 165, y1: 142, x2: 165, y2: 158 },
  { x1: 190, y1: 95, x2: 202, y2: 108 },
  { x1: 280, y1: 55, x2: 280, y2: 70 },
  { x1: 360, y1: 55, x2: 360, y2: 70 },
  { x1: 438, y1: 95, x2: 450, y2: 108 },
  { x1: 475, y1: 142, x2: 475, y2: 158 },
  { x1: 438, y1: 192, x2: 450, y2: 205 },
  { x1: 360, y1: 230, x2: 360, y2: 245 },
  { x1: 280, y1: 230, x2: 280, y2: 245 },
  { x1: 190, y1: 192, x2: 202, y2: 205 },
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
