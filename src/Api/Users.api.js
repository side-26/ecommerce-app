import axios from 'axios';
export const Users = {
    async Get(BASE_URL) {
      return await axios.get(`${BASE_URL}/Users/`)
        .then(res => {
          const Users = res.data;
          return Users
        }).catch(err => {
          return err
        });
    },
    async Post(BASE_URL, data, UserId) {
      await axios.post(`${BASE_URL}/Orders/${UserId}`, data)
        .then(res => {
          return res.statusText;
        }).catch(err => {
          console.log(err);
        });
    },
    async Delete(BASE_URL, UserId) {
      await axios.delete(`${BASE_URL}/Orders/${UserId}`)
        .then(res => {
          const products = res.data;
          return products
        }).catch(err => {
          console.log(err);
        });
    }
  }