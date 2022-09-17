---
title: get started
---

# Intro

A fork from [vue-page-transition](https://github.com/Orlandster/vue-page-transition) and make it work with Vue 3 


# Install

```bash
pnpm i vue3-page-transition
```

# Usage 

## 1. Use as component

```html
<template>
  <main>
    <router-view v-slot='{ Component }'>
      <PageTransition name='fade' appear>
        <component :is='Component' />
      </PageTransition>
    </router-view>
  </main>
</template>

<script lang='ts' setup>
import { PageTransition } from 'vue3-page-transition'
</script>
```

### 1.1 Define transition props

```html
<template>
  <main>
    <router-view v-slot='{ Component }'>
      <PageTransition v-bind='transitionProps'>
        <component :is='Component' />
      </PageTransition>
    </router-view>
  </main>
</template>

<script lang='ts' setup>
import { PageTransition, TransitionPresets, defineTransitionProps } from 'vue3-page-transition'

const transitionProps = defineTransitionProps({
  mode: 'out-in',
  name: TransitionPresets.fade,
  appear: true,
  overlay: true,
  overlayBg: '#818cf8', // or use overlayBgClassName: 'bg-violet-500'
  overlayZIndex: 999,
  transformDistance: '2rem',
  transitionDuration: 300,
})
</script>
```

## 2. Or register globally

```typescript
// main.ts
import { createApp } from 'vue'
import PageTransition from 'vue3-page-transition'

const app = createApp({...})
app.use(PageTransition) // Will registor PageTransition as a global component 
```
