<script setup lang="ts">
</script>

<template>
  <p class="text-center">
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <main>
    <RouterView />
  </main>
</template>
