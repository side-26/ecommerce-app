import axios from "axios";

export const Product = {
    async Get(BASE_URL, userId) {

        return await axios.get(`${BASE_URL}/Users/${userId}`)
            .then(res => {
                const User = res.data;
                return User
            }).catch(err => {
                return err
            });


    },
}