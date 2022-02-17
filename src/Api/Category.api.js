import axios from 'axios';
export const category={
    async get(BASE_URL) {
        return await axios.get(`${BASE_URL}/category/`)
          .then(res => {
            const category = res.data;
            return category
          }).catch(err => {
            return err
          });
    
    
      }
}