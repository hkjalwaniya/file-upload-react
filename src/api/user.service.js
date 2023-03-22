import axios from 'axios'

const uploadCAD = async (CADData) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts`
    const response = await axios.post(url, CADData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    if (response) {
      response.user = {CADData}
      response.success = true
      return response
    }
    return false
  } catch (err) {
    throw new Error(err.response.data.message)
  }
}

export const userService = {
  uploadCAD
}
