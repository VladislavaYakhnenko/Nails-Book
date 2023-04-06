<template>
  <nav aria-label="Progress">
    <ol role="list" class="flex items-center">
      <li v-for="(step, stepIdx) in steps" :key="step.name"
          :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative']">
        <template v-if="step.status === 'complete'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-purple"/>
          </div>
          <a href="#"
             class="relative flex h-8 w-8 items-center justify-center rounded-full bg-purple">
            <CheckIcon class="h-5 w-5 text-white" aria-hidden="true"/>
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-300"/>
          </div>
          <a href="#"
             class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple bg-white"
             aria-current="step">
            <span class="h-2.5 w-2.5 rounded-full bg-purple" aria-hidden="true"/>
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else>
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-300"/>
          </div>
          <a href="#"
             class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
            <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true"/>
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import {CheckIcon} from '@heroicons/vue/20/solid'

const steps = [
  {name: 'Step 1', href: '#', status: 'complete'},
  {name: 'Step 2', href: '#', status: 'complete'},
  {name: 'Step 3', href: '#', status: 'current'},
  {name: 'Step 4', href: '#', status: 'upcoming'},
  {name: 'Step 5', href: '#', status: 'upcoming'},
]
</script>

<style scoped>

</style>