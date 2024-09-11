<script setup lang="ts"></script>

<!-- TODO: Fix FOUC if it happens on production -->
<template>
  <div class="flex flex-col pt-4 justify-center items-center gap-4">
    <!-- Router link to start a lobby -->
    <RouterLink
      to="/lobby"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >Create lobby</RouterLink
    >
    <div class="flex gap-4"></div>
  </div>
</template>
