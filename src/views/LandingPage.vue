<template>
    <!-- Navbar -->
    <div class="flex flex-row-reverse justify-between items-center px-7 py-2.5 min-h-[60px] text-slate-200 sm:flex-row">
        <!-- Branch Button Wide Screen -->
        <div data-modal-target="defaultModal" data-modal-toggle="defaultModal"
            class="hidden justify-center items-center text-center px-6 py-2 bg-lightRed space-x-[10px] rounded-lg sm:flex hover:cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-location-dot" class="text-slate-200" />
            <span>Abdallah Ghosheh Street Branch</span>
            <font-awesome-icon icon="fa-solid fa-angle-down" class="text-slate-200" />
        </div>
        <!-- Language / Login -->
        <div class="flex items-center space-x-12">
            <!-- Language -->
            <div class="flex items-center justify-center hover:cursor-pointer space-x-1">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 18C7.77 18 6.6075 17.7636 5.5125 17.2908C4.4175 16.8186 3.4614 16.1736 2.6442 15.3558C1.8264 14.5386 1.1814 13.5825 0.7092 12.4875C0.2364 11.3925 0 10.23 0 9C0 7.755 0.2364 6.5889 0.7092 5.5017C1.1814 4.4139 1.8264 3.4614 2.6442 2.6442C3.4614 1.8264 4.4175 1.1811 5.5125 0.7083C6.6075 0.2361 7.77 0 9 0C10.245 0 11.4111 0.2361 12.4983 0.7083C13.5861 1.1811 14.5386 1.8264 15.3558 2.6442C16.1736 3.4614 16.8186 4.4139 17.2908 5.5017C17.7636 6.5889 18 7.755 18 9C18 10.23 17.7636 11.3925 17.2908 12.4875C16.8186 13.5825 16.1736 14.5386 15.3558 15.3558C14.5386 16.1736 13.5861 16.8186 12.4983 17.2908C11.4111 17.7636 10.245 18 9 18ZM9 16.155C9.39 15.615 9.7275 15.0525 10.0125 14.4675C10.2975 13.8825 10.53 13.26 10.71 12.6H7.29C7.47 13.26 7.7025 13.8825 7.9875 14.4675C8.2725 15.0525 8.61 15.615 9 16.155ZM6.66 15.795C6.39 15.3 6.1539 14.7861 5.9517 14.2533C5.7489 13.7211 5.58 13.17 5.445 12.6H2.79C3.225 13.35 3.7686 14.0025 4.4208 14.5575C5.0736 15.1125 5.82 15.525 6.66 15.795ZM11.34 15.795C12.18 15.525 12.9261 15.1125 13.5783 14.5575C14.2311 14.0025 14.775 13.35 15.21 12.6H12.555C12.42 13.17 12.2514 13.7211 12.0492 14.2533C11.8464 14.7861 11.61 15.3 11.34 15.795ZM2.025 10.8H5.085C5.04 10.5 5.0061 10.2036 4.9833 9.9108C4.9611 9.6186 4.95 9.315 4.95 9C4.95 8.685 4.9611 8.3814 4.9833 8.0892C5.0061 7.7964 5.04 7.5 5.085 7.2H2.025C1.95 7.5 1.8936 7.7964 1.8558 8.0892C1.8186 8.3814 1.8 8.685 1.8 9C1.8 9.315 1.8186 9.6186 1.8558 9.9108C1.8936 10.2036 1.95 10.5 2.025 10.8ZM6.885 10.8H11.115C11.16 10.5 11.1939 10.2036 11.2167 9.9108C11.2389 9.6186 11.25 9.315 11.25 9C11.25 8.685 11.2389 8.3814 11.2167 8.0892C11.1939 7.7964 11.16 7.5 11.115 7.2H6.885C6.84 7.5 6.8064 7.7964 6.7842 8.0892C6.7614 8.3814 6.75 8.685 6.75 9C6.75 9.315 6.7614 9.6186 6.7842 9.9108C6.8064 10.2036 6.84 10.5 6.885 10.8ZM12.915 10.8H15.975C16.05 10.5 16.1064 10.2036 16.1442 9.9108C16.1814 9.6186 16.2 9.315 16.2 9C16.2 8.685 16.1814 8.3814 16.1442 8.0892C16.1064 7.7964 16.05 7.5 15.975 7.2H12.915C12.96 7.5 12.9936 7.7964 13.0158 8.0892C13.0386 8.3814 13.05 8.685 13.05 9C13.05 9.315 13.0386 9.6186 13.0158 9.9108C12.9936 10.2036 12.96 10.5 12.915 10.8ZM12.555 5.4H15.21C14.775 4.65 14.2311 3.9975 13.5783 3.4425C12.9261 2.8875 12.18 2.475 11.34 2.205C11.61 2.7 11.8464 3.2136 12.0492 3.7458C12.2514 4.2786 12.42 4.83 12.555 5.4ZM7.29 5.4H10.71C10.53 4.74 10.2975 4.1175 10.0125 3.5325C9.7275 2.9475 9.39 2.385 9 1.845C8.61 2.385 8.2725 2.9475 7.9875 3.5325C7.7025 4.1175 7.47 4.74 7.29 5.4ZM2.79 5.4H5.445C5.58 4.83 5.7489 4.2786 5.9517 3.7458C6.1539 3.2136 6.39 2.7 6.66 2.205C5.82 2.475 5.0736 2.8875 4.4208 3.4425C3.7686 3.9975 3.225 4.65 2.79 5.4Z"
                        fill="#ffffff">
                    </path>
                </svg>
                <span class="mb-1.5">
                    عربي
                </span>
            </div>
            <!-- Login -->
            <router-link to="/register" class="flex items-center hover:cursor-pointer">
                <font-awesome-icon icon="fa-solid fa-user" style="color: #ffffff;" />
                <span class="ml-2">Login</span>
            </router-link>
        </div>
    </div>
    <!-- Modal -->
    <div id="defaultModal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="bg-blackGrey-50 relativ rounded-sm shadow">
                <!-- Modal body -->
                <div class="flex flex-col p-6 space-y-6 text-slate-200">
                    <p class="text-base leading-relaxed text-center">
                        Choose the nearest branch
                    </p>
                    <div
                        class="hidden justify-center items-center text-center px-6 py-2 bg-lightRed space-x-[10px] rounded-lg sm:flex hover:cursor-pointer">
                        <span>Down Town Branch</span>
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-slate-200" />
                    </div>
                    <div
                        class="hidden justify-center items-center text-center px-6 py-2 bg-lightRed space-x-[10px] rounded-lg sm:flex hover:cursor-pointer">
                        <span>Abdallah Ghosheh Street Branch</span>
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-slate-200" />
                    </div>
                    <div class="flex flex-col items-center justify-center p-2 mt-2 text-slate-600">
                        <button data-modal-hide="defaultModal" class="text-center bg-[#F3F3F3] py-2 px-8 rounded-lg">
                            Skip
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Image -->
    <div class="h-56">
        <img class="h-full w-full object-cover" src="../assets/banner-58614072241.png">
    </div>
    <!-- Branch / Search -->
    <div class="flex flex-col space-y-3 p-3">
        <!-- Branch Button Mobile -->
        <div
            class="flex justify-center items-center text-center px-6 py-2 bg-lightRed text-slate-200 space-x-[10px] rounded-lg sm:hidden">
            <font-awesome-icon icon="fa-solid fa-location-dot" class="text-slate-200" />
            <span>Abdallah Ghosheh Street Branch</span>
            <font-awesome-icon icon="fa-solid fa-angle-down" class="text-slate-200" />
        </div>
        <router-link to="/search" class="flex flex-grow rounded-3xl bg-blackGrey-50 p-2">
            <font-awesome-icon icon="fa-solid fa-search" class="p-2 flex items-center text-lightWhite-50" />
            <input placeholder="Search for menu items" class="placeholder:text-lightWhite-50 bg-blackGrey-50 outline-none">
        </router-link>
    </div>
    <!-- Sliding Menu Bar -->
    <div class="flex items-center space-x-6 overflow-y-hidden px-3 text-lightWhite-100 text-sm shadow-md shadow-blackGrey-50">
        <div v-for="(category, index) in menuItemsList" :id="'scroll-' + (index + 1)"
            class="border-b-transparent border-b-2 hover:cursor-pointer hover:border-b-2 hover:border-b-lightRed p-3"
            :class="{ '!border-b-lightRed': activeTab === category.name }" @click="setActiveTab(category.name)">
            {{ category.name }}
        </div>
    </div>
    <!-- Gif -->
    <div class="py-6 px-8">
        <img src="../assets/shawerma.gif">
    </div>
    <!-- Accordion -->
    <div id="accordion-collapse" data-active-classes="bg-blackGrey-100 text-lightRed border-lightRed" data-accordion="open"
        class="flex flex-col space-y-6 px-5 py-8">
        <div v-for="(section, index) in menuItemsList" :key="index">
            <h2 :id="'accordion-collapse-heading-' + (index + 1)" class="text-lightWhite-50">
                <button type="button"
                    class="flex items-center justify-between w-full p-5 font-medium text-left text-lightWhite-50 border border-lightWhite-50 rounded-md"
                    :data-accordion-target="'#accordion-collapse-body-' + (index + 1)"
                    :aria-expanded="(index + 1) === 0 ? 'true' : 'false'"
                    :aria-controls="'accordion-collapse-body-' + (index + 1)">
                    <div class="flex space-x-2">
                        <span class="font-bold text-lg">{{ section.name }}</span>
                        <span class="mt-1 text-lightWhite-50">({{ section.menu_items.length }})</span>
                    </div>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0 text-lightWhite-50" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div :id="'accordion-collapse-body-' + (index + 1)" class="hidden"
                :aria-labelledby="'accordion-collapse-heading-' + (index + 1)">
                <div class="p-1 grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <MenuItem v-for="(menuItem, itemIndex) in section.menu_items" :key="itemIndex" :menu-item="menuItem"
                        :entireDivRouterLink="true">
                    </MenuItem>
                </div>
            </div>
        </div>
    </div>
    <!-- Logo / Policy -->
    <div class="flex flex-col flex-wrap px-3 pb-14 space-y-3 mb-20 text-white">
        <div class="flex justify-center flex-wrap mb-2 space-x-6">
            <div class="p3 h-[24px]">
                <img class="w-full h-full" src="../assets/cashondelivery.png" alt="">
            </div>
            <div class="p3 h-[24px]">
                <img class="w-full h-full" src="../assets/logo-no-background.png" alt="">
            </div>
        </div>
        <div class="flex justify-center items-center flex-wrap text-sm">
            <div class="flex justify center items-center">
                <div class="p-1 hover:cursor-pointer">Terms and Conditions</div>
                <div class="p-1 hover:cursor-pointer">|</div>
            </div>
            <div class="flex justify center items-center">
                <div class="p-1 hover:cursor-pointer">Privacy Policy</div>
                <div class="p-1 hover:cursor-pointer">|</div>
            </div>
            <div class="flex justify center items-center">
                <div class="p-1 hover:cursor-pointer">Cancelation & Refund Policy</div>
                <div class="p-1 hover:cursor-pointer">|</div>
            </div>
            <div class="flex justify center items-center">
                <div class="p-1 hover:cursor-pointer">Shipping & Delivery Policy</div>
            </div>
        </div>
        <div class="flex justify-center items-center flex-wrap text-sm ">
            <img src="../assets/facebook.png" class="h-[36px] hover:cursor-pointer">
        </div>
        <div class="flex justify-center items-center flex-wrap text-sm">
            <span class="text-center"> This site is protected by reCAPTCHA and the google Privacy Policy and Terms of
                Service apply.</span>
        </div>
    </div>
    <!-- Checkout -->
    <footer v-if="basketStore.items.length > 0"
        class="flex items-center justify-center fixed w-full max-w-[640pt] bottom-0 border-t-2 border-t-blackGrey-50 p-5 bg-blackGrey-100">
        <router-link to="/basket" class="mx-auto flex text-slate-200 items-center justify-center bg-lightRed rounded-xl p-3 space-x-6 hover:bg-red-900 active:relative active:top-0.5">
            <div class="w-[30px] h-[30px] flex items-center justify-center border border-slate-200 rounded-full">
                <span> {{ basketStore.itemCount }}</span>
            </div>
            <span> View Basket </span>
            <span class="flex items-center text-slate-200"> {{ basketStore.sumTotal }} JD</span>
        </router-link>
    </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { initFlowbite } from 'flowbite'
import { useBasketStore } from '../store/basket';
import axios from "axios";

import MenuItem from "../components/MenuItem.vue";

const basketStore = useBasketStore();

const menuItemsList = ref({});

// Define refs for event listeners
const menuItems = ref([]);
const accordionDivs = ref([]);
const headings = ref([]);


const getMenu = async () => {

    try {
        const response = await axios.get('/api/menu-list/')
        menuItemsList.value = response.data

    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {

    await getMenu()
    initFlowbite()

    menuItems.value = document.querySelectorAll("[id^='scroll-']");
    accordionDivs.value = document.querySelectorAll("[id^='accordion-collapse-body-']");
    headings.value = document.querySelectorAll("[id^='accordion-collapse-heading-']");

    // Attach event listeners to each menu item
    menuItems.value.forEach((menuItem, index) => {
        menuItem.addEventListener("click", () => {
            const accordionDiv = accordionDivs.value[index];
            const heading = headings.value[index];
            const button = heading.querySelector("button"); // Replace with the actual class name of the button
            const isHidden = accordionDiv.classList.contains("hidden");
            
            if (isHidden) {
                // Scroll to the heading only if the accordion is being closed
                heading.scrollIntoView({ behavior: "smooth" });
            }

            // Toggle the accordion visibility and button classes
            accordionDiv.classList.toggle("hidden");
            button.classList.toggle("border-lightRed");
            button.classList.toggle("text-lightRed");


        });
    });

});



const activeTab = ref("");

function setActiveTab(tabName) {
    activeTab.value = tabName;
}




</script>