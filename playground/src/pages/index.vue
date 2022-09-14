<template>
  <div flex items-center justify-center w-full>
    <div flex="~ col" items-center container>
      <h1 text="2xl" leading-8 mb-10>
        Vue3 page transition
      </h1>

      <ul flex="~" gap-4 max-w-screen overflow-x-auto pb-2 px="4 lg:0">
        <li v-for="item in TransitionPresets" :key="item">
          <button class="icon-btn" @click="setTransitionName(item)">
            {{ item }}
          </button>
        </li>
      </ul>

      <PageTransition appear :name="transitionName" overlay>
        <div v-if="isShow" w-70 h-70 my-10 rounded-xl flex items-center justify-center bg-violet-500>
          Click transition from top
        </div>
      </PageTransition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITransitionName } from 'vue3-page-transition'
import { PageTransition, TransitionPresets } from 'vue3-page-transition'

const isShow = ref(true)

const triggerTransition = async () => {
  isShow.value = false
  await nextTick()
  isShow.value = true
}

const transitionName = ref<ITransitionName>(TransitionPresets.fade)

const setTransitionName = (name: ITransitionName) => {
  transitionName.value = name
  triggerTransition()
}
</script>
