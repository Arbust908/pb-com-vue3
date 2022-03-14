<template>
  <section>
    <h2 class="text-3xl mb-2 ml-4">
      {{ t('exp_title') }}
    </h2>
    <article
      v-for="job in exp_list"
      :key="job"
      :class="
        t(`exp.${job}.end`) === 'null' ? 'border-violet-700 dark:border-violet-300' : null
      "
      class="mb-4 p-4 shadow border rounded dark:border-blueGray-700"
    >
      <h3
        class="font-bold flex flex-col sm:flex-row md:flex-col lg:flex-row mb-2"
      >
        <span>{{ t(`exp.${job}.rol`) }}</span>
        <span class="hidden sm:inline md:hidden lg:inline px-2"> / </span>
        <span> {{ t(`exp.${job}.company`) }} </span>
      </h3>
      <div class="text-sm mb-2 leading-relaxed">
        <span>{{ formatDate(t(`exp.${job}.start`)) }}</span> -
        <span
          v-if="t(`exp.${job}.end`) === 'null'"
          class="px-2 rounded font-bold bg-emerald-300 text-emerald-800"
        >
          Actual
        </span>
        <span v-else>{{ formatDate(t(`exp.${job}.end`)) }}</span>
      </div>
      <p v-if="!print_mode" class="font-light">
        <span
          v-if="detail_shown.includes(job)"
          :key="`${job}-detail`"
          v-html="t(`exp.${job}.more`) || ''"
        />
        <span v-else :key="`${job}-description`">
          {{ t(`exp.${job}.description`) }}
        </span>
      </p>
      <template v-if="print_mode">
        <p>
          <span v-html="t(`exp.${job}.more`) || t(`exp.${job}.description`)" />
        </p>
      </template>
      <aside class="mt-2 flex justify-end">
        <button
          v-if="t(`exp.${job}.more`) !== 'null'"
          :class="print_mode ? 'opacity-0' : null"
          class="text-sm px-2 py-1 rounded transition duration-150 ease-out transform hover:bg-emerald-400 hover:text-emerald-700 hover:-translate-y-1"
          @click="addDetail(job)"
        >
          {{
            detail_shown.includes(job)
              ? t('see_less')
              : t('see_more')
          }}
        </button>
      </aside>
    </article>
  </section>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGeneralStore } from '~/stores'

const { t, locale } = useI18n()
const general_store = useGeneralStore()
const { print_mode } = storeToRefs(general_store)

const exp_list = ['bitpatagonia', 'viafoura', 'forian', 'pointmore', 'digitalhouse_dev', 'digitalhouse', 'netdreams', 'musculocreativo', 'mindset']
const detail_shown = ref([] as string[])
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString(locale.value, { year: 'numeric', month: 'short', day: '2-digit' })
}
const addDetail = (job: string) => {
  const isInDetails = detail_shown.value.includes(job)
  if (isInDetails)
    detail_shown.value = detail_shown.value.filter(title => title !== job)

  else
    detail_shown.value.push(job)
}
</script>
