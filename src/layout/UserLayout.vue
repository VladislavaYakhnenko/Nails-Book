<template>
  <div class="w-full">
    <steps-progress-bar/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import StepsProgressBar from "@/components/ui/StepsProgressBar.vue";
</script>

<style scoped>

</style>