import axios from "axios";

export const Get = async (BASE_URL) => {

    return await axios.get(`${BASE_URL}/Orders/`)
      .then(res => {
        const products = res.data;
        return products
      }).catch(err => {
        return err
      });
  
  
  }
  export const Post = async (BASE_URL, data, ProductId) => {
    await axios.post(`${BASE_URL}/Orders/${ProductId}`, data)
      .then(res => {
        return res.statusText;
      }).catch(err => {
        console.log(err);
      });
  }
  export const Delete = async (BASE_URL, ProductId) => {
    await axios.delete(`${BASE_URL}/Orders/${ProductId}`)
      .then(res => {
        const products = res.data;
        return products
      }).catch(err => {
        console.log(err);
      });
  }