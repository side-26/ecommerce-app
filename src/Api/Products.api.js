import axios from 'axios';

export const Products = {
  async Get(BASE_URL,pageInfo="") {

    return await axios.get(`${BASE_URL}/products?${pageInfo}`)
      .then(res => {
        const products = res.data
        
        
        return products;
      }).catch(err => {
        return err
      });


  },async getLength(BASE_URL,pageInfo="") {

    return await axios.get(`${BASE_URL}/products?${pageInfo}`)
      .then(res => {
        const productsLength = res.headers["x-total-count"];
        return productsLength;
      }).catch(err => {
        return err
      });


  },
  
// 
//   Post = async (BASE_URL, data, ProductId) => {
//     await axios.post(`${BASE_URL}/products/${ProductId}`, data)
//       .then(res => {
//         return res.statusText;
//       }).catch(err => {
//         console.log(err);
//       });
//   },
//   Delete = async (BASE_URL, ProductId) => {
//     await axios.delete(`${BASE_URL}/products/${ProductId}`)
//       .then(res => {
//         const products = res.data;
//         return products
//       }).catch(err => {
//         console.log(err);
//       });
//   }
}



