<script setup lang="ts">
import AnnouncementBanner from '../common/AnnouncementBanner.vue';
import Footer from '../common/Footer.vue';
import Header from '../common/Header.vue';
import OfflineBanner from '../common/OfflineBanner.vue';
</script>

<template>
    <div class="default-layout">
        <OfflineBanner />
        <AnnouncementBanner />
        <Header />

        <main>
            <RouterView />
        </main>

        <Footer />
    </div>
</template>