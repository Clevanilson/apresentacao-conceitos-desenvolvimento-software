<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 300"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Trilho em loop com sinal na entrada: o while pergunta antes de entrar"
  >
    <rect width="640" height="300" rx="8" fill="#e6f1f3" />

    <!-- entrada -->
    <g stroke="#5c6775" stroke-width="3" fill="none">
      <path d="M40 150 H150" />
    </g>
    <g stroke="#8b96a3" stroke-width="2">
      <line v-for="x in dormentesEntrada" :key="'e' + x" :x1="x" y1="142" :x2="x" y2="158" />
    </g>

    <!-- sinal na entrada (condição antes) -->
    <g transform="translate(145, 70)">
      <rect x="14" y="0" width="6" height="70" rx="2" fill="#5c6775" />
      <circle cx="17" cy="18" r="18" fill="#1a5f6b" />
      <circle cx="17" cy="18" r="10" fill="#2dd4bf" />
      <text
        x="17"
        y="100"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
        font-weight="600"
      >
        ? antes
      </text>
    </g>

    <!-- loop -->
    <ellipse
      cx="360"
      cy="150"
      rx="150"
      ry="90"
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

    <!-- seta de repetição -->
    <path
      d="M320 68 Q360 52 400 68"
      fill="none"
      stroke="#1a5f6b"
      stroke-width="2"
      marker-end="url(#seta-while)"
    />
    <defs>
      <marker
        id="seta-while"
        markerWidth="8"
        markerHeight="8"
        refX="6"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L6,3 L0,6 Z" fill="#1a5f6b" />
      </marker>
    </defs>

    <g transform="translate(312, 20)">
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
        while
      </text>
    </g>

    <!-- bloco -->
    <g transform="translate(305, 128)">
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
        se sinal verde
      </text>
    </g>

    <!-- saída -->
    <g stroke="#5c6775" stroke-width="3" fill="none">
      <path d="M510 150 H600" />
    </g>
    <g stroke="#8b96a3" stroke-width="2">
      <line v-for="x in dormentesSaida" :key="'s' + x" :x1="x" y1="142" :x2="x" y2="158" />
    </g>

    <text
      x="80"
      y="128"
      text-anchor="middle"
      fill="#5c6775"
      font-family="IBM Plex Sans, sans-serif"
      font-size="12"
      font-weight="600"
    >
      começa
    </text>
    <text
      x="555"
      y="128"
      text-anchor="middle"
      fill="#5c6775"
      font-family="IBM Plex Sans, sans-serif"
      font-size="12"
      font-weight="600"
    >
      sai do while
    </text>

    <!-- trem na entrada, antes do sinal -->
    <g transform="translate(70, 128)">
      <rect x="0" y="8" width="50" height="22" rx="5" fill="#1a5f6b" />
      <rect x="32" y="0" width="22" height="15" rx="3" fill="#2dd4bf" />
      <circle cx="12" cy="34" r="5" fill="#1c2430" />
      <circle cx="38" cy="34" r="5" fill="#1c2430" />
    </g>

    <text
      x="320"
      y="275"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      O sinal pergunta primeiro — só então o trem entra no circuito
    </text>
  </svg>
</template>

<script setup lang="ts">
const dormentesEntrada = [55, 85, 115]
const dormentesSaida = [530, 560, 585]

const dormentesLoop = [
  { x1: 215, y1: 142, x2: 215, y2: 158 },
  { x1: 250, y1: 90, x2: 262, y2: 102 },
  { x1: 330, y1: 60, x2: 330, y2: 74 },
  { x1: 390, y1: 60, x2: 390, y2: 74 },
  { x1: 458, y1: 90, x2: 470, y2: 102 },
  { x1: 505, y1: 142, x2: 505, y2: 158 },
  { x1: 458, y1: 198, x2: 470, y2: 210 },
  { x1: 390, y1: 226, x2: 390, y2: 240 },
  { x1: 330, y1: 226, x2: 330, y2: 240 },
  { x1: 250, y1: 198, x2: 262, y2: 210 },
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
