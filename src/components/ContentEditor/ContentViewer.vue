<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <div class="h-max w-full bg-white pb-[10px] mb-[20px] rounded-[16px]">
    <QuillEditor
      class="bg-white rounded-[16px] w-full h-max content-editor"
      v-model:content="contentValue"
      :toolbar="'full'"
      :read-only="true"
      spellcheck="false"
      content-type="html"
      theme="snow"
    />
  </div>
</template>

<script lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { QuillEditor },
  props: {
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    contentValue() {
      return this.content
    }
  }
})
</script>

<style scoped>
:deep(.ql-toolbar) {
  display: none;
}
:deep(.ql-container.reglament-editor > .ql-editor) {
  padding: 25px 30px;
  height: fit-content;
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

:deep(.ql-snow .ql-editor ul > li) {
  font-size: 18px !important;
  color: #111012cc !important;
}

:deep(.ql-snow .ql-editor ol > li) {
  font-size: 18px !important;
  color: #111012cc !important;
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

:deep(.ql-snow .ql-editor h2) {
  font-size: 22px !important;
}

:deep(.ql-snow .ql-editor h3) {
  font-size: 19px !important;
}

:deep(.ql-snow .ql-editor h4) {
  font-size: 17px !important;
}

:deep(.ql-snow .ql-editor p, .ql-snow .ql-editor ol, .ql-snow .ql-editor ul) {
  line-height: 150% !important;
  font-weight: 400 !important;
  font-size: 18px !important;
  color: #111012cc !important;
}

:deep(.ql-snow .ql-editor a) {
  font-weight: 700 !important;
  font-size: 18px !important;
  text-decoration: underline !important;
}

:deep(.ql-snow a) {
  color: #16ab63 !important;
}

:deep(.ql-toolbar.ql-snow) {
  position: sticky !important;
  top: 83px !important;
  padding: 20px 0 !important;
  z-index: 1 !important;
  background: #f4f5f7 !important;
  border: none !important;
}

:deep(.ql-editor[contenteditable='true']) {
  border-top-left-radius: 28px !important;
  border-top-right-radius: 28px !important;
  border-top: 28px solid white !important;
  background: #fff !important;
}

:deep(.ql-editor > *) {
  word-break: break-word !important;
  overflow: hidden !important;
}

:deep(.ql-editor .ql-video) {
  width: 70% !important;
  height: 400px !important;
}
</style>
