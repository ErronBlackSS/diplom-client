import axios from '@/plugins/axios'

export async function getCatalog() {
  try {
    const res = await axios.get('catalog')
    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getCoursePromo(courseId: number) {
  try {
    const res = await axios.get(`catalog/${courseId}/promo`)
    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function bookOnCourse(courseId: number) {
  try {
    const res = await axios.post(`courses/${courseId}/book`)
    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}
