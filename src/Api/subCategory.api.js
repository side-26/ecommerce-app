import axios from 'axios';
export const subCategory = {
  async get(BASE_URL, filtering = "") {
    return await axios.get(`${BASE_URL}/subcategory?${filtering}`)
      .then(res => {
        const subcategory = res.data;
        return subcategory
      }).catch(err => {
        return err
      });


  }
}