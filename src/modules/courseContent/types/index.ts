export type Module = {
  id: number
  name: string
  description: string
  order: number
}

export type CourseContent = {
  modules: Module[]
}
