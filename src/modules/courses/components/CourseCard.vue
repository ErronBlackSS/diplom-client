<template>
  <div class="border rounded-[6px] cursor-pointer relative">
    <PopMenu trigger="hover">
      <div class="absolute right-[10px] top-[10px]">
        <svg
          @click.stop
          class="h-[26px] w-[26px] transition duration-[300ms] bg-white/60 flex items-center justify-center rounded-[6px]"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0002 8.74548C13.7835 8.74548 14.4184 8.11054 14.4184 7.3273C14.4184 6.54406 13.7835 5.90912 13.0002 5.90912C12.217 5.90912 11.582 6.54406 11.582 7.3273C11.582 8.11054 12.217 8.74548 13.0002 8.74548ZM13.0002 14.4182C13.7835 14.4182 14.4184 13.7833 14.4184 13C14.4184 12.2168 13.7835 11.5818 13.0002 11.5818C12.217 11.5818 11.582 12.2168 11.582 13C11.582 13.7833 12.217 14.4182 13.0002 14.4182ZM14.4184 18.6728C14.4184 19.456 13.7835 20.091 13.0002 20.091C12.217 20.091 11.582 19.456 11.582 18.6728C11.582 17.8895 12.217 17.2546 13.0002 17.2546C13.7835 17.2546 14.4184 17.8895 14.4184 18.6728Z"
            fill="#7e7e80"
          />
        </svg>
      </div>
      <template #menu>
        <div class="flex flex-col gap-[10px]">
          <div class="cursor-pointer" @click="gotoEdit">
            <p>Редактировать</p>
          </div>
          <div class="cursor-pointer text-red-500" @click="showDeleteCourse">
            <p>Удалить</p>
          </div>
        </div>
      </template>
    </PopMenu>
    <router-link :to="courseDetailLink">
      <div class="p-[20px] flex flex-col">
        {{ name }}
      </div>
    </router-link>
  </div>
  <ModalBoxDeleteCourse
    v-if="showDeleteCourseModal"
    :name="name"
    @delete="deleteCourse"
    @close="showDeleteCourseModal = false"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PopMenu from '@/components/PopMenu.vue'
import ModalBoxDeleteCourse from './ModalBoxes/ModalBoxDeleteCourse.vue'

export default defineComponent({
  components: { PopMenu, ModalBoxDeleteCourse },
  data: () => ({
    showDeleteCourseModal: false
  }),
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  emits: ['delete'],
  computed: {
    courseDetailLink() {
      return `/course/${this.id}/overview`
    },
    courseEditLink() {
      return `/course/${this.id}/edit`
    }
  },
  methods: {
    showDeleteCourse() {
      this.showDeleteCourseModal = true
    },
    deleteCourse() {
      this.showDeleteCourseModal = false
      this.$emit('delete', this.id)
    },
    gotoEdit() {
      this.$router.push(this.courseEditLink)
    }
  }
})
</script>

<style scoped></style>
