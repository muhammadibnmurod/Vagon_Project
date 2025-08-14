<script setup>
import { ref } from 'vue'
import bgImage from '../assets/background_img.png'

// FontAwesome import
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

// Ikonni ro‘yxatga qo‘shamiz
library.add(faUser)
library.add(lock)

// Input qiymati
const username = ref('')
const password = ref('')
</script>

<template>
  <div
    class="bg-center flex justify-center items-center bg-no-repeat bg-cover bg-gray-500 bg-blend-multiply w-screen h-screen"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="bg-white rounded-2xl text-center p-6">
      <h1 class="text-green-800 uppercase py-4 text-[24px] font-medium font-serif">
        Login
      </h1>

      <form class="max-w-80 mx-auto pt-4 flex flex-col gap-3">
        <div class="mb-5 flex items-center gap-2 border-b border-green-800">
          <FontAwesomeIcon :icon="faUser" class="text-green-800" />
          <input
            v-model="username"
            type="text"
            placeholder="Login"
            class="flex-1 text-black placeholder:text-black focus:outline-none focus:ring-0"
          />
        </div>        <div class="mb-5 flex items-center gap-2 border-b border-green-800">
        <FontAwesomeIcon :icon="lock" />
          <input
            v-model="password"
            type="text"
            placeholder="Login"
            class="flex-1 text-black placeholder:text-black focus:outline-none focus:ring-0"
          />
        </div>
      </form>
    </div>
  </div>
</template>
