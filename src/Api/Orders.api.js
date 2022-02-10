import axios from "axios";

export const orders = {
  async Get(BASE_URL) {
    return await axios.get(`${BASE_URL}/Orders/`)
      .then(res => {
        const Orders = res.data;
        return Orders
      }).catch(err => {
        return err
      });
  },
  async Post(BASE_URL, data, ProductId) {
    await axios.post(`${BASE_URL}/Orders/${ProductId}`, data)
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