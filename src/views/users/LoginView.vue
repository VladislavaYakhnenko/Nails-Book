<template>
   <user-layout class="w-full min-h-screen bg-gradient-to-b from-light-beige to-purple flex flex-col items-center px-2.5 pt-8 gap-8">
     <section class="w-full flex flex-col items-center gap-4">
       <h1 class="font-montserrat font-semibold text-3xl text-dark-text">
         Добрий день!
       </h1>
       <p class="font-montserrat font-normal text-center text-base text-dark-text">
         Для запису на процедуру, будь ласка, введіть вашу електронну пошту.
       </p>
     </section>
     <form-container>
       <input-component/>
     </form-container>
   </user-layout>
</template>

<script setup lang="ts">
import FormContainer from "@/components/users/forms/FormContainer.vue";
import InputComponent from "@/components/ui/InputComponent.vue";
import UserLayout from "@/layout/UserLayout.vue";
</script>

<style scoped>

</style>