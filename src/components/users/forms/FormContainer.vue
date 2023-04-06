<template>
  <section class="w-full min-h-[75vh] px-5 py-8 bg-white rounded-t-3xl flex flex-col justify-between">
    <div class="w-full">
      <slot/>
    </div>
    <div class="w-full flex items-center justify-between">
      <arrow-left-icon class="text-dark-text h-6 w-6"/>
      <arrow-right-icon class="text-dark-text h-6 w-6"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ArrowRightIcon} from "@heroicons/vue/24/solid";
import {ArrowLeftIcon} from "@heroicons/vue/24/solid";
</script>

<style scoped>

</style>