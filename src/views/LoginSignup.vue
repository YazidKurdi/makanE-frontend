<template>
    <div class="min-h-screen py-4">
        <div class="container p-5">
            <div class="flex flex-col lg:flex-row text-[#D6D6D6] rounded-xl shadow-lg overflow-hidden">
                <!-- Register -->
                <div class="w-full flex flex-col items-center justify-center sm:p-2 p-6">
                    <div class="w-full sm:py-5 py-3 px-12">
                        <h2 class="text-3xl mb-4">Register</h2>
                        <p class="mb-4">
                            Create your account. It’s free and only take a minute
                        </p>
                        <form action="#">
                            <div class="grid grid-cols-2 gap-5">
                                <input type="text" placeholder="Firstname" class="border border-gray-400 py-1 px-2">
                                <input type="text" placeholder="Surname" class="border border-gray-400 py-1 px-2">
                            </div>
                            <div class="mt-5">
                                <input type="text" placeholder="Username" class="border border-gray-400 py-1 px-2 w-full">
                            </div>
                            <div class="mt-5">
                                <input type="password" placeholder="Password"
                                    class="border border-gray-400 py-1 px-2 w-full">
                            </div>
                            <div class="mt-5">
                                <input type="password" placeholder="Confirm Password"
                                    class="border border-gray-400 py-1 px-2 w-full">
                            </div>
                            <div class="mt-5">
                                <input type="checkbox" class="border border-gray-400">
                                <span>
                                    I accept the <a href="#" class="text-lightRed font-semibold">Terms of Use</a> & <a
                                        href="#" class="text-lightRed font-semibold">Privacy Policy</a>
                                </span>
                            </div>
                            <div class="mt-5">
                                <button class="w-full bg-lightRed py-3 text-center text-white">Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="hidden sm:inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100">
                </div>
                <!-- Login -->
                <div class="w-full flex flex-col items-center justify-center sm:p-2 p-6 bg-no-repeat bg-cover bg-center">
                    <div class="w-full sm:py-5 py-3 px-12">
                        <div class="">
                            <h2 class="text-3xl mb-4">Login</h2>
                            <p class="mb-4">
                                Login with your existing account to access your information
                            </p>
                        </div>
                        <form action="#">
                            <div class="mt-5">
                                <input type="text" placeholder="Email" class="border border-gray-400 py-1 px-2 w-full">
                            </div>
                            <div class="mt-5">
                                <input type="password" placeholder="Password"
                                    class="border border-gray-400 py-1 px-2 w-full">
                            </div>
                            <div class="sm:mt-[12.1rem] mt-5">
                                <button class="w-full bg-lightRed py-3 text-center text-white">Login Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <backButton></backButton>

</template>

<script setup>
import backButton from '../components/BackButton.vue';

</script>

<style scoped></style>