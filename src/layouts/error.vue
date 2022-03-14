<template>
  <main class="error">
    <div
      class="flex items-center justify-center w-full min-h-screen bg-gray-100"
    >
      <div
        class="flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse"
      >
        <div class="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
          <header class="mb-6">
            <h2
              class="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl"
            >
              {{ error.statusCode || '' }}
            </h2>
            <h3
              class="text-xl font-light leading-normal lg:text-3xl md:text-3xl"
            >
              {{ error.message || '' }}
            </h3>
          </header>

          <p class="max-w-sm mb-5 leading-5 md:leading-7">
            Don't worry, sometimes even we make mistakes. You can find plenty of
            other things on our homepage.
          </p>

          <nuxt-link
            to="/"
            class="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700"
          >
            Volver a la Home
          </nuxt-link>
        </div>

        <div class="max-w-lg" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
.error {
  @apply w-full flex justify-center items-center relative;
}
.error--msg {
  @apply flex flex-col justify-center items-center absolute inset-0;
}
.error--msg__box {
  @apply flex flex-col justify-center items-center;
}
.error--msg__code {
  @apply text-5xl pb-4;
}
.error--msg__text {
  @apply text-lg pb-2;
}
.error--msg__route {
  @apply opacity-50 italic;
}
.error--msg__button {
  @apply underline;
}
.error--msg__button:hover {
  @apply text-emerald-500;
}
@media screen and (min-width: 768px) {
  .error--msg {
    @apply mx-auto;
  }
  .error--msg__code {
    @apply text-6xl;
  }
  .error--msg__text {
    @apply text-2xl;
  }
  .error--msg__button {
    @apply text-xl;
  }
}
@media screen and (min-width: 1024px) {
  .error--msg__text {
    @apply text-3xl;
  }
  .error--msg__button {
    @apply text-2xl;
  }
}
</style>
