<script setup lang="ts"></script>

<template>
  <div class="flex flex-col pt-4 justify-center items-center gap-4">
    <p class="text-3xl">Select a gamemode</p>
    <!-- Buttons to select the game mode -->
    <div class="flex flex-row gap-4">
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        @click="() => $router.push('/lobby/playlist')"
      >
        YouTube Playlist
      </button>
      <button
        class="bg-green-400 opacity-75 text-white font-bold py-2 px-4 rounded"
        @click="() => {}"
      >
        Spotify Playlist
      </button>
      <button
        class="bg-blue-400 opacity-75 text-white font-bold py-2 px-4 rounded"
        @click="() => {}"
      >
        AniList API
      </button>
    </div>
    <!-- Input field for URL -->
    <div class="flex flex-col gap-4">
      <input
        type="text"
        id="url"
        name="url"
        class="border border-blue-400 rounded mt-4 w-full size-auto text-black"
        placeholder="https://youtube.com/playlist?list=..."
      />
    </div>
  </div>

  <div class="flex flex-col pt-4 justify-center items-center gap-4">
    <button
      class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      @click="() => {}"
    >
      Invite friends
    </button>

    <button
      class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
      @click="() => {}"
    >
      Start game
    </button>
  </div>
</template>
