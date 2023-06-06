<template>
  <div class="flex flex-col border">
    <CheckListItem :condition="checkList.emptyModules">
      Каждый модуль должен содержать как минимум 1 урок
    </CheckListItem>
    <CheckListItem :condition="checkList.enoughLessons >= 8">
      В курсе должно быть минимум 10 уроков (сейчас {{ checkList.enoughLessons }})
    </CheckListItem>
    <CheckListItem :condition="checkList.enoughModules >= 3">
      В курсе должно быть минимум 3 модуля (сейчас {{ checkList.enoughModules }})
    </CheckListItem>
    <CheckListItem :condition="checkList.enoughSteps">
      Каждый урок должен состоять минимум из 3 шагов
    </CheckListItem>
    <CheckListItem :condition="checkList.enoughTests >= 5">
      В курсе должно быть минимум 5 тестовых заданий (сейчас {{ checkList.enoughTests }})
    </CheckListItem>
    <CheckListItem :condition="checkList.moduleNames">
      Корректные названия модулей (Не должно быть названий модуля "Новый модуль")
    </CheckListItem>
    <CheckListItem :condition="checkList.stepsEmptyContent">
      Не должно быть шагов с автосгенерированным контентом
    </CheckListItem>
    <CheckListItem :condition="checkList.testEnoughAnswers">
      Все тестовые задания должны иметь минимум 2 варианта ответа
    </CheckListItem>
    <CheckListItem :condition="checkList.testRightAnswers">
      Все тестовые задания должны иметь минимум 1 верный ответ
    </CheckListItem>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CheckListItem from './CheckListItem.vue'
import { CourseChecklist } from '../../types'

export default defineComponent({
  components: { CheckListItem },
  props: {
    checkList: {
      type: Object as PropType<CourseChecklist>,
      required: true
    }
  }
})
</script>

<style scoped></style>
