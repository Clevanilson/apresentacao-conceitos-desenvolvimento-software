<script setup lang="ts">
defineProps<{
  titulo: string
  caminho: string
  ativo: boolean
}>()
</script>

<template>
  <RouterLink
    :to="caminho"
    class="item-menu"
    :class="{ 'item-menu--ativo': ativo }"
  >
    {{ titulo }}
  </RouterLink>
</template>

<style scoped>
.item-menu {
  display: block;
  padding: 0.55rem 0.85rem;
  border-radius: 8px;
  color: var(--cor-menu-texto);
  font-size: 0.9rem;
  transition: background 0.15s ease, color 0.15s ease;
}

.item-menu:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
}

.item-menu--ativo {
  background: rgba(45, 212, 191, 0.14);
  color: var(--cor-menu-ativo);
  font-weight: 500;
}
</style>
