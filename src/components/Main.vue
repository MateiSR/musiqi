<script setup lang="ts"></script>

<!-- TODO: Fix FOUC if it happens on production -->
<template>
  <div class="flex flex-col pt-4 justify-center items-center gap-4">
    <p class="text-3xl text-slate-300">Check it out!</p>
    <!-- Router link to start a lobby -->
    <RouterLink
      to="/lobby"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >Create lobby</RouterLink
    >

    <RouterLink
      to="/browse"
      class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
      >Browse games</RouterLink
    >

    <RouterLink
      to="/faq"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >Info (FAQ)</RouterLink
    >
  </div>
</template>
