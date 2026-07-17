<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MenuLateral from '@/componentes/MenuLateral.vue'
import NavegacaoSetas from '@/componentes/NavegacaoSetas.vue'

const rota = useRoute()
const principal = ref<HTMLElement | null>(null)

watch(
  () => rota.fullPath,
  () => {
    principal.value?.scrollTo({ top: 0, left: 0 })
  },
)
</script>

<template>
  <div class="layout-apresentacao">
    <MenuLateral />

    <div class="layout-apresentacao__conteudo">
      <main ref="principal" class="layout-apresentacao__principal">
        <slot />
      </main>

      <NavegacaoSetas />
    </div>
  </div>
</template>

<style scoped>
.layout-apresentacao {
  display: flex;
  height: 100%;
  min-height: 100vh;
}

.layout-apresentacao__conteudo {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  background:
    radial-gradient(ellipse 80% 50% at 100% 0%, rgba(26, 95, 107, 0.06), transparent 55%),
    var(--cor-fundo);
}

.layout-apresentacao__principal {
  flex: 1;
  overflow-y: auto;
}
</style>
