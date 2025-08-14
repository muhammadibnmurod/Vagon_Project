<script setup>
import { ref } from 'vue'
import bgImage from '../assets/background_img.png'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faUser, faLock, faEye, faEyeSlash)

import { useRouter } from 'vue-router'
const router = useRouter()

import { login } from '../api/auth.js'

const show = ref(false)
const username = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

const handleLogin = async () => {
  errorMessage.value = ''
  loading.value = true

router.push('/')
  try {
    const data = await login(username.value, password.value)

    localStorage.setItem('accesToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    localStorage.setItem('username', data.username)

  } catch (error) {
    errorMessage.value = error.message || 'Muammo'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div
    class="bg-center flex justify-center items-center bg-no-repeat bg-cover bg-gray-500 bg-blend-multiply w-screen h-screen"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="bg-white rounded-2xl text-center p-6">
      <h1 class="text-green-800 uppercase py-4 text-[24px] font-medium font-serif">Login</h1>

      <form class="max-w-80 mx-auto pt-4 flex flex-col gap-3">
        <div class="mb-5 flex items-center gap-2 border-b border-green-800">
          <FontAwesomeIcon :icon="faUser" class="text-green-800" />
          <input
            v-model="username"
            type="text"
            placeholder="Login"
            class="flex-1 text-black placeholder:text-black focus:outline-none focus:ring-0"
          />
        </div>
        <div class="mb-5 flex items-center gap-2 border-b border-green-800 pb-2">
          <FontAwesomeIcon :icon="faLock" class="text-green-800" />
          <input
            v-model="password"
            :type="show ? 'text' : 'password'"
            placeholder="Password"
            class="flex-1 text-black placeholder:text-black focus:outline-none focus:ring-0"
          />
          <button
            type="button"
            @click="show = !show"
            :aria-label="show ? 'Hide password' : 'Show password'"
            class="text-green-800 focus:outline-none focus:ring-0"
            :class="show ? 'text-green-600' : 'text-green-800'"
          >
            <FontAwesomeIcon :icon="show ? faEyeSlash : faEye " />
          </button>
        </div>
        <button
          @click="handleLogin"
          type="submit"
          class="bg-green-800 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
