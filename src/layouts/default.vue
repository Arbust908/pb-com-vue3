<template>
  <div
    :class="print_mode ? 'print' : null"
    class="font-main bg-blueGray-100 dark:bg-blueGray-900 text-blueGray-900 dark:text-blueGray-100 grid grid-layout min-h-screen"
  >
    <header
      v-if="!print_mode"
      class="flex flex-col sm:flex-row sm:justify-between items-center p-2 fixed top-0 w-full bg-blueGray-200 dark:bg-blueGray-800 z-50"
    >
      <RouterLink to="/" class="rounded-lg px-2 py-1 hover:text-violet-500">
        <h1 class="text-lg font-bold flex items-center">
          <Logo class="w-8 h-8 fill-current" />
          Pancho Blanco
        </h1>
      </RouterLink>
      <nav>
        <ul class="flex space-x-3 items-center justify-between mr-4">
          <li class="flex w-8 h-8 items-center justify-center">
            <i
              :class="isDark ? 'i-ri:sun-fill' : 'i-ri:moon-clear-fill'"
              class="w-5 h-5 fill-current transition duration-150 ease-out cursor-pointer hover:text-violet-500"
              @click="toggleDark()"
            />
          </li>
          <li>
            <RouterLink
              class="px-2 py-1 rounded-lg transition duration-150 ease-out hover:text-violet-500 hover:underline"
              to="/cv"
            >
              Curriculum Vitae
            </RouterLink>
          </li>
          <!--
          <li>
            <RouterLink
              class="px-2 py-1 rounded-lg hover:text-violet-500 hover:shadow"
              to="/clases"
            >
              Clases
            </RouterLink>
          </li>
          -->
          <li>
            <RouterLink
              class="px-4 py-1 rounded-lg bg-violet-400 text-blueGray-900 transition duration-150 ease-out dark:bg-violet-600 dark:text-blueGray-100 hover:text-violet-500 hover:shadow dark:hover:bg-violet-800"
              to="/blog"
            >
              Blog
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
    <RouterView class="z-20" />
    <footer
      class="px-6 bg-blueGray-200 dark:bg-blueGray-800 flex items-center justify-between text-sm flex-wrap"
    >
      <div>
        <a
          href="https://github.com/Arbust908"
          class="p-3 md:py-0 inline-flex items-center"
          title="Github profile"
        >
          <span v-if="print_mode" class="mr-2">https://github.com/Arbust908</span>
          <i class="w-6 h-6 inline i-carbon:logo-github" />
        </a>
      </div>
      <div class="w-full h-1 bg-gradient-to-r from-teal-600 to-indigo-500" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { isDark, toggleDark } from '~/composables'
import { useGeneralStore } from '@/stores'

const general_store = useGeneralStore()
const { print_mode } = storeToRefs(general_store)

</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
@media screen and (min-width: 640px) {
  body {
    min-height: 100vh;
  }
}
@media screen and (min-width: 768px) {
  /* width */
  ::-webkit-scrollbar {
    @apply w-2;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    @apply bg-blueGray-200;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    @apply bg-blueGray-400 rounded-xl;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-gradient-to-tr from-cyan-400 to-violet-600;
  }
  .dark ::-webkit-scrollbar-track {
    @apply bg-blueGray-800;
  }

  /* Handle */
  .dark::-webkit-scrollbar-thumb {
    @apply bg-blueGray-600 rounded-xl;
  }

  /* Handle on hover */
  .dark::-webkit-scrollbar-thumb:hover {
    @apply bg-gradient-to-tr from-amber-400 to-rose-600;
  }
}
</style>
<style scoped>
.grid-layout {
  padding-top: 88px;
  grid-template-rows: 1fr 64px;
}
@media screen and (min-width: 768px) {
  .grid-layout {
    padding-top: 56px;
    grid-template-rows: 1fr 40px;
  }
}

.grid-layout.print {
  padding-top: 0;
}
</style>
