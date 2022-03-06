// import {BASE_URL} from '../Config/Url.config';
import api from '../Services/http.service'
export const Login = {
    async GetToken(BASE_URL, Data) {
        const confing = {}
        api.post(BASE_URL, Data, confing)
    }
}