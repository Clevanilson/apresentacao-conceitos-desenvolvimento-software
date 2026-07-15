<template>
  <svg
    class="ilustracao"
    viewBox="0 0 640 280"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Classe como molde e objetos com dados agrupados dentro"
  >
    <rect width="640" height="280" rx="8" fill="#e6f1f3" />

    <!-- classe / molde -->
    <g transform="translate(40, 40)">
      <rect width="200" height="180" rx="10" fill="#ffffff" stroke="#1a5f6b" stroke-width="2" />
      <rect width="200" height="36" rx="10" fill="#1a5f6b" />
      <rect y="20" width="200" height="16" fill="#1a5f6b" />
      <text
        x="100"
        y="24"
        text-anchor="middle"
        fill="#ffffff"
        font-family="IBM Plex Sans, sans-serif"
        font-size="14"
        font-weight="600"
      >
        classe Cliente
      </text>
      <text
        x="20"
        y="64"
        fill="#5c6775"
        font-family="IBM Plex Mono, monospace"
        font-size="13"
      >
        String nome
      </text>
      <text
        x="20"
        y="92"
        fill="#5c6775"
        font-family="IBM Plex Mono, monospace"
        font-size="13"
      >
        String email
      </text>
      <text
        x="20"
        y="120"
        fill="#5c6775"
        font-family="IBM Plex Mono, monospace"
        font-size="13"
      >
        int idade
      </text>
      <text
        x="100"
        y="158"
        text-anchor="middle"
        fill="#8b96a3"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
      >
        molde
      </text>
    </g>

    <!-- seta -->
    <g stroke="#2dd4bf" stroke-width="3" fill="none">
      <path d="M260 130 H300" />
      <path d="M292 122 L300 130 L292 138" />
    </g>

    <!-- objeto 1 -->
    <g transform="translate(320, 28)">
      <rect width="140" height="110" rx="10" fill="#ffffff" stroke="#2dd4bf" stroke-width="2" />
      <text
        x="70"
        y="24"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Sans, sans-serif"
        font-size="13"
        font-weight="600"
      >
        cliente1
      </text>
      <text
        x="16"
        y="50"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
      >
        Ana
      </text>
      <text
        x="16"
        y="72"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
      >
        ana@email.com
      </text>
      <text
        x="16"
        y="94"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
      >
        28 anos
      </text>
    </g>

    <!-- objeto 2 -->
    <g transform="translate(480, 120)">
      <rect width="140" height="110" rx="10" fill="#ffffff" stroke="#2dd4bf" stroke-width="2" />
      <text
        x="70"
        y="24"
        text-anchor="middle"
        fill="#1a5f6b"
        font-family="IBM Plex Sans, sans-serif"
        font-size="13"
        font-weight="600"
      >
        cliente2
      </text>
      <text
        x="16"
        y="50"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
      >
        Bruno
      </text>
      <text
        x="16"
        y="72"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
      >
        bruno@email.com
      </text>
      <text
        x="16"
        y="94"
        fill="#5c6775"
        font-family="IBM Plex Sans, sans-serif"
        font-size="12"
      >
        35 anos
      </text>
    </g>
  </svg>
</template>

<style scoped>
.ilustracao {
  width: 100%;
  max-width: 640px;
  height: auto;
  display: block;
  border-radius: 6px;
}
</style>
