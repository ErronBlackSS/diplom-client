<template>
  <header class="sticky top-0 z-[50]">
    <nav class="bg-main-blue border-gray-200 px-4 lg:px-6 py-2.5">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >LearnZone
          </span>
        </a>
        <div class="flex items-center h-[30px] gap-[30px] lg:order-2">
          <template v-if="!isAuthenticated">
            <router-link
              to="?auth=login"
              class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Войти
            </router-link>
            <router-link
              to="?auth=registration"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Начать
            </router-link>
          </template>
          <template v-else>
            <router-link to="profile">
              <UserAvatar />
            </router-link>
            <div class="cursor-pointer" @click="$emit('logout')">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 13V15C13 15.5304 12.7805 16.0391 12.3898 16.4142C11.9991 16.7893 11.4692 17 10.9167 17H2.58333C2.0308 17 1.50089 16.7893 1.11019 16.4142C0.719493 16.0391 0.5 15.5304 0.5 15V3C0.5 2.46957 0.719493 1.96086 1.11019 1.58579C1.50089 1.21071 2.0308 1 2.58333 1H10.5C11.6505 1 13 1.8955 13 3V5M16.3333 13L20.5 9L16.3333 5M6.33333 9H19.6667"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </template>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 items-center font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <router-link
                to="/catalog"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                Каталог
              </router-link>
            </li>
            <li>
              <router-link
                to="/learn"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                Обучение
              </router-link>
            </li>
            <li>
              <router-link
                to="/teach/courses"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                Преподавание
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserAvatar from '@/modules/user/components/UserAvatar.vue'

export default defineComponent({
  components: { UserAvatar },
  emits: ['logout'],
  props: {
    isAuthenticated: {
      type: Boolean,
      required: true
    }
  }
})
</script>
