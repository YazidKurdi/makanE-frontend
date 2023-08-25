<template>
  <div class="min-h-screen bg-blackGrey-50">
    <div class="max-w-[640pt] bg-blackGrey-100 mx-auto w-full flex flex-grow flex-col min-h-screen">
      <router-view />
    </div>
  </div>
</template>

<script setup>

import { useBasketStore } from './store/basket';

const basketStore = useBasketStore()

basketStore.initializeStore()

</script>