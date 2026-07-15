<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 260"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Quando a condição é verdadeira, o trem entra no desvio do if"
  >
    <rect width="640" height="260" rx="8" fill="#e6f1f3" />

    <!-- caminho não usado (apagado) -->
    <g stroke="#c5cdd6" stroke-width="3" fill="none" stroke-dasharray="6 6">
      <path d="M280 140 Q360 140 420 190 H600" />
    </g>

    <!-- caminho ativo (verdadeiro) -->
    <g stroke="#1a5f6b" stroke-width="4" fill="none">
      <path d="M40 140 H280" />
      <path d="M280 140 Q360 140 420 90 H600" />
    </g>

    <g stroke="#2dd4bf" stroke-width="2">
      <line v-for="x in dormentesInicio" :key="'i' + x" :x1="x" y1="132" :x2="x" y2="148" />
      <line
        v-for="(p, i) in dormentesAtivos"
        :key="'a' + i"
        :x1="p.x"
        :y1="p.y - 8"
        :x2="p.x"
        :y2="p.y + 8"
      />
    </g>

    <!-- sinal verde -->
    <g transform="translate(248, 40)">
      <rect x="14" y="0" width="6" height="88" rx="2" fill="#5c6775" />
      <circle cx="17" cy="18" r="22" fill="#1a5f6b" />
      <circle cx="17" cy="18" r="12" fill="#2dd4bf" />
      <text
        x="17"
        y="62"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Sans, sans-serif"
        font-size="13"
        font-weight="600"
      >
        true
      </text>
    </g>

    <!-- bloco if -->
    <g transform="translate(470, 18)">
      <rect width="140" height="48" rx="8" fill="#ffffff" stroke="#1a5f6b" stroke-width="2" />
      <text
        x="70"
        y="20"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Mono, monospace"
        font-size="13"
        font-weight="600"
      >
        { bloco if }
      </text>
      <text
        x="70"
        y="38"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="11"
      >
        executa
      </text>
    </g>

    <!-- trem no desvio -->
    <g transform="translate(500, 68)">
      <rect x="0" y="8" width="58" height="24" rx="5" fill="#1a5f6b" />
      <rect x="38" y="0" width="24" height="16" rx="3" fill="#2dd4bf" />
      <circle cx="14" cy="36" r="6" fill="#1c2430" />
      <circle cx="44" cy="36" r="6" fill="#1c2430" />
    </g>
  </svg>
</template>

<script setup lang="ts">
const dormentesInicio = [70, 110, 150, 190, 230]

const dormentesAtivos = [
  { x: 320, y: 130 },
  { x: 360, y: 115 },
  { x: 400, y: 100 },
  { x: 450, y: 90 },
  { x: 510, y: 90 },
  { x: 560, y: 90 },
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
