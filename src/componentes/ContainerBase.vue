<script setup lang="ts"></script>

<template>
  <div class="container-base">
    <slot />
  </div>
</template>

<style scoped>
.container-base {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: var(--espacamento-xl);
  min-height: 100%;
}
</style>
