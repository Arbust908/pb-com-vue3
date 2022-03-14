<template>
  <section>
    <h2 class="text-3xl mb-2 ml-4">
      Estudios
    </h2>
    <article
      v-for="learn in learn_list"
      :key="learn"
      class="mb-4 p-4 text-blueGray-700 dark:text-blueGray-300"
    >
      <h3 class="font-bold flex flex-col sm:flex-row mb-2">
        <span>{{ t(`study.${learn}.place`) }}</span>
      </h3>
      <div class="text-sm mb-2">
        <span>{{ t(`study.${learn}.date`) }}</span>
      </div>
      <p class="font-light">
        {{ t(`study.${learn}.description`) }}
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const learn_list = ['dh', 'up', 'slc']
</script>
