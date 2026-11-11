<script setup>
import {
    Menu,
    Search,
    UserRound,
    ShoppingBasket
} from '@lucide/vue'

import logo from '@/assets/images/logo.png'

import Sidebar from './Sidebar.vue'
import { ref } from 'vue';


const isSidebarOpen = ref(false)
</script>

<template>
    <header class="w-full bg-[#e20a03] text-white">

        <!-- Main Header -->
        <div class="flex items-center gap-6 px-5 md:px-8 lg:px-12 py-5">

            <!-- Menu -->
            <button class="flex flex-col items-center gap-1 shrink-0 cursor-pointer" @click="isSidebarOpen = true">
                <Menu :size="34" :stroke-width="2.5" />
                <span class="text-sm font-semibold">Menu</span>
            </button>


            <!-- Logo -->
            <div class="shrink-0 mx-2 cursor-pointer">
                <img :src="logo" alt="logo">
            </div>

            <!-- Search -->
            <div class="flex-1 relative">
                <input type="text" placeholder="What do you want to buy?"
                    class="w-full h-[56px] rounded-full bg-white text-gray-800 placeholder:text-gray-500 px-5 pr-14 outline-none text-lg" />

                <Search :size="23" class="absolute right-6 top-1/2 -translate-y-1/2 text-black" />
            </div>

            <!-- Sign In -->
            <button class="hidden md:flex flex-col items-center gap-1 shrink-0 cursor-pointer">
                <UserRound :size="27" :stroke-width="2.5" />
                <span class="text-sm font-semibold">Sign in</span>
            </button>

            <!-- Basket -->
            <button class="hidden md:flex flex-col items-center gap-1 shrink-0 cursor-pointer">
                <ShoppingBasket :size="27" :stroke-width="2.5" />
                <span class="text-sm font-semibold">Basket</span>
            </button>

            <!-- Sell Button -->
            <button
                class="hidden sm:block shrink-0 rounded-full bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-100 transition cursor-pointer">
                Sell to CeX
            </button>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center justify-center gap-8 pb-4 px-4">
            <a href="#" class="font-semibold hover:underline">Home</a>
            <a href="#" class="font-semibold hover:underline">Gaming</a>
            <a href="#" class="font-semibold hover:underline">Phones</a>
            <a href="#" class="font-semibold hover:underline">Computing</a>
            <a href="#" class="font-semibold hover:underline">Electronics</a>
            <a href="#" class="font-semibold hover:underline">Film & TV</a>
            <a href="#" class="font-semibold hover:underline">New Accessories</a>
            <a href="#" class="font-semibold hover:underline">Apparel</a>
        </nav>

    </header>

    <!-- Sidebar -->
            <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
</template>
