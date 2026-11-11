
<script setup>
import { Store, ChevronRight } from '@lucide/vue'
</script>

<template>
  <div
    class="relative w-full min-h-[50px] flex items-center justify-end px-6 md:px-[6%] bg-black bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://uk.webuy.com/patterns/base-pattern.svg')"
  >
    <!-- Black Overlay -->
    <div class="absolute inset-0 bg-black/20"></div>

    <!-- Content -->
    <button
      class="relative z-10 flex items-center gap-2.5 text-white text-sm md:text-base cursor-pointer hover:text-gray-200 transition-colors"
    >
      <Store :size="22" :stroke-width="2" />

      <span>
        <strong class="font-semibold">Nearest Store:</strong>
        Use your current location
      </span>

      <ChevronRight :size="20" />
    </button>
  </div>
</template>
