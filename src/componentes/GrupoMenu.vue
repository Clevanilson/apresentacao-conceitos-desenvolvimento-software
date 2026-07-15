<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { ItemApresentacao } from '@/dados/itensApresentacao'
import ItemMenu from '@/componentes/ItemMenu.vue'

const props = defineProps<{
  titulo: string
  itens: ItemApresentacao[]
}>()

const rota = useRoute()
const aberto = ref(true)

const possuiItemAtivo = computed(() =>
  props.itens.some((item) => item.caminho === rota.path),
)

watch(
  possuiItemAtivo,
  (ativo) => {
    if (ativo) aberto.value = true
  },
  { immediate: true },
)

function alternar() {
  aberto.value = !aberto.value
}
</script>

<template>
  <div class="grupo-menu">
    <button
      type="button"
      class="grupo-menu__cabecalho"
      :aria-expanded="aberto"
      @click="alternar"
    >
      <span class="grupo-menu__titulo">{{ titulo }}</span>
      <span class="grupo-menu__icone" :class="{ 'grupo-menu__icone--aberto': aberto }">
        ›
      </span>
    </button>

    <div v-show="aberto" class="grupo-menu__itens">
      <ItemMenu
        v-for="item in itens"
        :key="item.id"
        :titulo="item.titulo"
        :caminho="item.caminho"
        :ativo="rota.path === item.caminho"
      />
    </div>
  </div>
</template>

<style scoped>
.grupo-menu {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.grupo-menu__cabecalho {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--espacamento-sm);
  width: 100%;
  padding: 0.6rem 0.85rem;
  border-radius: 8px;
  text-align: left;
  color: var(--cor-menu-titulo);
  transition: background 0.15s ease;
}

.grupo-menu__cabecalho:hover {
  background: rgba(255, 255, 255, 0.04);
}

.grupo-menu__titulo {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.4;
}

.grupo-menu__icone {
  flex-shrink: 0;
  font-size: 1rem;
  line-height: 1;
  transition: transform 0.15s ease;
  transform: rotate(0deg);
}

.grupo-menu__icone--aberto {
  transform: rotate(90deg);
}

.grupo-menu__itens {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding-left: 0.35rem;
}
</style>
