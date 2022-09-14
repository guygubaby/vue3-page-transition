<template>
  <main font-sans p="x-4 y-10" text="gray-700 dark:gray-200">
    <router-view v-slot="{ Component }">
      <PageTransition name="fade-in-up" appear>
        <component :is="Component" />
      </PageTransition>
    </router-view>
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import { PageTransition } from 'vue3-page-transition'
import 'vue3-page-transition/style.css'
</script>
