<template>
    <!-- Search Bar -->
    <div class="flex p-4 text-[16px]">
        <div class="flex rounded-3xl items-center flex-grow bg-blackGrey-50 p-2 max-h-[42px]">
            <div class="flex items-center justify-center px-2 py-1">
                <font-awesome-icon icon="fa-solid fa-search" class="flex items-center text-lightWhite-50" />
            </div>
            <input v-model="searchQuery" @input="debouncedSearch" @keydown.enter="debouncedSearch"
                placeholder="Search for menu items"
                class="text-lightWhite-50 bg-blackGrey-50 w-full outline-none py-[1px] px-0.5 placeholder:text-lightWhite-50" />
            <div class="flex items-center justify-center px-2 py-1">
                <font-awesome-icon @click="clearView" icon="fa-solid fa-times-circle"
                    class="flex items-center text-lightWhite-50 hover:text-slate-300 hover:cursor-pointer" />
            </div>
        </div>
        <div @click="router.go(-1)" class="hover:cursor-pointer flex align-center p-3 text-lightWhite-50">Cancel</div>
    </div>
    <!-- Empty Response View -->
    <div v-show="responseEmpty" class="flex flex-col text-center text-lightWhite-50 space-y-2 mt-8">
        <span>No Matching Results</span>
        <span>We're sorry but we could not find any items matching your search query.</span>
    </div>
    <!-- Menu Items -->
    <div v-if="menuItemsList && menuItemsList.length > 0">
        <MenuItem v-for="menuItem in menuItemsList" :key="menuItem.name" :menuItem="menuItem"
            :entireDivRouterLink="false" />
    </div>
    <!-- Loading Spinner -->
    <div role="status" v-show="isLoading" class="flex item-center justify-center p-2 mt-10">
        <svg aria-hidden="true" class="w-12 h-12 mr-2 mt-1 text-gray-200 animate-spin fill-slate-500" viewBox="0 0 100 101"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
        </svg>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { debounce } from 'lodash'
import router from '../router';
import axios from 'axios';
import MenuItem from '../components/MenuItem.vue';

// return search query items activated with a delay of 0.5 seconds after user stops typing, enables/disables loading
const searchQuery = ref('');
const isLoading = ref(false);
const menuItemsList = ref([]);
const responseEmpty = ref(false);

const debouncedSearch = debounce(async () => {

    isLoading.value = true;
    if (searchQuery.value) {
        try {
            const response = await axios.get(`/api/?search=${searchQuery.value}`);
            menuItemsList.value = response.data
            responseEmpty.value = menuItemsList.value.length === 0
        } catch (error) {
            isLoading.value = false;
        }
    }
    isLoading.value = false;
}, 500); // Wait for 1 second after user stops typing

// clear search query
const clearView = () => {
    searchQuery.value = '';
    menuItemsList.value = [];
    responseEmpty.value = false;
}

</script>
  
<style lang="scss" scoped></style>
  