<template>
  <main font-sans p="x-4 y-10" text="gray-700 dark:gray-200">
    <router-view v-slot="{ Component }">
      <PageTransition :name="TransitionPresets.fadeInUp" appear>
        <component :is="Component" />
      </PageTransition>
    </router-view>
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import { PageTransition, TransitionPresets } from 'vue3-page-transition'
</script>
