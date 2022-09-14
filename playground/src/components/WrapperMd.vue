<template>
  <div font-sans m="t-4" class="max-w-900px m-auto text-left">
    <h1 text="center 3xl" mb6 font="sans" capitalize>
      {{ frontmatter?.title }}
    </h1>

    <slot class="markdown-body m-auto text-left" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  frontmatter: {
    title: string
  }
}>()
</script>
