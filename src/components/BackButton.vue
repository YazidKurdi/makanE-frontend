<template>
    <div class="absolute flex items-center justify-center z-10 rounded-[50%] bg-blackGrey-100 text-lightRed top-5 left-5 text-2xl w-[42pt] h-[42pt] hover:cursor-pointer"
        @click="goBack">
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-lightRed" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
</style>
