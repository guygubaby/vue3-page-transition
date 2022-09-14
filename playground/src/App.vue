<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import { name } from '../../packages/core/package.json'

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const getPackageName = () => {
  let title = name
  if (title.includes('/'))
    title = title.split('/').pop()!

  return capitalize(title)
}

useHead({
  title: `${getPackageName()} - Playground`,
  meta: [
    {
      name: 'description',
      content: 'Youngblood thinks there\'s always tomorrow.',
    },
  ],
})
</script>
