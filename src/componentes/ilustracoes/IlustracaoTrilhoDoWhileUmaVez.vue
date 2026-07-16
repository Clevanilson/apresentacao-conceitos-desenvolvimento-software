<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 300"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Do-while garante pelo menos uma volta mesmo com condição falsa depois"
  >
    <rect width="640" height="300" rx="8" fill="#e6f1f3" />

    <!-- loop -->
    <ellipse
      cx="280"
      cy="140"
      rx="140"
      ry="80"
      fill="none"
      stroke="#1a5f6b"
      stroke-width="4"
    />
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

    <!-- placa: 1 volta garantida -->
    <g transform="translate(210, 25)">
      <rect width="140" height="28" rx="6" fill="#1a5f6b" />
      <text
        x="70"
        y="19"
        text-anchor="middle"
        fill="#ffffff"
        font-family="IBM Plex Sans, sans-serif"
        font-size="13"
        font-weight="600"
      >
        1ª volta garantida
      </text>
    </g>

    <!-- bloco executado -->
    <g transform="translate(225, 115)">
      <rect width="110" height="50" rx="8" fill="#ffffff" stroke="#1a5f6b" stroke-width="2" />
      <text
        x="55"
        y="22"
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
        y="38"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="11"
      >
        já rodou
      </text>
    </g>

    <!-- sinal false na saída -->
    <g transform="translate(430, 60)">
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

    <!-- saída -->
    <g stroke="#1a5f6b" stroke-width="4" fill="none">
      <path d="M450 140 H600" />
    </g>
    <g stroke="#2dd4bf" stroke-width="2">
      <line v-for="x in dormentesSaida" :key="'s' + x" :x1="x" y1="132" :x2="x" y2="148" />
    </g>

    <!-- trem saindo -->
    <g transform="translate(500, 118)">
      <rect x="0" y="8" width="58" height="24" rx="5" fill="#1a5f6b" />
      <rect x="38" y="0" width="24" height="16" rx="3" fill="#2dd4bf" />
      <circle cx="14" cy="36" r="6" fill="#1c2430" />
      <circle cx="44" cy="36" r="6" fill="#1c2430" />
    </g>

    <text
      x="320"
      y="255"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      Mesmo com false no fim, o bloco já foi executado uma vez
    </text>
  </svg>
</template>

<script setup lang="ts">
const dormentesSaida = [470, 520, 560]

const dormentesLoop = [
  { x1: 145, y1: 132, x2: 145, y2: 148 },
  { x1: 180, y1: 85, x2: 192, y2: 97 },
  { x1: 250, y1: 60, x2: 250, y2: 74 },
  { x1: 310, y1: 60, x2: 310, y2: 74 },
  { x1: 368, y1: 85, x2: 380, y2: 97 },
  { x1: 415, y1: 132, x2: 415, y2: 148 },
  { x1: 368, y1: 185, x2: 380, y2: 197 },
  { x1: 310, y1: 206, x2: 310, y2: 220 },
  { x1: 250, y1: 206, x2: 250, y2: 220 },
  { x1: 180, y1: 185, x2: 192, y2: 197 },
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
