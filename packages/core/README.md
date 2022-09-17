# vue3-page-transition

## [Live Demo](https://vue3-page-transition.netlify.app/)

## A fork from [vue-page-transition](https://github.com/Orlandster/vue-page-transition) and make it work with Vue 3

[![NPM version](https://img.shields.io/npm/v/vue3-page-transition?color=a1b858&label=)](https://www.npmjs.com/package/vue3-page-transition)

## Get Started

```bash
pnpm i vue3-page-transition
```

```html
<template>
  <main>
    <router-view v-slot="{ Component }">
      <PageTransition :name="TransitionPresets.fade" appear>
        <component :is="Component" />
      </PageTransition>
    </router-view>
  </main>
</template>

<script lang="ts" setup>
import { PageTransition, TransitionPresets } from 'vue3-page-transition'

// Or in main.ts
import { createApp } from 'vue'
import PageTransition from 'vue3-page-transition'

const app = createApp({...})
app.use(PageTransition)
</script>
```

## License

[MIT](./LICENSE) License © 2022 [guygubaby](https://github.com/guygubaby)
