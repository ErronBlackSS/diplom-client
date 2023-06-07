import axios from '@/plugins/axios'

export async function getCatalog() {
  try {
    const res = await axios.get('catalog')
    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}
