<!-- eslint-disable vue/no-v-model-argument -->

<template>
  <div class="flex flex-col min-h-[300px]">
    <QuillEditor
      class="content-editor bg-white border rounded-[16px] w-full scroll-style self-center min-h-[300px]"
      v-model:content="contentValue"
      toolbar="full"
      spellcheck="false"
      content-type="html"
      theme="snow"
      @keyup="saveDebounce"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import { debounce } from '@/helpers/functions'

export default defineComponent({
  components: { QuillEditor },
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue', 'save'],
  computed: {
    contentValue: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveDebounce: debounce(function (this: any) {
      this.$emit('save')
    }, 3000)
  }
})
</script>

<style scoped>
:deep(.ql-container.content-editor > .ql-editor) {
  padding: 25px 30px;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
:deep(.hide-quill-borders .ql-toolbar.ql-snow) {
  border: none;
}
:deep(.ql-snow) *:not(.ql-font-monospace):not(.ql-font-serif) {
  font-family: 'Roboto', sans-serif;
}

:deep(.ql-snow.ql-container) {
  border: none !important;
}
:deep(.ql-snow .ql-tooltip) {
  @apply !z-30 !ml-[150px];
}
:deep(.ql-snow .ql-tooltip[data-mode='link']::before) {
  content: 'Введите ссылку:';
}
:deep(.ql-snow .ql-tooltip[data-mode='video']::before) {
  content: 'Введите ссылку:';
}

:deep(.ql-snow.ql-container:not(.ql-disabled)) {
  background: #f4f5f7 !important;
}

:deep(
    .ql-snow .ql-editor h1,
    .ql-snow .ql-editor h2,
    .ql-snow .ql-editor h3,
    .ql-snow .ql-editor h4
  ) {
  font-weight: bold !important;
  line-height: 140% !important;
  color: #111012 !important;
}

:deep(.ql-snow .ql-editor h1) {
  font-size: 24px !important;
}

:deep(.ql-snow .ql-editor ul > li) {
  font-size: 18px !important;
  color: #111012cc !important;
}

:deep(.ql-snow .ql-editor ol > li) {
  font-size: 18px !important;
  color: #111012cc !important;
}

:deep(.ql-snow .ql-editor h2) {
  font-size: 22px !important;
}

:deep(.ql-snow .ql-editor h3) {
  font-size: 19px !important;
}

:deep(.ql-snow .ql-editor h4) {
  font-size: 17px !important;
}

:deep(.ql-snow .ql-editor p) {
  line-height: 150% !important;
  font-weight: 400 !important;
  font-size: 18px !important;
  color: #111012cc !important;
}

:deep(.ql-snow .ql-editor a) {
  font-weight: 400 !important;
  font-size: 18px !important;
  text-decoration: underline !important;
}

:deep(.ql-snow a) {
  color: #1d2f5d !important;
}

:deep(.ql-toolbar.ql-snow) {
  position: sticky !important;
  margin: 5px 0 auto;
  width: 100%;
  top: 0px !important;
  padding: 22px 20px !important;
  z-index: 1 !important;
  background: #ffffff !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

:deep(.ql-editor[contenteditable='true']) {
  background: #fff !important;
}

:deep(.ql-editor > *) {
  word-break: break-word !important;
  overflow: hidden !important;
}

:deep(.ql-editor) {
  min-height: 300px;
}

:deep(.ql-editor .ql-video) {
  width: 70% !important;
  height: 400px !important;
}
</style>
