import { ENV, authFetch } from "@/utils"

export class Listsong{
  async getAll(){
    try {
      const sortFilter = 'sort=publishedAt:asc'
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LISTSONG}?${sortFilter}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }
}

export class Addsong{
  async create(data, userId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LISTSONG}`
      const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: {
        ...data,
        user: userId,
      },
    }),
    }

    const response = await authFetch(url, params)
    const result = await response.json()

    if(response.status !== 200) throw result

      return result

    } catch (error) {
       throw error
    }
  }
}

export class Delsong{
  async delete(songId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LISTSONG}/${songId}`
        const params = {
          method: 'DELETE',
        }

        const response = await authFetch(url, params)
        const result = await response.json()

        if(response.status !== 200) throw result

        return result

    } catch (error) {
        throw error
    }
  }
}

