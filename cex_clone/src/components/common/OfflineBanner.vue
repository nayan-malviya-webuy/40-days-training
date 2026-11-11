<template>
    <div class="flex bg-yellow-300 px-20 justify-between py-4" v-if="!isOnline && isStripVisible">
        <div class="flex">
            <Info />

            <span class="flex">
                You are Currently offline
                <Dot />
                Browse seamlessly once you are back online.
            </span>

        </div>
        <button @click="closeStrip" class="cursor-pointer">
            <CircleX :size="28" />
        </button>
    </div>
</template>


<script setup>
import { CircleX, Dot, Info } from '@lucide/vue';
import { ref, onMounted, onUnmounted } from 'vue'

const isOnline = ref(navigator.onLine)
const isStripVisible = ref(!navigator.onLine)

const handleOffline = () => {
    isOnline.value = false
    isStripVisible.value = true
}

const handleOnline = () => {
    isOnline.value = true
    isStripVisible.value = false
}

const closeStrip = () => {
    isStripVisible.value = false
}

onMounted(() => {
    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)
})

onUnmounted(() => {
    window.removeEventListener('offline', handleOffline)
    window.removeEventListener('online', handleOnline)
})

</script>