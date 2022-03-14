import axios from "axios";

export const order = {
  async get(BASE_URL,id) {
    return await axios.get(`${BASE_URL}/Orders/${id}`)
      .then(res => {
        const Orders = res.data;
        return Orders
      }).catch(err => {
        return err
      });
  },
  async patch(BASE_URL,id,data){
    return await axios.patch(`${BASE_URL}/Orders/${id}`, data).then(res => {
      return res
  }).catch(err=>err)
  }
}