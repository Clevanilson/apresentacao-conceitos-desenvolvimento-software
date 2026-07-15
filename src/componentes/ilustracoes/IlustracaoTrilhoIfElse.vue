<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 280"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Trilho com dois caminhos: verdadeiro leva ao if e falso leva ao else"
  >
    <rect width="640" height="280" rx="8" fill="#e6f1f3" />

    <!-- trilhos: dois caminhos alternativos -->
    <g stroke="#5c6775" stroke-width="3" fill="none">
      <path d="M40 150 H300" />
      <path d="M300 150 Q380 150 440 90 H600" />
      <path d="M300 150 Q380 150 440 210 H600" />
    </g>

    <g stroke="#8b96a3" stroke-width="2">
      <line v-for="x in dormentesInicio" :key="'i' + x" :x1="x" y1="142" :x2="x" y2="158" />
      <line
        v-for="(p, i) in dormentesCima"
        :key="'c' + i"
        :x1="p.x"
        :y1="p.y - 8"
        :x2="p.x"
        :y2="p.y + 8"
      />
      <line
        v-for="(p, i) in dormentesBaixo"
        :key="'b' + i"
        :x1="p.x"
        :y1="p.y - 8"
        :x2="p.x"
        :y2="p.y + 8"
      />
    </g>

    <!-- sinal da condição -->
    <g transform="translate(278, 48)">
      <rect x="14" y="0" width="6" height="90" rx="2" fill="#5c6775" />
      <rect x="-36" y="-8" width="106" height="44" rx="8" fill="#1a5f6b" />
      <text
        x="17"
        y="20"
        text-anchor="middle"
        fill="#ffffff"
        font-family="IBM Plex Sans, sans-serif"
        font-size="14"
        font-weight="600"
      >
        condição?
      </text>
    </g>

    <!-- labels -->
    <text
      x="530"
      y="68"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      true → bloco if
    </text>
    <text
      x="530"
      y="246"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      false → bloco else
    </text>

    <!-- trem -->
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
const dormentesInicio = [60, 90, 120, 150, 180, 210, 240, 270]

const dormentesCima = [
  { x: 340, y: 140 },
  { x: 380, y: 120 },
  { x: 420, y: 100 },
  { x: 470, y: 90 },
  { x: 530, y: 90 },
  { x: 580, y: 90 },
]

const dormentesBaixo = [
  { x: 340, y: 160 },
  { x: 380, y: 180 },
  { x: 420, y: 200 },
  { x: 470, y: 210 },
  { x: 530, y: 210 },
  { x: 580, y: 210 },
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
