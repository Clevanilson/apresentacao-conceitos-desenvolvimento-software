<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 280"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Trilho de trem com desvio: o trem chega a uma junção e a condição decide o caminho"
  >
    <!-- fundo -->
    <rect width="640" height="280" rx="8" fill="#e6f1f3" />

    <!-- trilho principal -->
    <g stroke="#5c6775" stroke-width="3" fill="none">
      <path d="M40 150 H320" />
      <path d="M320 150 Q400 150 460 100 H600" />
      <path d="M320 150 Q400 150 460 200 H600" />
    </g>

    <!-- dormentes (trilhos) -->
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

    <!-- poste / sinal da condição -->
    <g transform="translate(300, 48)">
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

    <!-- labels dos caminhos -->
    <text
      x="530"
      y="78"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      verdadeiro → entra no if
    </text>
    <text
      x="530"
      y="228"
      text-anchor="middle"
      fill="#5c6775"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      falso → segue em frente
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
  { x: 360, y: 140 },
  { x: 400, y: 125 },
  { x: 440, y: 112 },
  { x: 490, y: 100 },
  { x: 540, y: 100 },
  { x: 580, y: 100 },
]

const dormentesBaixo = [
  { x: 360, y: 160 },
  { x: 400, y: 175 },
  { x: 440, y: 188 },
  { x: 490, y: 200 },
  { x: 540, y: 200 },
  { x: 580, y: 200 },
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
