import axios from "axios";

export const orders = {
<<<<<<< HEAD
  async get(BASE_URL,filtering="") {
    return await axios.get(`${BASE_URL}/Orders${filtering}`)
=======
  async get(BASE_URL,filterOption="") {
    return await axios.get(`${BASE_URL}/Orders?${filterOption}`)
>>>>>>> 9a112dd1d8ce5070825ba1bb82c7502068e8d9c0
      .then(res => {
        const Orders = res.data;
        return Orders
      }).catch(err => {
        return err
      });
  },
  async Post(BASE_URL, data) {
    await axios.post(`${BASE_URL}/Orders`, data)
      .then(res => {
        return res.statusText;
      }).catch(err => {
        console.log(err);
      });
  },
  async Delete(BASE_URL, ProductId) {
    await axios.delete(`${BASE_URL}/Orders/${ProductId}`)
      .then(res => {
        const products = res.data;
        return products
      }).catch(err => {
        console.log(err);
      });
  }
}