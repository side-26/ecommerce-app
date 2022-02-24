import axios from "axios";

export const Product = {
  async Get(BASE_URL, productId=1) {
    return  axios.get(`${BASE_URL}/products/${productId}`)
      .then(res => {
        const products = res.data;
        return products
      }).catch(err => {
        return err
      });


  },
  async delete(BASE_URL,id){
    return  axios.delete(`${BASE_URL}/products/${id}`).then(res=> res.status).catch(err=>{
      return err
    })
  },
  async post(BASE_URL,data){
    return axios.post(BASE_URL, data).then(res => {
      return res
  }).catch(err=>err)
  },
  async patch(BASE_URL,id,data){
    return axios.patch(`${BASE_URL}/products/${id}`, data).then(res => {
      return res
  }).catch(err=>err)
  }
}