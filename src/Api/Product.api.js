import axios from "axios";

export const Product={
    async Get (BASE_URL, productId){

            return await axios.get(`${BASE_URL}/products/${productId}`)
              .then(res => {
                const products = res.data;
                return products
              }).catch(err => {
                return err
              });
        
        
          },
}