import axios from "axios"

export const Image={
    async uploadImage(BASE_URL,data){
        return axios.post(`${BASE_URL}/upload`, data).then(result => {
             return result
         })

    }
}