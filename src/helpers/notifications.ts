import { ElMessage } from 'element-plus'

export function saveNotify(text: string) {
  return ElMessage({
    message: text,
    duration: 2500,
    type: 'success'
  })
}
