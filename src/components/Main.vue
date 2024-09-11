<script setup lang="ts"></script>

<!-- TODO: Fix FOUC if it happens on production -->
<template>
  <div class="flex flex-col pt-4 justify-center items-center gap-4">
    <!-- Router link to start a lobby -->
    <router-link to="/play" class="btn btn-primary">Create lobby</router-link>
    <!-- Router link to play solo -->
    <router-link to="/play/solo" class="btn btn-secondary"
      >Play solo</router-link
    >
    <h3 class="text-slate-300">
      Click
      <a
        href="https://www.youtube.com/feed/playlists"
        class="text-blue-400 italic"
        target="_blank"
        rel="noopener noreferrer"
        >here</a
      >
      to view your playlists
    </h3>
    <div class="flex gap-4"></div>
  </div>
</template>
