<template>
  <main font-sans p="x-4 y-10" text="gray-700 dark:gray-200">
    <router-view v-slot="{ Component }">
      <PageTransition v-bind="transitionProps">
        <component :is="Component" />
      </PageTransition>
    </router-view>
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import { PageTransition, defineTransitionProps } from 'vue3-page-transition'

const transitionProps = defineTransitionProps({
  overlay: true,
  overlayBgClassName: 'bg-violet-400',
  appear: true,
  name: 'fade-in-up',
})
</script>
