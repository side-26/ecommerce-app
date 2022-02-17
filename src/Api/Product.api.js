import axios from "axios";

export const Product = {
   Get(BASE_URL, productId=1) {
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
  }
}