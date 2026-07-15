<script setup lang="ts">
import { usarNavegacaoSequencial } from '@/composaveis/usarNavegacaoSequencial'

const { itemAnterior, itemProximo, irParaAnterior, irParaProximo } =
  usarNavegacaoSequencial()
</script>

<template>
  <div class="navegacao-setas">
    <button
      type="button"
      class="navegacao-setas__botao"
      :disabled="!itemAnterior"
      :aria-label="itemAnterior ? `Anterior: ${itemAnterior.titulo}` : 'Início da sequência'"
      @click="irParaAnterior"
    >
      <span aria-hidden="true">←</span>
      <span class="navegacao-setas__rotulo">
        {{ itemAnterior?.titulo ?? 'Início' }}
      </span>
    </button>

    <button
      type="button"
      class="navegacao-setas__botao navegacao-setas__botao--direita"
      :disabled="!itemProximo"
      :aria-label="itemProximo ? `Próximo: ${itemProximo.titulo}` : 'Fim da sequência'"
      @click="irParaProximo"
    >
      <span class="navegacao-setas__rotulo">
        {{ itemProximo?.titulo ?? 'Fim' }}
      </span>
      <span aria-hidden="true">→</span>
    </button>
  </div>
</template>

<style scoped>
.navegacao-setas {
  display: flex;
  justify-content: space-between;
  gap: var(--espacamento-md);
  padding: var(--espacamento-md) var(--espacamento-xl);
  border-top: 1px solid var(--cor-borda);
  background: var(--cor-superficie);
}

.navegacao-setas__botao {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  max-width: 45%;
  padding: 0.55rem 0.85rem;
  border-radius: 8px;
  color: var(--cor-texto-suave);
  font-size: 0.875rem;
  transition: background 0.15s ease, color 0.15s ease;
}

.navegacao-setas__botao:hover:not(:disabled) {
  background: var(--cor-destaque-suave);
  color: var(--cor-destaque);
}

.navegacao-setas__botao:disabled {
  opacity: 0.35;
  cursor: default;
}

.navegacao-setas__botao--direita {
  margin-left: auto;
  text-align: right;
}

.navegacao-setas__rotulo {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
