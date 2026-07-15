<script setup lang="ts">
import { gruposApresentacao } from '@/dados/itensApresentacao'
import GrupoMenu from '@/componentes/GrupoMenu.vue'
</script>

<template>
  <aside class="menu-lateral">
    <div class="menu-lateral__marca">
      <p class="menu-lateral__marca-titulo">Conceitos</p>
      <p class="menu-lateral__marca-subtitulo">Desenvolvimento de software</p>
    </div>

    <nav class="menu-lateral__navegacao" aria-label="Apresentações">
      <GrupoMenu
        v-for="grupo in gruposApresentacao"
        :key="grupo.id"
        :titulo="grupo.titulo"
        :itens="grupo.itens"
      />
    </nav>
  </aside>
</template>

<style scoped>
.menu-lateral {
  display: flex;
  flex-direction: column;
  width: var(--largura-menu);
  flex-shrink: 0;
  height: 100%;
  background: var(--cor-menu-fundo);
  color: var(--cor-menu-texto);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
}

.menu-lateral__marca {
  padding: var(--espacamento-lg) var(--espacamento-md) var(--espacamento-md);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.menu-lateral__marca-titulo {
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02em;
}

.menu-lateral__marca-subtitulo {
  margin-top: 0.2rem;
  font-size: 0.8rem;
  color: var(--cor-menu-titulo);
}

.menu-lateral__navegacao {
  display: flex;
  flex-direction: column;
  gap: var(--espacamento-md);
  padding: var(--espacamento-md);
  overflow-y: auto;
}
</style>
