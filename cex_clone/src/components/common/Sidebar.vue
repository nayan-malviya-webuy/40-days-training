
<script setup>
import { X } from '@lucide/vue'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50">

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-black/50"
      @click="emit('close')"
    ></div>

    <!-- Sidebar -->
    <aside
      class="absolute left-0 top-0 h-full w-[300px] bg-white text-gray-800 shadow-xl p-5"
    >
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-xl font-bold">Menu</h2>

        <button @click="emit('close')">
          <X :size="24" />
        </button>
      </div>

      <nav class="flex flex-col gap-5 font-medium">
        <a href="#">Home</a>
        <a href="#">Gaming</a>
        <a href="#">Phones</a>
        <a href="#">Computing</a>
        <a href="#">Electronics</a>
        <a href="#">Film & TV</a>
        <a href="#">New Accessories</a>
        <a href="#">Apparel</a>
      </nav>
    </aside>

  </div>
</template>
