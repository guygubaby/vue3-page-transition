<template>
  <div text="center">
    <nav text-xl mt-6 inline-flex gap-2>
      <button class="icon-btn !outline-none" @click="toggleDark()">
        <div v-if="isDark" i-carbon-moon />
        <div v-else i-carbon-sun />
      </button>

      <a
        class="icon-btn"
        i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/guygubaby/monorepo-starter"
        target="_blank"
        title="GitHub"
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
