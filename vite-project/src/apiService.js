const BASE_URL = 'https://react-fast-pizza-api.onrender.com/api'

export async function getMenu () {
   try {
      const res = await fetch(`${ BASE_URL }/menu`)

      if (!res.ok) throw new Error()

      const {data} = await res.json()
      return data
   } catch (error) {
      throw new Error(`${ error }: Unable to get menu`)
   }
}

export async function createOrder (newOrder) {
   try {
      const res = await fetch(`${ BASE_URL }/order`, {
         method: 'POST',
         body: JSON.stringify(newOrder),
         headers: {
            "Content-Type" : "application/json"
         }
      })

      if (!res.ok) throw new Error()

      const {data} = await res.json()
      return data
   } catch (error) {
      throw new Error(`${ error }: Unable to create a new order`)
   }
}

export async function getOrder (id) {
   try {
      const res = await fetch(`${BASE_URL}/order/${id}`)

      if (!res.ok) throw new Error()

      const {data} = await res.json()
      return data
   } catch (error) {
      throw new Error(`${ error }: Unable to get order 😢`)
   }
}

export async function updateOrder (id, updateObj) {
   try {
      const res = await fetch(`${ BASE_URL }/order/${ id }`, {
         method: 'PATCH',
         body: JSON.stringify(updateObj),
         headers: {
            "Content-Type" : "application/json"
         }
      })

      if (!res.ok) throw new Error()

   } catch (error) {
      throw new Error(`${error}: Unable to update your order😢`)
   }
}