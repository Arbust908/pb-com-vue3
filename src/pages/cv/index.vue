<template>
  <main :class="print_mode ? 'print' : null" class="p-6 relative">
    <aside
      v-if="!print_mode"
      class="flex flex-col sm:flex-row justify-between lg:justify-end mb-6 lang"
    >
      <div class="lg:hidden space-x-2">
        <a
          href="#exp"
          class="py-3 sm:py-0 hover:underline hover:text-violet-600"
          @click.prevent="scrollToElement('exp')"
        >
          {{ t('exp_title') }}
        </a>
        <a
          href="#study"
          class="py-3 sm:py-0 hover:underline hover:text-violet-600"
          @click.prevent="scrollToElement('study')"
        >
          {{ t('study_title') }}
        </a>
      </div>
      <button
        class="hover:underline text-rigth flex items-center hover:text-violet-600 transition duration-200 ease-out"
        @click="changeLang()"
      >
        <i class="w-5 h-5 mr-1 i-ri:translate" />
        <span>
          {{ t('change_lang') }}
        </span>
      </button>
    </aside>
    <Personal class="personal" />
    <Experiences ref="exp" class="exp" />
    <Studies ref="study" class="study" />
    <button
      title="back to top"
      class="absolute bottom-0 right-0 m-8 rounded transform transition duration-200 shadow hover:scale-105 hover:-translate-y-2 hover:bg-violet-200 dark:hover:bg-violet-800 hover:shadow-md"
      @click="backToTop"
    >
      <i class="m-3 i-ri:arrow-up-line" />
    </button>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGeneralStore } from '~/stores'
import { useUP } from '~/composables/ultimateProtocol'
import type { MetaData } from '~/composables/ultimateProtocol'

const meta: MetaData = {
  base_url: 'panchoblanco.com',
  title: 'Curriculum Vitae :: Pancho Blanco',
  description:
          'Hola soy Pancho Blanco, un Desarrollador y Diseñador Grafico. Estas son mis habilidades y experiencias. Tengo mas de 4 años en la industria del desarrollo y tengo una pasion por enseñar y aprender.',
}
const genral_store = useGeneralStore()
const { print_mode } = storeToRefs(genral_store)
const { t, locale, availableLocales } = useI18n()
const changeLang = () => {
  console.log('ABIL', availableLocales)
  if (locale.value === 'en')
    locale.value = 'es'

  else
    locale.value = 'en'
}

const exp = ref(null)
const study = ref(null)
const scrollToElement = (ref: string, offset = 100) => {
  let topValue = 0
  if (ref === 'exp') {
    console.log('exp', exp)
    topValue = exp.value?.offsetTop - offset || 0
  }
  else { topValue = study.value?.offsetTop - offset || 0 }
  window.scrollTo(0, topValue)
}
const backToTop = () => {
  window.scrollTo(0, 0)
}
useHead(useUP(meta))
</script>

<style scoped>
@media screen and (min-width: 768px) {
  main {
    display: grid;
    grid-template-areas:
      'lang .'
      'personal exp'
      '. exp'
      '. study';
    grid-template-columns: 400px 1fr;
    grid-template-rows: 64px 640px 1fr auto;
    column-gap: 1.5rem;
  }
  .lang {
    grid-area: lang;
  }
  .personal {
    grid-area: personal;
  }
  .exp {
    grid-area: exp;
  }
  .study {
    grid-area: study;
  }
  main.print {
    grid-template-rows: 20px 640px 1fr auto;
  }
}
</style>
