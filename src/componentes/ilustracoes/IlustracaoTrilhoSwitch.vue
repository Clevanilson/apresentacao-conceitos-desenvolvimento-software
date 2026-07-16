<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 300"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Trilho com vários caminhos: cada case é um desvio, como vários ifs"
  >
    <rect width="640" height="300" rx="8" fill="#e6f1f3" />

    <g stroke="#5c6775" stroke-width="3" fill="none">
      <path d="M40 150 H260" />
      <path d="M260 150 Q320 150 380 60 H600" />
      <path d="M260 150 Q320 150 380 120 H600" />
      <path d="M260 150 Q320 150 380 180 H600" />
      <path d="M260 150 Q320 150 380 240 H600" />
    </g>

    <g stroke="#8b96a3" stroke-width="2">
      <line v-for="x in dormentesInicio" :key="'i' + x" :x1="x" y1="142" :x2="x" y2="158" />
      <line
        v-for="(p, i) in dormentes"
        :key="'d' + i"
        :x1="p.x"
        :y1="p.y - 7"
        :x2="p.x"
        :y2="p.y + 7"
      />
    </g>

    <g transform="translate(238, 48)">
      <rect x="14" y="0" width="6" height="90" rx="2" fill="#5c6775" />
      <rect x="-44" y="-8" width="122" height="44" rx="8" fill="#1a5f6b" />
      <text
        x="17"
        y="20"
        text-anchor="middle"
        fill="#ffffff"
        font-family="IBM Plex Sans, sans-serif"
        font-size="14"
        font-weight="600"
      >
        valor?
      </text>
    </g>

    <text
      v-for="rotulo in rotulos"
      :key="rotulo.texto"
      :x="530"
      :y="rotulo.y"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      {{ rotulo.texto }}
    </text>

    <g transform="translate(70, 118)">
      <rect x="0" y="8" width="70" height="28" rx="6" fill="#1a5f6b" />
      <rect x="48" y="0" width="28" height="20" rx="4" fill="#2dd4bf" />
      <circle cx="16" cy="40" r="7" fill="#1c2430" />
      <circle cx="54" cy="40" r="7" fill="#1c2430" />
      <rect x="54" y="4" width="10" height="8" rx="1" fill="#e8eef3" />
    </g>
  </svg>
</template>

<script setup lang="ts">
const dormentesInicio = [60, 90, 120, 150, 180, 210, 240]

const dormentes = [
  { x: 290, y: 145 },
  { x: 330, y: 100 },
  { x: 370, y: 70 },
  { x: 430, y: 60 },
  { x: 500, y: 60 },
  { x: 570, y: 60 },
  { x: 330, y: 130 },
  { x: 370, y: 122 },
  { x: 430, y: 120 },
  { x: 500, y: 120 },
  { x: 570, y: 120 },
  { x: 330, y: 170 },
  { x: 370, y: 178 },
  { x: 430, y: 180 },
  { x: 500, y: 180 },
  { x: 570, y: 180 },
  { x: 330, y: 200 },
  { x: 370, y: 230 },
  { x: 430, y: 240 },
  { x: 500, y: 240 },
  { x: 570, y: 240 },
]

const rotulos = [
  { texto: 'case 1', y: 48 },
  { texto: 'case 2', y: 108 },
  { texto: 'case 3', y: 168 },
  { texto: 'default', y: 228 },
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
