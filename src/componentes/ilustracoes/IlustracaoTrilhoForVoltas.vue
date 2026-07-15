<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 300"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="O trem completa três voltas no loop e depois sai pelo trilho principal"
  >
    <rect width="640" height="300" rx="8" fill="#e6f1f3" />

    <!-- trilho de saída (após o loop) -->
    <g stroke="#1a5f6b" stroke-width="4" fill="none">
      <path d="M500 150 H600" />
    </g>
    <g stroke="#2dd4bf" stroke-width="2">
      <line v-for="x in dormentesSaida" :key="'s' + x" :x1="x" y1="142" :x2="x" y2="158" />
    </g>

    <!-- loop -->
    <ellipse
      cx="280"
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

    <!-- placas das voltas -->
    <g transform="translate(130, 30)">
      <rect
        v-for="(v, i) in voltas"
        :key="'v' + i"
        :x="i * 78"
        y="0"
        width="70"
        height="28"
        rx="6"
        :fill="v.ativa ? '#1a5f6b' : '#ffffff'"
        :stroke="v.ativa ? '#1a5f6b' : '#8b96a3'"
        stroke-width="2"
      />
      <text
        v-for="(v, i) in voltas"
        :key="'t' + i"
        :x="i * 78 + 35"
        y="19"
        text-anchor="middle"
        :fill="v.ativa ? '#ffffff' : '#5c6775'"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
        font-weight="600"
      >
        {{ v.rotulo }}
      </text>
    </g>

    <!-- sinal: condição falsa → sai -->
    <g transform="translate(440, 70)">
      <rect x="14" y="0" width="6" height="70" rx="2" fill="#5c6775" />
      <circle cx="17" cy="18" r="18" fill="#5c6775" />
      <circle cx="17" cy="18" r="10" fill="#e2e6eb" />
      <text
        x="17"
        y="55"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
        font-weight="600"
      >
        false
      </text>
    </g>

    <!-- contador i -->
    <g transform="translate(230, 125)">
      <rect width="100" height="50" rx="8" fill="#ffffff" stroke="#1a5f6b" stroke-width="2" />
      <text
        x="50"
        y="22"
        text-anchor="middle"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="11"
      >
        contador
      </text>
      <text
        x="50"
        y="40"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Mono, monospace"
        font-size="14"
        font-weight="600"
      >
        i = 3
      </text>
    </g>

    <!-- trem saindo -->
    <g transform="translate(520, 128)">
      <rect x="0" y="8" width="58" height="24" rx="5" fill="#1a5f6b" />
      <rect x="38" y="0" width="24" height="16" rx="3" fill="#2dd4bf" />
      <circle cx="14" cy="36" r="6" fill="#1c2430" />
      <circle cx="44" cy="36" r="6" fill="#1c2430" />
    </g>

    <text
      x="280"
      y="270"
      text-anchor="middle"
      fill="#1a5f6b"
      font-family="IBM Plex Sans, sans-serif"
      font-size="13"
      font-weight="600"
    >
      i &lt; 3 ficou falso → o trem sai do loop
    </text>
  </svg>
</template>

<script setup lang="ts">
const dormentesSaida = [520, 555, 585]

const dormentesLoop = [
  { x1: 135, y1: 142, x2: 135, y2: 158 },
  { x1: 170, y1: 90, x2: 182, y2: 102 },
  { x1: 250, y1: 60, x2: 250, y2: 74 },
  { x1: 310, y1: 60, x2: 310, y2: 74 },
  { x1: 378, y1: 90, x2: 390, y2: 102 },
  { x1: 425, y1: 142, x2: 425, y2: 158 },
  { x1: 378, y1: 198, x2: 390, y2: 210 },
  { x1: 310, y1: 226, x2: 310, y2: 240 },
  { x1: 250, y1: 226, x2: 250, y2: 240 },
  { x1: 170, y1: 198, x2: 182, y2: 210 },
]

const voltas = [
  { rotulo: 'volta 1', ativa: true },
  { rotulo: 'volta 2', ativa: true },
  { rotulo: 'volta 3', ativa: true },
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
